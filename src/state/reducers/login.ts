import {
  USER_LOGGED_IN,
  USER_LOGGED_OUT,
  USER_PASSWORD_RESET,
  USER_REQUIRES_NEW_PASSWORD,
  USER_RESET_CODE_SENT,
  USER_SESSION_EXPIRED,
  USER_SET_USERNAME,
} from '../actions/login'
import { RESET_STATE } from '../actions/reset'

const initialState = {
  user: null,
  username: null,
  userChallenge: null,
  sessionExpired: false,
  resetPassword: false,
  resetCodeSent: false,
}

export const loginState = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGGED_IN:
      return {
        ...state,
        user: action.payload,
      }
    case USER_LOGGED_OUT:
      return {
        ...state,
        user: null,
      }
    case USER_SET_USERNAME:
      return {
        ...state,
        username: action.payload,
      }
    case USER_PASSWORD_RESET:
      return {
        ...state,
        resetPassword: action.payload,
      }
    case USER_RESET_CODE_SENT:
      return {
        ...state,
        resetCodeSent: action.payload,
      }
    case USER_REQUIRES_NEW_PASSWORD:
      return {
        ...state,
        userChallenge: action.payload,
      }
    case USER_SESSION_EXPIRED:
      return {
        ...state,
        sessionExpired: action.payload,
      }
    case RESET_STATE:
      return initialState
    default:
      return state
  }
}

export default loginState
