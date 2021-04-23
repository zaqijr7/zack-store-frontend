import React from 'react'

function BackgroundAuth(props) {
  return (
    <div className="vh-100 vw-100 bg-theme d-flex justify-content-center align-items-center flex-column">
      <div className="row">
        <span className="text-white fs-2 fw-bold mb-4">Zack Store</span>
      </div>
      <p className="fs-4 text-white">{props.title}</p>
      <div className="card bg-white rounded-3 card-auth">
        <div className="card-body p-5">
          {props.children}
        </div>
      </div>
    </div>
  )
}

export default BackgroundAuth
