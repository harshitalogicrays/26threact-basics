import React from 'react'

const Products = () => {
    let products=[  
        {id:101,name:"product1",image:"images/a.jpg",price:3000,qty:10},
        {id:102,name:"product2",image:"images/b.jpg",price:5000,qty:70},
        {id:103,name:"product3",image:"images/c.jpg",price:9000,qty:100},
        {id:104,name:"product4",image:"images/d.jpg",price:8000,qty:20},
        {id:105,name:"product5",image:"images/e.jpg",price:5000,qty:1}
        ]
        // console.log(products[0].name)
  return (
    <div className='container mt-5 shadow p-2'>
        {/* <img src={require('../assets/images/a.jpg')} /> */}
        <h1>Products Page</h1>
<hr/>      <table className='table table-bordered table-primary table-hover'>
        <thead>
            <tr>
                <th>ID</th><th>Name</th><th>Image</th><th>Price</th><th>Qty</th>
            </tr>
        </thead>
        <tbody>
            {products.length==0 && <tr><td colSpan={5}>No product found</td></tr>}
            {products.map((product)=> 
                  <tr key={product.id}>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td> <img src={require(`../assets/${product.image}`)} height={50} width={50}/></td>
                    <td>{product.price}</td>
                    <td>{product.qty}</td>
                  </tr>
            )}
          
        </tbody>
      </table>
    </div>
  )
}

export default Products
