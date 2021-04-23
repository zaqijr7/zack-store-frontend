import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import CardProduct from '../components/CardProduct'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import pict1 from '../assets/image/1.jpg'
import pict2 from '../assets/image/2.jpg'
import pict3 from '../assets/image/3.jpg'
import http from '../helpers/http'
import { useSelector } from 'react-redux'

function Product() {
  const [products, setProducts] = useState([])
  const [pageInfo, setPageInfo] = useState([])
  const token = useSelector(state => state.auth.token)
  const getAllProducts = async () => {
    try {
      const response = await http().get('products')
      setProducts(response.data.results)
      setPageInfo(response.data.pageInfo)
    } catch (err) {
      setProducts([])
      setPageInfo([])
    }
  }

  const getDataPage = async (number) => {
    try {
      const response = await http().get(`products?search=&page=${number}&limit=5&sort=createdAt&order=ASC`)
      setProducts(response.data.results)
      setPageInfo(response.data.pageInfo)
    } catch (err) {
      setProducts([])
      setPageInfo([])
    }
  }

  const handleDelete = async (id) => {
    try {
      await http(token).delete(`products/${id}`)
      getAllProducts()
    } catch (err) {
      setProducts([])
      setPageInfo([])
    }
  }

  useEffect(() => {
    getAllProducts()
  }, [])

  useEffect(() => {
    getDataPage()
  }, [])

  return (
    <div className="container-fluid p-0 m-0 vw-100 vh-100">
      <div className="row p-0 m-0">
        <Sidebar />
        <div className="col-md-9 p-0">
          <Navbar />
          <div className="row p-4 m-0">
            <h3> Home {'>'} <span className="text-muted">Products</span> </h3>
            <hr />
          </div>
          <div className="row p-4 m-0">
            <div className="col-12 m-0 d-flex justify-content-end">
              <Link to="/home/products/add" className="btn btn-success d-flex justify-content-center align-items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-plus-square me-3" viewBox="0 0 16 16">
                  <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                </svg>
                Add Product
              </Link>
            </div>
          </div>
          <div className="row p-4 m-0 overflow-auto table-product">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">
                    ID
                  </th>
                  <th scope="col">#</th>
                  <th scope="col">
                    Picture
                  </th>
                  <th scope="col">Name</th>
                  <th scope="col">Description</th>
                  <th scope="col">Price</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  products.map((item, index) => {
                    return (
                      <tr>
                        <th scope="row">{item.id}</th>
                        <th scope="row">{index + 1}</th>
                        <td>
                          <CardProduct pict={item.pict} />
                        </td>
                        <td>
                          {item.name}
                        </td>
                        <td>{item.description}</td>
                        <td>Rp. {item.price}</td>
                        <td>
                          <Link to={`/home/products/update/${item.id}`} className="btn btn-success me-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                              <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                              <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                            </svg>
                          </Link>
                          <button className="btn btn-danger" onClick={() => handleDelete(item.id)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                              <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                              <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                            </svg>
                          </button>
                        </td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
          </div>
          <div className="row m-0">
            <div className="col-12  d-flex justify-content-center align-items-center">
              <nav aria-label="Page navigation example">
                <ul className="pagination">
                  <li className="page-item">
                    <button to="" className="page-link" href="#" aria-label="Previous">
                      <span aria-hidden="true">&laquo;</span>
                    </button>
                  </li>
                  {
                    [...Array(pageInfo.totalPage)].map((item, index) => {
                      return (
                        <li className="page-item"><button to="" className="page-link" onClick={() => getDataPage(index + 1)}>{index + 1}</button></li>
                      )
                    })
                  }
                  <li className="page-item">
                    <button className="page-link" href="#" aria-label="Next" dis>
                      <span aria-hidden="true">&raquo;</span>
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product
