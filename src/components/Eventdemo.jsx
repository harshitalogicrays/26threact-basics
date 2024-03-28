import React from 'react'

const Eventdemo = ({num1,num2}) => {
    function helloreact(){ alert("hello react -  event demo") }

    let sum=(a,b)=>alert(a+b)

    let sum1=()=>alert(Number(num1)+Number(num2))
  return (
    <>
        <button type="button" class="btn btn-primary me-2" 
        onClick={()=>alert("?dfkhdg")}>Click Me</button>
        <button type="button" class="btn btn-danger me-2" 
        onClick={helloreact}>Click Me</button>
        <button type="button" class="btn btn-danger me-2" 
        onClick={()=>helloreact()}>Click Me</button>
         <button type="button" class="btn btn-danger me-2" 
        onClick={()=>sum(3,4)}>Add</button>
        <button type="button" class="btn btn-danger me-2" 
            onClick={sum1}>Add</button>
            
    </>
  )
}

export default Eventdemo
