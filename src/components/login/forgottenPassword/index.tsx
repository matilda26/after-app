import { httpRequestLoading } from '@state/actions/http'
import { userResetCodeSent, userSetUsername } from '@state/actions/login'
import { Auth } from 'aws-amplify'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { PageWrapper } from '../styles'
import { Message, Spacer } from './styles'
import { colours } from '@styles/index'
import LoginInput from '../input'
import LoginButton from '../loginButton'
import LoginHeader from '../header'
import { View } from 'react-native'

interface IProps {
  httpState: any,
  sessionExpired: boolean,
  resetPassword: boolean,
  username: string,
  dispatchRequestLoading: (value: boolean, source: string) => void,
  dispatchUserResetCodeSent: (value: boolean) => void
  dispatchUserSetUsername: (username: string) => void
  navigateBack: () => void
}

interface IState {
  username?: string,
  hasErrors?: boolean,
  usernameErrorMessage?: string
  isSignIn?: boolean
  focusedInput: 'email' | null
}

class ForgottenPassword extends Component<IProps, IState> {
  state = {
    username: null,
    hasErrors: false,
    usernameErrorMessage: null,
    isSignin: false,
    focusedInput: null
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
      <PageWrapper backgroundColour={colours.pink.light}>
        <LoginHeader
          showBackArrow={true}
          navigateBack={this.props.navigateBack}
          title='Forgot password'
          backLabel='Sign in'
          colour={colours.olive.dark}
        />
        <View>
          <Message>Enter your email and we'll send you a temporary password.</Message>
          <LoginInput
            colour={colours.olive.dark}
            hasErrors={this.state.hasErrors && this.state.usernameErrorMessage}
            focused={this.state.focusedInput === 'email' || (this.state.username !== null && this.state.username.length > 0)}
            inputLabel='Email address'
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
          <Spacer />
        </View>
        <LoginButton
          onPress={() => this.handlePasswordReset()}
          disabled={this.state.username === null || this.state.username.length === 0}
          buttonLabel='Reset password'
          colour={colours.olive.dark}
        />
      </PageWrapper>
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
