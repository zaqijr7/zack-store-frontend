const initialState = {
  token: null,
  profile: {},
  authMessage: null
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        token: action.token,
        profile: action.profile
      }
    case 'LOGOUT':
      return {
        ...state,
        token: action.token,
        profile: action.profile
      }
    case 'UPDATE_PROFILE':
      return {
        ...state,
        profile: action.payload
      }
    case 'AUTH_MESSAGE':
      return {
        ...state,
        authMessage: action.payload
      }
    default:
      return {
        ...state
      }
  }
}

export default authReducer
