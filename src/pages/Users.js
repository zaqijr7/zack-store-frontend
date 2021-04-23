import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import http from '../helpers/http'

function Users() {
  const [users, setUser] = useState([])
  const [messageRes, setMessageRes] = useState(null)
  const [pageInfo, setPageInfo] = useState({})
  const getAllUsers = async () => {
    try {
      const response = await http().get('users')
      setUser(response.data.results)
      setPageInfo(response.data.pageInfo)
    } catch (err) {
      setMessageRes(err.response.data.message)
    }
  }
  useEffect(() => {
    getAllUsers()
  }, [])
  return (
    <div className="container-fluid p-0 m-0 vw-100">
      <div className="row p-0 m-0">
        <Sidebar />
        <div className="col-md-9 p-0">
          <Navbar />
          <div className="row p-4 m-0">
            <h3> Home {'>'} <span className="text-muted">Users</span> </h3>
            <hr />
          </div>
          <div className="row p-4 m-0">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col" className="d-flex justify-content-between">
                    ID
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
                      <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                    </svg>
                  </th>
                  <th scope="col">#</th>
                  <th scope="col" className="d-flex justify-content-between">
                    Name
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" className="bi bi-caret-down-fill" viewBox="0 0 16 16">
                      <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                    </svg></th>
                  <th scope="col">Email</th>
                  <th scope="col">Role</th>
                </tr>
              </thead>
              <tbody>
                {
                  users.map((item, index) => {
                    return (
                      <tr>
                        <th scope="row">{item.id}</th>
                        <th scope="row">{index + 1}</th>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.role}</td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
          </div>
          <div className="row m-0">
            <div className="col-12  d-flex justify-content-center align-items-center">
              {pageInfo.totalPage !== 1 && (
                <nav aria-label="Page navigation example">
                  <ul className="pagination">
                    <li className="page-item">
                      <Link to="" className="page-link" href="#" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                      </Link>
                    </li>
                    <li className="page-item"><Link to="/home/users" className="page-link" href="#">1</Link></li>
                    <li className="page-item"><Link to="/home/users" className="page-link" href="#">2</Link></li>
                    <li className="page-item"><Link to="/home/users" className="page-link" href="#">3</Link></li>
                    <li className="page-item">
                      <Link to="" className="page-link" href="#" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                      </Link>
                    </li>
                  </ul>
                </nav>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Users
