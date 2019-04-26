export const HTTP_REQUEST_LOADING = 'HTTP_REQUEST_LOADING'

export const httpRequestLoading = (value, source) => {
  return {
    type: HTTP_REQUEST_LOADING,
    payload: value,
    source,
  }
}
