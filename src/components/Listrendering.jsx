import React from 'react'

const Listrendering = () => {
    let students=["aaa","bbb","ccc","ddd","eee","fff","ggg","hhhh"]

  return (
    <>
        {/* {students.map((st,index)=><h1 key={index}>{st}</h1>)} */}

        {students.map((st,index)=>{return <h1 key={index}>{st}</h1>})}
    </>
      
    )
}

export default Listrendering
