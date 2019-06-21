import CheckBox from '../checkbox'
// import Loader from '@components/loader'
import { PRIVACY_URL, TERMS_URL } from '@constants'
import { httpRequestLoading } from '@state/actions/http'
import {
  userLoggedIn,
  userPasswordReset,
  userRequiresNewPassword,
  userSessionExpired,
  userSetUsername,
} from '@state/actions/login'
import { colours } from '@styles/index'
import { Auth } from 'aws-amplify'
import React, { Component } from 'react'
import { Linking, View } from 'react-native'
import LoginHeader from '@components/login/header'
import { connect } from 'react-redux'
import { PageWrapper, TextLink, InputSpacer, ButtonWrapper, InputSection } from '../styles'
import LoginInput from '../input'
import LoginButton from '../loginButton'

interface IProps {
  httpState: any
  sessionExpired: boolean
  resetPassword: boolean
  dispatchRequestLoading: () => void
  dispatchUserLogin: () => void
  dispatchUserNewPassword: () => void
  dispatchUserSessionExpired: () => void
  dispatchResetPassword: () => void
}

interface IState {
  username?: string
  password?: string
  agreeTerms?: boolean
  hasErrors?: boolean
  isSignin?: boolean
  usernameErrorMessage?: string
  passwordErrorMessage?: string
  focusedInput: 'email' | 'password' | null
}

class SignInForm extends Component<IProps, IState> {
  state = {
    username: null,
    password: null,
    agreeTerms: true,
    hasErrors: false,
    isSignin: false,
    usernameErrorMessage: null,
    passwordErrorMessage: null,
    focusedInput: null,
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.sessionExpired) {
      return {
        hasErrors: true,
        usernameErrorMessage: 'Your session expired, please login again',
        passwordErrorMessage: null,
      }
    }

    if (nextProps.username) {
      return {
        username: nextProps.username,
      }
    }

    return null
  }

  handleCheckBoxChange() {
    this.setState((prevState) => {
      return {
        agreeTerms: !prevState.agreeTerms,
      }
    })
  }

  async handleSignIn() {
    this.setState({ isSignin: true, hasErrors: false, usernameErrorMessage: null, passwordErrorMessage: null })

    const {
      dispatchUserNewPassword,
      dispatchUserLogin,
      dispatchRequestLoading,
      dispatchUserSessionExpired,
    } = this.props

    dispatchRequestLoading(true, 'login')
    dispatchUserSessionExpired(false)

    try {
      const user = await Auth.signIn(this.state.username, this.state.password)

      switch (user.challengeName) {
        case 'NEW_PASSWORD_REQUIRED':
          dispatchUserNewPassword(user)
          break
        default:
          dispatchUserLogin(user)
          break
      }
    } catch (ex) {
      this.setState({ isSignin: false, hasErrors: true })
      switch (ex.code) {
        case 'UserNotFoundException':
          this.setState({ usernameErrorMessage: 'Sorry that email does not exist' })
          break
        case 'UserNotConfirmedException':
          this.setState({ usernameErrorMessage: 'You have not confirmed your email address' })
          break
        case 'PasswordResetRequiredException':
          this.setState({ passwordErrorMessage: 'Your password must be reset' })
          break
        case 'InvalidParameterException':
          this.setState({ usernameErrorMessage: 'Please enter a valid email address' })
          break
        case 'NotAuthorizedException':
          this.setState({ passwordErrorMessage: 'The password you have entered is incorrect' })
          break
        default:
          this.setState({ usernameErrorMessage: 'Our database is currently down, please try again later' })
          break
      }
    }

    dispatchRequestLoading(false, 'login')
  }

  async handlePasswordReset() {
    const {
      dispatchSetUsername,
      dispatchPasswordReset,
    } = this.props

    dispatchSetUsername(this.state.username)
    dispatchPasswordReset(true)
  }

  handleClick(url) {
    Linking.openURL(url)
  }

  isValidLoginState() {
    return (!!this.state.username && !!this.state.password && !!this.state.agreeTerms)
  }

  isInSignInProcess() {
    return (!!this.state.isSignin)
  }

  onTextChange(text: string, inputType: string) {
    if (inputType === 'password') {
      this.setState({
        password: text
      })
    } else if (inputType === 'username') {
      this.setState({
        username: text
      })
    }
  }

  render() {
    return (
      <PageWrapper backgroundColour={colours.olive.base}>
        <LoginHeader
          showBackArrow={false}
          title='Sign in'
          colour={colours.white.base}
        />
        <InputSection>
          <LoginInput
            colour={colours.white.base}
            hasErrors={this.state.hasErrors && this.state.usernameErrorMessage}
            focused={this.state.focusedInput === 'email' || (this.state.username !== null && this.state.username.length > 0)}
            inputLabel='Username'
            inputValue={this.state.username}
            keyboardType='email-address'
            autoCapitalize='none'
            textContentType='emailAddress'
            onTextChange={(text) => this.setState({ username: text })}
            onFocus={() => this.setState({ focusedInput: 'email' })}
            onBlur={() => this.setState({ focusedInput: null })}
            errorMessage={this.state.usernameErrorMessage}
            secureTextEntry={false}
          />
          <InputSpacer />
          <LoginInput
            colour={colours.white.base}
            hasErrors={this.state.hasErrors && this.state.passwordErrorMessage}
            focused={this.state.focusedInput === 'password' || (this.state.password !== null && this.state.password.length > 0)}
            inputLabel='Password'
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
          <ButtonWrapper align='flex-end' addMarginTop>
            <TextLink onPress={() => this.handlePasswordReset()}>Forgot password?</TextLink>
          </ButtonWrapper>
        </InputSection>
        {/* <CheckboxWrapper>
            <CheckBox disabled={this.isInSignInProcess()} onChange={() => this.handleCheckBoxChange()}>
              <Label light small>
                I agree to the <TextLink onPress={() => this.handleClick(TERMS_URL)}>Terms of Use</TextLink> and <TextLink onPress={() => this.handleClick(PRIVACY_URL)}>Privacy Policy</TextLink>
              </Label>
            </CheckBox>
          </CheckboxWrapper> */}

        <LoginButton
          disabled={!this.isValidLoginState()}
          onPress={() => this.handleSignIn()}
          buttonLabel='Sign in'
          colour={colours.white.base}
        />
      </PageWrapper>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  dispatchUserLogin: user => {
    dispatch(userLoggedIn(user))
  },
  dispatchUserNewPassword: user => {
    dispatch(userRequiresNewPassword(user))
  },
  dispatchRequestLoading: (value, source) => {
    dispatch(httpRequestLoading(value, source))
  },
  dispatchUserSessionExpired: value => {
    dispatch(userSessionExpired(value))
  },
  dispatchPasswordReset: (value) => {
    dispatch(userPasswordReset(value))
  },
  dispatchSetUsername: (username) => {
    dispatch(userSetUsername(username))
  },
})

const mapStateToProps = state => {
  return {
    httpState: state.httpState,
    sessionExpired: state.loginState.sessionExpired,
    resetPassword: state.loginState.resetPassword,
    username: state.loginState.username,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignInForm)
