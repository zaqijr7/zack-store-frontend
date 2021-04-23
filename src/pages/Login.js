import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import '../assets/style.css'
import BackgroundAuth from '../components/BackgroundAuth';
import { login } from '../redux/actions/auth';
import { cleanMessage } from '../redux/actions/feature';

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [visible, setVisible] = useState(true)
  const token = useSelector(state => state.auth.token)
  const history = useHistory()
  const dispatch = useDispatch()
  const authMsg = useSelector(state => state.auth.authMessage)

  const handleClick = () => {
    dispatch(login(email, password))
  }

  useEffect(() => {
    if (token && history.location.state) {
      return history.push({
        pathname: `${history.location.state.from.pathname}` || '/'
      });
    } else if (token) {
      return history.push({
        pathname: '/'
      });
    }
  })

  useEffect(() => {
    return () => {
      dispatch(cleanMessage())
    }
  }, [])
  return (
    <BackgroundAuth title="Wellcome Admin">
      {
        authMsg !== null && (
          <div className="alert alert-warning" role="alert">
            {authMsg}
          </div>
        )
      }
      <div className="mb-3 d-flex position-relative align-items-center justify-content-end">
        <i className="far fa-envelope position-absolute me-3 text-secondary"></i>
        <input type="email" className="form-control py-3 rounded-3" id="exampleFormControlInput1" placeholder="Input Email" onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className="mb-3 d-flex position-relative align-items-center justify-content-end">
        {
          visible === true ? 
          <i className="far fa-eye-slash position-absolute me-3 text-secondary pointer" onClick={() => setVisible(!visible)}></i>
          :
          <i className="far fa-eye position-absolute me-3 text-secondary pointer" onClick={() => setVisible(!visible)}></i>
        }
        <input type={visible === true ? "password" : "text"} className="form-control py-3 rounded-3" id="exampleFormControlInput1" placeholder="Input Password" onChange={(e) => setPassword(e.target.value)} />
      </div>
      <div className="d-grid mt-5">
        <button className="btn bg-theme rounded rounded-3 py-3 fw-bold text-white" onClick={() => handleClick()}>Login</button>
      </div>
      <p className="mt-3 text-center"> Create account, <Link to="/register" className="text-decoration-none">Register</Link> </p>
    </BackgroundAuth>
  )
}

export default Login
