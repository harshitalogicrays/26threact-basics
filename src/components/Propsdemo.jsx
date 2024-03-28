// import React from 'react'

// const Propsdemo = (props) => { 
//     // props={username:"Saurabh" address:"ahmedabad"}
//     props.username="Harshita"
//   return (
//     <div>
//       <h1>Props Demo</h1>
//       <h2>{props.username}</h2>
//       <h2>{props.address}</h2>
//     </div>
//   )
// }

// export default Propsdemo


import React, { Fragment } from 'react'

const Propsdemo = ({username,address}) => {
    //let {username,address}=props
  return (
    // <React.Fragment>
    //      <h1>Props Demo</h1>
    //      <h2>{username}</h2>
    //      <h2>{address}</h2>
    // </React.Fragment>

  //   <Fragment>
  //   <h1>Props Demo</h1>
  //   <h2>{username}</h2>
  //   <h2>{address}</h2>
  // </Fragment>

  <>
    <h1>Props Demo</h1>
    <h2>{username}</h2>
    <h2>{address}</h2>
  </>
  )
}

export default Propsdemo
