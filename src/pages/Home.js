import React from 'react'
import { useSelector } from 'react-redux'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

function Home() {
  const profile = useSelector(state => state.auth.profile)
  return (
    <div className="container-fluid p-0 m-0 vw-100">
      <div className="row p-0 m-0">
        <Sidebar />
        <div className="col-md-9 p-0">
          <Navbar />
          <div className="row p-4 m-0">
            <h3 className="text-muted">Wellcome back {profile.name} !</h3>
            <hr />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
