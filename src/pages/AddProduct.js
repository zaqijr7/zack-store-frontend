import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import pict3 from '../assets/image/3.jpg'
import { useHistory } from 'react-router'
import http from '../helpers/http'
import { useSelector } from 'react-redux'

function AddProduct() {
  const [file, setFile] = useState(null)
  const [name, setName] = useState('')
  const [desc, setDesc] = useState('')
  const [price, setPrice] = useState('')
  const [messageRes, setMessageRes] = useState(null)
  const token = useSelector(state => state.auth.token)
  const history = useHistory()
  const fileUrl = file !== null ? URL.createObjectURL(file) : ''

  const handleSave = async () => {
    const data = new FormData()
    data.append('name', name)
    data.append('description', desc)
    data.append('price', price)
    data.append('pict', file)
    const response = await http(token).post('products/add', data)
    setMessageRes(response.data.message)
  }
  useEffect(() => {
    handleSave()
  }, [])
  return (
    <div className="container-fluid p-0 m-0 vw-100">
      <div className="row p-0 m-0">
        <Sidebar />
        <div className="col-md-9 p-0">
          <Navbar />
          <div className="row p-4 m-0">
            <h3> Home {'>'} Products {'>'} <span className="text-muted">Add</span> {messageRes !== null && `> ${messageRes}`} </h3>
            <hr />
          </div>
          <div className="row m-0">
            <div className="col-12 d-flex align-items-center justify-content-center ">
              <div className="card card-add-product shadow border-0">
                <div className="card-body d-flex align-items-center justify-content-center flex-column">
                  <img src={fileUrl} className="pict-product-card" alt="product" />
                  <div className="row">
                    <div className="my-3">
                      <input className="form-control" type="file" id="formFile" onChange={(event) => setFile(event.target.files[0])} />
                    </div>
                    <div className="mb-3">
                      <input className="form-control" type="text" id="formFile" placeholder="Name of Product" onChange={(event) => setName(event.target.value)} />
                    </div>
                    <div className="mb-3">
                      <textarea className="form-control" placeholder="Description Of Product..." id="floatingTextarea" onChange={(event) => setDesc(event.target.value)}></textarea>
                    </div>
                    <div className="mb-3">
                      <input className="form-control" type="number" id="formFile" placeholder="Price of Product" onChange={(event) => setPrice(event.target.value)} />
                    </div>
                    <div className="row mx-0">
                      <div className="col-6 d-grid">
                        <button className="btn btn-primary" onClick={() => handleSave()}>Save</button>
                      </div>
                      <div className="col-6 d-grid">
                        <button className="btn btn-danger" onClick={() => history.goBack()}>Cancel</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddProduct
