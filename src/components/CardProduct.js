import React from 'react'

function CardProduct(props) {
  return (
    <div className="card product-pict-card border-1">
      <div className="card-body p-0 m-0 d-flex justify-content-center align-items-center">
        <img src={props.pict} className="product-pict" alt="products"/>
      </div>
    </div>
  )
}

export default CardProduct
