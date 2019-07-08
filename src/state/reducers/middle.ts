import {
  SET_FOCUSED_DAY,
  RECEIVE_DIARY_ENTRIES,
  FILTER_DIARY_ENTRIES,
} from '../actions/middle'

const initialState = {
  focusedDay: null,
  diaryEntries: null,
  currentEntry: null,
}

export const middleState = (state = initialState, action) => {
  switch (action.type) {
    case SET_FOCUSED_DAY:
      return {
        ...state,
        focusedDay: action.payload,
      }
    case RECEIVE_DIARY_ENTRIES:
      return {
        ...state,
        diaryEntries: action.payload,
      }
    case FILTER_DIARY_ENTRIES:
      return {
        ...state,
        currentEntry: action.payload[0],
      }
    default:
      return state
  }
}

export default middleState
