import React from 'react'

const ProductData = ({product}) => {
  return (
    <div className='col-3 mb-3'>
       <div class="card" >
        <img src={require(`../assets/${product.image}`)} height={200} class="card-img-top" alt="..."/>
        <div class="card-body">
            <h5 class="card-title">{product.name}e</h5>
            <p class="card-text">{product.qty}</p>
            <p class="card-text">${product.price}</p>
            <a href="#" class="btn btn-primary">Add to Cart</a>
        </div>
        </div>
    </div>
  )
}

export default ProductData
