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
import { KeyboardAvoidingView, Linking, Text } from 'react-native'

import { connect } from 'react-redux'
import { ButtonText, ButtonWrapper, CheckboxWrapper, ErrorMessage, InputField, InputWrapper, SectionWrapper, Spacer, SubmitButton, Label } from '../styles'
import { LoaderWrapper, TextLink } from './styles'

interface IProps {
  httpState: any,
  sessionExpired: boolean,
  resetPassword: boolean,
  dispatchRequestLoading: () => void,
  dispatchUserLogin: () => void,
  dispatchUserNewPassword: () => void,
  dispatchUserSessionExpired: () => void,
  dispatchResetPassword: () => void
}

interface IState {
  username?: string,
  password?: string,
  agreeTerms?: boolean,
  hasErrors?: boolean,
  isSignin?: boolean,
  usernameErrorMessage?: string,
  passwordErrorMessage?: string,
}

class SignInForm extends Component<IProps, IState> {
  state = {
    username: null,
    password: null,
    agreeTerms: false,
    hasErrors: false,
    isSignin: false,
    usernameErrorMessage: null,
    passwordErrorMessage: null,
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

  render() {
    return (
      <SectionWrapper>
        <InputWrapper>
          <Label>Email address</Label>
          <InputField hasErrors={this.state.hasErrors && this.state.usernameErrorMessage} keyboardType='email-address' autoCapitalize='none' value={this.state.username} onChangeText={(text) => this.setState({ username: text })} textContentType='emailAddress' />
          <ErrorMessage>{this.state.usernameErrorMessage}</ErrorMessage>
        </InputWrapper>
        <InputWrapper>
          <Label>Password (8+ characters)</Label>
          <InputField hasErrors={this.state.hasErrors && this.state.passwordErrorMessage} textContentType='password' onChangeText={(text) => this.setState({ password: text })} secureTextEntry={true} />
          <ErrorMessage>{this.state.passwordErrorMessage}</ErrorMessage>
        </InputWrapper>
        <CheckboxWrapper>
          <CheckBox disabled={this.isInSignInProcess()} onChange={() => this.handleCheckBoxChange()}>
            <Label>
              I agree to the <TextLink onPress={() => this.handleClick(TERMS_URL)}>Terms of Use</TextLink> and <TextLink onPress={() => this.handleClick(PRIVACY_URL)}>Privacy Policy</TextLink>
            </Label>
          </CheckBox>
        </CheckboxWrapper>
        <ButtonWrapper>
          <SubmitButton disabled={!this.isValidLoginState()} onPress={() => this.handleSignIn()}>
            {!(this.props.httpState.loading && this.props.httpState.source === 'login') && (
              <ButtonText disabled={!this.isValidLoginState()}>Sign in</ButtonText>
            )}
            {/* {this.props.httpState.loading && this.props.httpState.source === 'login' && (
              <LoaderWrapper>
                <Loader type='button' width={38} height={32} />
              </LoaderWrapper>
            )} */}
          </SubmitButton>
        </ButtonWrapper>
        <ButtonWrapper center>
          <TextLink weight={100} onPress={() => this.handlePasswordReset()}>Forgot Password?</TextLink>
        </ButtonWrapper>
        <Spacer />
      </SectionWrapper>
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
