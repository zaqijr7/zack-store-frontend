import http from "../../helpers/http"
import jwt from 'jwt-decode'

export const register = (name, email, password) => {
  return async dispatch => {
    const data = new URLSearchParams()
    data.append('name', name)
    data.append('email', email)
    data.append('password', password)
    try {
      const response = await http().post('auth/register', data)
      dispatch({
        type: 'AUTH_MESSAGE',
        payload: response.data.message
      })
    } catch (err) {
      dispatch({
        type: 'AUTH_MESSAGE',
        payload: err.response.data.message
      })
    }
  }
}

export const login = (email, password) => {
  return async dispatch => {
    const data = new URLSearchParams()
    data.append('email', email)
    data.append('password', password)
    try {
      const response = await http().patch('auth/login', data)
      console.log(response);
      const { id } = jwt(response.data.results.token)
      console.log(id);
      const profile = await http().get(`users/${id}`)
      dispatch({
        type: 'LOGIN',
        token: response.data.results.token,
        profile: profile.data.results
      })
      dispatch({
        type: 'AUTH_MESSAGE',
        payload: response.data.message
      })
    } catch (err) {
      dispatch({
        type: 'AUTH_MESSAGE',
        payload: err.response.data.message
      })
    }
  }
}

export const logout = () => {
  return async dispatch => {
    dispatch({
      type: 'LOGOUT',
      token: null,
      profile: []
    })
  }
}


