export const expandMenu = () => {
  return async dispatch => {
    dispatch({
      type: 'EXPAND_MENU'
    })
  }
}

export const cleanMessage = () => {
  return async dispatch => {
    dispatch({
      type: 'AUTH_MESSAGE',
      payload: null
    })
  }
}
