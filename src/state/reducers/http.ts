import {
  HTTP_REQUEST_LOADING,
} from '../actions/http'
import { RESET_STATE } from '../actions/reset'

const initialState = {
  loading: false,
  source: null,
}

export const httpState = (state = initialState, action) => {
  switch (action.type) {
    case HTTP_REQUEST_LOADING:
      return {
        ...state,
        loading: action.payload,
        source: action.source,
      }
    case RESET_STATE:
      return initialState
    default:
      return state
  }
}

export default httpState
