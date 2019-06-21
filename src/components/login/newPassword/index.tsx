import { httpRequestLoading } from '@state/actions/http'
import { userLoggedIn, userPasswordReset, userRequiresNewPassword, userSessionExpired } from '@state/actions/login'
import { Auth } from 'aws-amplify'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, View } from 'react-native'
import { ButtonWrapper, PageWrapper, InputSpacer } from '../styles'
import { Message } from './styles'
import { colours } from '@styles/index'
import LoginHeader from '../header';
import LoginInput from '../input';
import LoginButton from '../loginButton';

interface IProps {
  user?: CognitoUser
  userChallenge?: CognitoUser
  username?: string
  includeResetCode: boolean
  dispatchUserLogin: (value) => void
  dispatchPasswordReset: (value) => void
  dispatchRequestLoading: (value: boolean, source: string) => void
  dispatchUserNewPassword: (user) => void
  dispatchUserSessionExpired: (value) => void
  navigateBack: () => void
}

interface IState {
  code?: string
  password?: string
  hasErrors?: boolean
  passwordErrorMessage?: string
  confirmPasswordErrorMessage?: string
  codeErrorMessage?: string
  confirmedPassword?: string
  focusedInput: string
}

class NewPassword extends Component<IProps, IState> {
  state = {
    code: null,
    password: null,
    confirmedPassword: null,
    hasErrors: false,
    passwordErrorMessage: null,
    confirmPasswordErrorMessage: null,
    codeErrorMessage: null,
    focusedInput: null
  }

  async handleUpdatePassword() {
    const {
      dispatchUserLogin,
      dispatchPasswordReset,
      dispatchRequestLoading,
      dispatchUserNewPassword,
      dispatchUserSessionExpired,
      userChallenge,
      includeResetCode,
    } = this.props

    // Reset state
    this.setState({
      hasErrors: false,
      passwordErrorMessage: null,
      confirmPasswordErrorMessage: null,
      codeErrorMessage: null,
    })

    // Check if the passwords is null
    if (!this.state.password) {
      this.setState({
        hasErrors: true,
        passwordErrorMessage: 'Please enter your new password',
        confirmPasswordErrorMessage: null,
        codeErrorMessage: null,
      })

      return
    }

    // Check if passwords match, AWS doesn't do this out of the box
    if (this.state.password !== null && this.state.password !== this.state.confirmedPassword) {
      this.setState({
        hasErrors: true,
        passwordErrorMessage: null,
        confirmPasswordErrorMessage: `Your passwords don't match`,
        codeErrorMessage: null,
      })

      return
    }

    dispatchRequestLoading(true, 'resetPasswordAndSignIn')
    if (includeResetCode) {
      try {
        const { username } = this.props
        await Auth.forgotPasswordSubmit(username, this.state.code, this.state.password)
        const user = await Auth.signIn(username, this.state.password)

        dispatchPasswordReset(false)
        dispatchUserLogin(user)
        dispatchUserNewPassword(null)
      } catch (ex) {
        this.setState({ hasErrors: true })

        switch (ex.code) {
          case 'ExpiredCodeException':
            this.setState({ codeErrorMessage: 'You have used an expired code' })
            break
          case 'CodeMismatchException':
            this.setState({ codeErrorMessage: 'The code you entered is incorrect' })
            break
          case 'InvalidParameterException':
          case 'InvalidPasswordException':
            this.setState({ passwordErrorMessage: 'Password does not meet the minimum character requirements' })
            break
          default:
            this.setState({ passwordErrorMessage: 'A technical error occured, please try again later' })
            break
        }
      }
    } else {

      try {
        const userSession = await Auth.completeNewPassword(userChallenge, this.state.password)
        const user = await Auth.signIn(userSession.username, this.state.password)

        dispatchUserLogin(user)
        dispatchUserNewPassword(null)
      } catch (ex) {
        this.setState({ hasErrors: true })

        switch (ex.code) {
          case 'InvalidPasswordException':
            this.setState({ passwordErrorMessage: 'Password does not meet the minimum character requirements' })
            break
          case 'NotAuthorizedException':
            dispatchUserLogin(null)
            dispatchUserNewPassword(null)
            dispatchUserSessionExpired(true)
            break
          default:
            this.setState({ passwordErrorMessage: 'Our database is currently down, please try again' })
            break
        }
      }
    }

    dispatchRequestLoading(false, 'resetPasswordAndSignIn')
  }

  render() {
    return (
      <PageWrapper backgroundColour={colours.blue.dark}>
        <LoginHeader
          showBackArrow={true}
          navigateBack={this.props.navigateBack}
          title='Change password'
          backLabel='Sign in'
          subTitle='Please change your password to something more memorable.'
          colour={colours.white.base}
        />
        {/* <Message>Please change your password to something more memorable.</Message> */}
        {/* <NewPasswordCopyWrapper>
          {this.props.includeResetCode && (<Heading>Forgot Password?</Heading>)}
          {!this.props.includeResetCode && (<Heading>Change Password</Heading>)}
          {this.props.includeResetCode && (<Body>Please enter the 6-digit code we have emailed you, and set a new password</Body>)}
          {!this.props.includeResetCode && (<Body>Please reset the temporary password that we have sent you</Body>)}
        </NewPasswordCopyWrapper> */}
        <View>
          {this.props.includeResetCode && (
            <LoginInput
              colour={colours.white.base}
              hasErrors={this.state.hasErrors && this.state.codeErrorMessage}
              focused={this.state.focusedInput === 'code' || (this.state.code !== null && this.state.code.length > 0)}
              inputLabel='6-digit code'
              inputValue={this.state.code}
              keyboardType='number-pad'
              autoCapitalize='none'
              textContentType='oneTimeCode'
              onTextChange={(text) => this.setState({ code: text })}
              onFocus={() => this.setState({ focusedInput: 'code' })}
              onBlur={() => this.setState({ focusedInput: null })}
              errorMessage={this.state.codeErrorMessage}
              secureTextEntry={false}
            />
          )}
          <LoginInput
            colour={colours.white.base}
            hasErrors={this.state.hasErrors && this.state.passwordErrorMessage}
            focused={this.state.focusedInput === 'password' || (this.state.password !== null && this.state.password.length > 0)}
            inputLabel='Password (8+ characters)'
            inputValue={this.state.password}
            keyboardType='default'
            autoCapitalize='none'
            textContentType='password'
            onTextChange={(text) => this.setState({ password: text })}
            onFocus={() => this.setState({ focusedInput: 'password' })}
            onBlur={() => this.setState({ focusedInput: null })}
            errorMessage={this.state.passwordErrorMessage}
            secureTextEntry={true}
          />
          <Message label>New password must contain 8+ characters, 1+ symbol, 1+ number and 1+ capital letter</Message>
          <LoginInput
            colour={colours.white.base}
            hasErrors={this.state.hasErrors && this.state.confirmPasswordErrorMessage}
            focused={this.state.focusedInput === 'confirmedPassword' || (this.state.confirmedPassword !== null && this.state.confirmedPassword.length > 0)}
            inputLabel='Confirm password'
            inputValue={this.state.confirmedPassword}
            keyboardType='default'
            autoCapitalize='none'
            textContentType='password'
            onTextChange={(text) => this.setState({ confirmedPassword: text })}
            onFocus={() => this.setState({ focusedInput: 'confirmedPassword' })}
            onBlur={() => this.setState({ focusedInput: null })}
            errorMessage={this.state.confirmPasswordErrorMessage}
            secureTextEntry={true}
          />
        </View>
        <LoginButton
          disabled={false}
          onPress={() => this.handleUpdatePassword()}
          buttonLabel='Reset and sign in'
          colour={colours.white.base}
          addSpacer
        />
      </PageWrapper>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  dispatchUserLogin: user => {
    dispatch(userLoggedIn(user))
  },
  dispatchRequestLoading: (value, source) => {
    dispatch(httpRequestLoading(value, source))
  },
  dispatchUserNewPassword: user => {
    dispatch(userRequiresNewPassword(user))
  },
  dispatchUserSessionExpired: value => {
    dispatch(userSessionExpired(value))
  },
  dispatchPasswordReset: (value) => {
    dispatch(userPasswordReset(value))
  },
})

const mapStateToProps = state => {
  return {
    user: state.loginState.user,
    userChallenge: state.loginState.userChallenge,
    username: state.loginState.username,
    includeResetCode: state.loginState.resetCodeSent,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewPassword)
