import React from 'react'

const Listrendering = () => {
    let students=["aaa","bbb","ccc","ddd","eee","fff","ggg","hhhh"]
    let products=[  {id:101,name:"product1",image:"",price:3000,qty:10},
                    {id:102,name:"product2",image:"",price:5000,qty:70},
                    {id:103,name:"product3",image:"",price:9000,qty:100},
                    {id:104,name:"product4",image:"",price:8000,qty:20},
                    {id:105,name:"product5",image:"",price:5000,qty:1}
                ]
    console.log(products[0].name)
  return (
    <>
        {/* {students.map((st,index)=><h1 key={index}>{st}</h1>)} */}

        {students.map((st,index)=>{return <h1 key={index}>{st}</h1>})}
    </>
      
    )
}

export default Listrendering
