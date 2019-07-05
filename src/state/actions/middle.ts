import { httpRequestLoading } from "@state/actions/loading"
import DiaryService from "src/services/DiaryService"

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

export function fetchDiaryEntries() {
  return (dispatch, getState) => {
    dispatch(httpRequestLoading(true, 'diary'))

    DiaryService.getAllDiaryEntries()
    .then(data => {
      const state = getState()
      dispatch(receiveDiaryEntries(data))
    })
    .finally(() => dispatch(httpRequestLoading(false, 'diary')))
  }
}

