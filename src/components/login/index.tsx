import React, { Component } from 'react'
import { Auth } from 'aws-amplify'
import { connect } from 'react-redux'
import ForgottenPassword from './forgottenPassword'
import NewPassword from './newPassword'
import SignInForm from './signInForm'
import { ScrollWrapper } from './styles'
import { userLoggedIn, userPasswordReset, userRequiresNewPassword, userResetCodeSent } from '@state/actions/login'

export interface IProps {
  children: any
  user?: CognitoUser
  userChallenge: any,
  resetPassword: boolean,
}

class Login extends Component<IProps> {

  state = {
    hasCheckedLogin: false,
  }

  componentDidUpdate() {
    if (this.scrollView) {
      this.scrollView.scrollTo({ x: 0, y: 0, animated: false })
    }
  }

  async componentDidMount() {
    if (this.props.user) {
      this.setState({ hasCheckedLogin: true })
      return
    }

    try {
      const user = await Auth.currentAuthenticatedUser({
        bypassCache: false,
      })
      this.props.dispatchUserLogin(user)
    } catch (ex) {
      this.props.dispatchUserLogin(null)
    }

    this.setState({ hasCheckedLogin: true })
  }

  navigateBackToLogin() {
    const {
      dispatchPasswordReset,
      dispatchUserRequiresNewPassword,
    } = this.props

    dispatchPasswordReset(false)
  }

  navigateBackToResetPassword() {
    const {
      dispatchPasswordReset,
      dispatchUserResetCodeSent,
      dispatchUserRequiresNewPassword,
      resetCodeSent,
    } = this.props

    dispatchPasswordReset(true)

    if (!resetCodeSent) {
      dispatchUserRequiresNewPassword(false)
      return this.navigateBackToLogin()
    }

    dispatchUserResetCodeSent(false)
  }

  render() {
    if (!this.state.hasCheckedLogin) {
      return null
    }

    if (this.props.user) {
      return <>{this.props.children}</>
    } else {
      return (
        <ScrollWrapper ref={(ref) => this.scrollView = ref}>
          {(this.props.resetPassword && !this.props.resetCodeSent) && (
            <ForgottenPassword
              navigateBack={() => this.navigateBackToLogin()}
            />
          )}

          {(this.props.userChallenge || this.props.resetCodeSent) && (
            <NewPassword
              includeCode={this.props.resetCodeSent}
              navigateBack={() => this.navigateBackToResetPassword()}
            />
          )}

          {!this.props.userChallenge && !this.props.resetPassword && (
            <SignInForm />
          )}
        </ScrollWrapper>
      )
    }
  }
}

const mapDispatchToProps = dispatch => ({
  dispatchUserLogin: user => {
    dispatch(userLoggedIn(user))
  },
  dispatchUserRequiresNewPassword: user => {
    dispatch(userRequiresNewPassword(user))
  },
  dispatchPasswordReset: value => {
    dispatch(userPasswordReset(value))
  },
  dispatchUserResetCodeSent: value => {
    dispatch(userResetCodeSent(value))
  },
})

const mapStateToProps = state => {
  return {
    user: state.loginState.user,
    userChallenge: state.loginState.userChallenge,
    username: state.loginState.username,
    resetPassword: state.loginState.resetPassword,
    resetCodeSent: state.loginState.resetCodeSent,
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login)

