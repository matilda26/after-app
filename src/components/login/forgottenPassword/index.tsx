// import Loader from '@components/loader'
import { LoaderWrapper } from '@components/login/signInForm/styles'
import { httpRequestLoading } from '@state/actions/http'
import { userResetCodeSent, userSetUsername } from '@state/actions/login'
import { Auth } from 'aws-amplify'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ButtonText, ButtonWrapper, ErrorMessage, InputField, InputWrapper, SubmitButton } from '../styles'
import { Label, Heading, Body } from '../newPassword/styles'
import { ForgottenPasswordCopyWrapper, ForgottenPasswordFormWrapper, ForgottenPasswordWrapper } from './styles'

interface IProps {
  httpState: any,
  sessionExpired: boolean,
  resetPassword: boolean,
  username: string,
  dispatchRequestLoading: (value: boolean, source: string) => void,
  dispatchUserResetCodeSent: (value: boolean) => void
  dispatchUserSetUsername: (username: string) => void
}

interface IState {
  username?: string,
  hasErrors?: boolean,
  usernameErrorMessage?: string
  isSignIn?: boolean
}

class ForgottenPassword extends Component<IProps, IState> {
  state = {
    username: null,
    hasErrors: false,
    usernameErrorMessage: null,
    isSignin: false,
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.username) {
      return {
        username: nextProps.username,
      }
    }
    return null
  }

  async handlePasswordReset() {
    this.props.dispatchRequestLoading(true, 'resetPassword')

    try {
      const deliveryDetails = await Auth.forgotPassword(this.state.username)
      this.props.dispatchUserResetCodeSent(true)
      this.props.dispatchUserSetUsername(this.state.username)
    } catch (ex) {
      this.setState({ isSignin: false, hasErrors: true })

      switch (ex.code) {
        case 'CodeDeliveryFailureException':
          this.setState({ usernameErrorMessage: 'Your reset code could not be sent, try again' })
          break
        case 'LimitExceededException':
          this.setState({ usernameErrorMessage: 'Reset rate limit has been exceeded, wait 15 minutes' })
          break
        case 'UserNotFoundException':
          this.setState({ usernameErrorMessage: 'Username not found' })
          break
        case 'TooManyRequestsException':
          this.setState({ usernameErrorMessage: 'You have tried too many times to reset' })
          break
        default:
          break
      }
    }

    this.props.dispatchRequestLoading(false, 'resetPassword')
  }

  render() {
    return (
      <ForgottenPasswordWrapper>
        <ForgottenPasswordCopyWrapper>
          <Heading>Forgot Password?</Heading>
          <Body>Enter email address and we will send you a link to reset your password.</Body>
        </ForgottenPasswordCopyWrapper>
        <ForgottenPasswordFormWrapper>
          <InputWrapper>
            <Label>Email address</Label>
            <InputField hasErrors={this.state.hasErrors && this.state.usernameErrorMessage} value={this.state.username} keyboardType='email-address' autoCapitalize='none' onChangeText={(text) => this.setState({ username: text })} textContentType='emailAddress' />
            <ErrorMessage>{this.state.usernameErrorMessage}</ErrorMessage>
          </InputWrapper>
        </ForgottenPasswordFormWrapper>
        <ButtonWrapper>
          <SubmitButton onPress={() => this.handlePasswordReset()}>
            {!(this.props.httpState.loading && this.props.httpState.source === 'resetPassword') && (
              <ButtonText>Send</ButtonText>
            )}
            {/* {this.props.httpState.loading && this.props.httpState.source === 'resetPassword' && (
              <LoaderWrapper>
                <Loader type='button' width={38} height={32} />
              </LoaderWrapper>
            )} */}
          </SubmitButton>
        </ButtonWrapper>
      </ForgottenPasswordWrapper>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  dispatchRequestLoading: (value: boolean, source: string) => {
    dispatch(httpRequestLoading(value, source))
  },
  dispatchUserResetCodeSent: (value: boolean) => {
    dispatch(userResetCodeSent(value))
  },
  dispatchUserSetUsername: (username: string) => {
    dispatch(userSetUsername(username))
  }
})

const mapStateToProps = state => {
  return {
    httpState: state.httpState,
    resetPassword: state.loginState.resetPassword,
    username: state.loginState.username,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ForgottenPassword)
