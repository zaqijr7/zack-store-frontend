import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

function Dashboard() {
  return (
    <div className="container-fluid p-0">
      <div className="row">
        <Sidebar />
        <div className="col-md-9">
          <Navbar/>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
