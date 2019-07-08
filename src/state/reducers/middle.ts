import {
  SET_FOCUSED_DAY,
  RECEIVE_DIARY_ENTRIES,
  FILTER_DIARY_ENTRIES,
  TOGGLE_DIARY_MODAL,
  TOGGLE_ENTRY_STATE,
  FILTER_MARKED_DAYS,
} from '../actions/middle'

const initialState = {
  focusedDay: null,
  diaryEntries: null,
  currentEntry: null,
  showDiaryModal: false,
  currentEntryState: false,
  markedDates: []
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
    case TOGGLE_DIARY_MODAL:
      return {
        ...state,
        showDiaryModal: !state.showDiaryModal,
      }
    case TOGGLE_ENTRY_STATE:
      return {
        ...state,
        currentEntryState: action.payload
      }
    case FILTER_MARKED_DAYS:
      return {
        ...state,
        markedDates: state.diaryEntries.map(entry => entry.date)
      }
    default:
      return state
  }
}

export default middleState
