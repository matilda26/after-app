import { httpRequestLoading } from "@state/actions/http"
import DiaryService from "@services/diaryService"

export const SET_FOCUSED_DAY = 'SET_FOCUSED_DAY'
export const setFocusedDay = (day) => {
  return {
    type: SET_FOCUSED_DAY,
    payload: day,
  }
}

export const RECEIVE_DIARY_ENTRIES = 'RECEIVE_DIARY_ENTRIES'
export const receiveDiaryEntries = (entries) => {
  return {
    type: RECEIVE_DIARY_ENTRIES,
    payload: entries
  }
}

export const FILTER_DIARY_ENTRIES = 'FILTER_DIARY_ENTRIES'
export const filterDiaryEntriesBySelectedDay = (currentEntry) => {
  return {
    type: FILTER_DIARY_ENTRIES,
    payload: currentEntry
  }
}

export const TOGGLE_DIARY_MODAL = 'TOGGLE_DIARY_MODAL'
export const toggleDiaryModal = () => {
  return {
    type: TOGGLE_DIARY_MODAL,
  }
}

export const TOGGLE_ENTRY_STATE = 'TOGGLE_ENTRY_STATE'
export const toggleEntryState = (booleanState, saved) => {
  return {
    type: TOGGLE_ENTRY_STATE,
    payload: booleanState,
    saved: saved,
  }
}

export const FILTER_MARKED_DAYS = 'FILTER_MARKED_DAYS'
export const filterMarkedDays = () => {
  return {
    type: FILTER_MARKED_DAYS,
    // payload: booleanState
  }
}

export function fetchDiaryEntries() {
  return (dispatch, getState) => {
    dispatch(httpRequestLoading(true, 'diary'))

    DiaryService.getAllDiaryEntries()
    .then(data => {
      dispatch(receiveDiaryEntries(data))
    })
    .then(() => {
      const state = getState()
      const filtered = state.middleState.diaryEntries.filter(entry => entry.diaryBody !== '...')
      console.log('filtered', filtered)
      const mapped = filtered.map(e => e.date)
      console.log('mapped', mapped)

      dispatch(filterMarkedDays())
    })
    .finally(() => dispatch(httpRequestLoading(false, 'diary')))
  }
}

export function setCurrentDay(day) {
  return (dispatch, getState) => {
    dispatch(httpRequestLoading(true, 'diary'))

    DiaryService.getAllDiaryEntries()
    .then(data => {
      dispatch(receiveDiaryEntries(data))
      dispatch(setFocusedDay(day))
    })
    .then(() => {
      const state = getState()
      const currentEntry = state.middleState.diaryEntries.filter(entry => entry.userID === state.loginState.user.attributes.sub && entry.date === day)
      if (currentEntry) {
        dispatch(filterDiaryEntriesBySelectedDay(currentEntry))
      }
    })
    .finally(() => dispatch(httpRequestLoading(false, 'diary')))
  }
}