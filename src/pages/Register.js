import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import BackgroundAuth from '../components/BackgroundAuth'
import { register } from '../redux/actions/auth'
import { cleanMessage } from '../redux/actions/feature'

function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [visible, setVisible] = useState(true)
  const dispatch = useDispatch()
  const authMsg = useSelector(state => state.auth.authMessage)

  const handleClick = () => {
    console.log('klik');
    dispatch(register(name, email, password))
  }
  useEffect(() => {
    return () => {
      dispatch(cleanMessage())
    }
  }, [])

  return (
    <BackgroundAuth title="Register Here">
      {
        authMsg !== null && (
          <div className="alert alert-warning" role="alert">
            {authMsg}
          </div>
        )
      }
      <div className="mb-3 d-flex position-relative align-items-center justify-content-end">
        <i className="far fa-user position-absolute me-3 text-secondary"></i>
        <input type="text" className="form-control py-3 rounded-3" id="exampleFormControlInput1" placeholder="Type Your Name" maxLength={30} onChange={(e) => setName(e.target.value)} />
      </div>
      <div className="mb-3 d-flex position-relative align-items-center justify-content-end">
        <i className="far fa-envelope position-absolute me-3 text-secondary"></i>
        <input type="text" className="form-control py-3 rounded-3" id="exampleFormControlInput1" placeholder="Input Email" onChange={(e) => setEmail(e.target.value)} />
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
      <div className="d-grid mt-4">
        <button className="btn bg-theme rounded rounded-3 py-3 fw-bold text-white" onClick={() => handleClick()}>Register</button>
      </div>
      <p className="mt-3 text-center"> Do you have account? <Link to="/login" className="text-decoration-none">Login</Link> </p>
    </BackgroundAuth>
  )
}

export default Register
