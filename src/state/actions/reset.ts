export function resetState() {
  return (dispatch) => {
    dispatch(setStateToInitial())
  }
}

export const RESET_STATE = 'RESET_STATE'
export const setStateToInitial = () => {
  return {
    type: RESET_STATE,
  }
}
