export const USER_LOGGED_IN = 'USER_LOGGED_IN'
export const USER_LOGGED_OUT = 'USER_LOGGED_OUT'
export const USER_REQUIRES_NEW_PASSWORD = 'USER_REQUIRES_NEW_PASSWORD'
export const USER_RESET_CODE_SENT = 'USER_RESET_CODE_SENT'
export const USER_PASSWORD_RESET = 'USER_PASSWORD_RESET'
export const USER_SESSION_EXPIRED = 'USER_SESSION_EXPIRED'
export const USER_SET_USERNAME = 'USER_SET_USERNAME'

export const userPasswordReset = (value) => {
  return {
    type: USER_PASSWORD_RESET,
    payload: value,
  }
}

export const userSetUsername = (value) => {
  return {
    type: USER_SET_USERNAME,
    payload: value,
  }
}

export const userResetCodeSent = (value) => {
  return {
    type: USER_RESET_CODE_SENT,
    payload: value,
  }
}

export const userLoggedIn = (user) => {
  return {
    type: USER_LOGGED_IN,
    payload: user,
  }
}

export const userLoggedOut = (user) => {
  return {
    type: USER_LOGGED_OUT,
    payload: user,
  }
}

export const userRequiresNewPassword = (user) => {
  return {
    type: USER_REQUIRES_NEW_PASSWORD,
    payload: user,
  }
}

export const userSessionExpired = (username) => {
  return {
    type: USER_SESSION_EXPIRED,
    payload: username,
  }
}
