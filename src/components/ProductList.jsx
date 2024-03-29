import React from 'react'
import ProductItems from './ProductItems'

const ProductList = () => {
    let products=[  
        {id:101,name:"product1",image:"images/a.jpg",price:3000,qty:10},
        {id:102,name:"product2",image:"images/b.jpg",price:5000,qty:70},
        {id:103,name:"product3",image:"images/c.jpg",price:9000,qty:100},
        {id:104,name:"product4",image:"images/d.jpg",price:8000,qty:20},
        {id:105,name:"product5",image:"images/e.jpg",price:5000,qty:1},
        {id:101,name:"product1",image:"images/a.jpg",price:3000,qty:10},
        {id:102,name:"product2",image:"images/b.jpg",price:5000,qty:70},
        {id:103,name:"product3",image:"images/c.jpg",price:9000,qty:100},
        {id:104,name:"product4",image:"images/d.jpg",price:8000,qty:20},
        {id:105,name:"product5",image:"images/e.jpg",price:5000,qty:1},
        {id:101,name:"product1",image:"images/a.jpg",price:3000,qty:10},
        {id:102,name:"product2",image:"images/b.jpg",price:5000,qty:70},
        {id:103,name:"product3",image:"images/c.jpg",price:9000,qty:100},
        {id:104,name:"product4",image:"images/d.jpg",price:8000,qty:20},
        {id:105,name:"product5",image:"images/e.jpg",price:5000,qty:1}
        ]
  return (
   <>
    <ProductItems products={products}/>
   </>
  )
}

export default ProductList
