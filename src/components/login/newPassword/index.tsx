import { httpRequestLoading } from '@state/actions/http'
import { userLoggedIn, userPasswordReset, userRequiresNewPassword, userSessionExpired } from '@state/actions/login'
import { Auth } from 'aws-amplify'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button } from 'react-native'
import { ButtonWrapper, ErrorMessage, InputField, InputWrapper } from '../styles'
import { NewPasswordButtonWrapper, NewPasswordCopyWrapper, NewPasswordFormWrapper, NewPasswordWrapper, Label, Heading, Body } from './styles'

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
}

interface IState {
  code?: string
  password?: string
  hasErrors?: boolean
  passwordErrorMessage?: string
  confirmPasswordErrorMessage?: string
  codeErrorMessage?: string
  confirmedPassword?: string
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
      <NewPasswordWrapper>
        <NewPasswordCopyWrapper>
          {this.props.includeResetCode && (<Heading>Forgot Password?</Heading>)}
          {!this.props.includeResetCode && (<Heading>Change Password</Heading>)}
          {this.props.includeResetCode && (<Body>Please enter the 6-digit code we have emailed you, and set a new password</Body>)}
          {!this.props.includeResetCode && (<Body>Please reset the temporary password that we have sent you</Body>)}
        </NewPasswordCopyWrapper>
        <NewPasswordFormWrapper>
          {this.props.includeResetCode && (
            <InputWrapper>
              <Label>6-digit code</Label>
              <InputField hasErrors={this.state.hasErrors && this.state.codeErrorMessage} maxLength={6} onChangeText={(text) => this.setState({ code: text })} />
              <ErrorMessage>{this.state.codeErrorMessage}</ErrorMessage>
            </InputWrapper>
          )}
          <InputWrapper>
            <Label>Password (8+ characters)</Label>
            <InputField hasErrors={this.state.hasErrors && this.state.passwordErrorMessage} autoComplete='password' textContentType='password' onChangeText={(text) => this.setState({ password: text })} secureTextEntry={true} />
            <ErrorMessage>{this.state.passwordErrorMessage}</ErrorMessage>
          </InputWrapper>
          <InputWrapper>
            <Label>Confirm password</Label>
            <InputField hasErrors={this.state.hasErrors && this.state.confirmPasswordErrorMessage} autoComplete='password' textContentType='password' onChangeText={(text) => this.setState({ confirmedPassword: text })} secureTextEntry={true} />
            <ErrorMessage>{this.state.confirmPasswordErrorMessage}</ErrorMessage>
          </InputWrapper>
        </NewPasswordFormWrapper>
        <NewPasswordButtonWrapper>
          <ButtonWrapper>
            <Button onPress={() => this.handleUpdatePassword()} title='Reset password and sign in' />
          </ButtonWrapper>
        </NewPasswordButtonWrapper>
      </NewPasswordWrapper>
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
