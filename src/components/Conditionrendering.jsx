import React from 'react'

const Conditionrendering = (props) => {
    // console.log(props)
  return (
    <>
        {/* {props.checklogin==true ?  <h1>Welcome {props.username}</h1>  : <h1>Welcome Guest</h1>} */}

        {props.checklogin ? <> 
                                <h1>Welcome {props.username}</h1> 
                                <h2>Welcome to LRA</h2>
                            </>
        : <h1>Welcome Guest</h1>}

        {props.checklogin ?  <h1>Welcome {props.username}</h1>  : ''}

        {props.checklogin && <h1>Welcome {props.username}</h1>}
    </>
  )
}

export default Conditionrendering
