const initialState = {
  expandMenu: false,
}

const featureReducers = (state = initialState, action) => {
  switch (action.type) {
    case 'EXPAND_MENU' : 
      return {
        ...state,
        expandMenu: !state.expandMenu
      }
      default :
      return {
        ...state
      }
  }
}

export default featureReducers
