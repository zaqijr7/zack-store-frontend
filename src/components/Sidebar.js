import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <div className="col-md-3 d-none d-md-block vh-100 bg-theme">
      <div className="row">
        <span className="mt-2 fs-2 fw-bold text-white text-center">Zack Store</span>
      </div>
      <div className="row px-3 mt-4">
        <ul className="list-group">
          <li className="list-group-item border-0 mb-2 bg-transparent">
            <Link to="/" className="text-menu text-decoration-none text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-house-door-fill me-3" viewBox="0 0 16 16">
                <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z"/>
              </svg>
              Dashboard
            </Link>
          </li>
          <li className="list-group-item border-0 mb-2 bg-transparent">
            <Link to="/home/users" className="text-menu text-decoration-none text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-person-fill me-3" viewBox="0 0 16 16">
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
              </svg>
              Users
            </Link>
          </li>
          <li className="list-group-item border-0 mb-2 bg-transparent">
            <Link to="/home/products" className="text-menu text-decoration-none text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-basket2-fill me-3" viewBox="0 0 16 16">
                  <path d="M5.929 1.757a.5.5 0 1 0-.858-.514L2.217 6H.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h.623l1.844 6.456A.75.75 0 0 0 3.69 15h8.622a.75.75 0 0 0 .722-.544L14.877 8h.623a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1.717L10.93 1.243a.5.5 0 1 0-.858.514L12.617 6H3.383L5.93 1.757zM4 10a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0v-2zm3 0a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0v-2zm4-1a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1z"/>
                </svg>
                Products
            </Link>
          </li>
          <li className="list-group-item border-0 mb-2 bg-transparent">
            <Link to="/" className="text-menu text-decoration-none text-white" >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-person-circle me-3" viewBox="0 0 16 16">
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
              </svg>
              Profile
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
