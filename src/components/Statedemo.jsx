import React, { useState } from 'react'

const Statedemo = ({num1,num2}) => {
    // let result=''
    let [result,setResult]= useState('')
    let [count,setCount]=useState(0) //string,number, boolean , obj, array , array of object
    let sum=()=>{     
        // result=Number(num1)+Number(num2)
        setResult(Number(num1)+Number(num2))
        console.log(result)
    }
  return (
    <>
       <button type="button" className="btn btn-danger me-2" 
            onClick={sum}>Add</button>
            <h2>{result}</h2><hr/>
        <input class="btn btn-primary me-3" type="button" value="Counter"
           onClick={()=>setCount(count+1)} 
        />
          <input class="btn btn-info" type="button" value="Counter"
           onClick={()=>setCount((prev)=>prev+1)} 
        />
            <h3>count: {count}</h3>
    </>
  )
}

export default Statedemo
