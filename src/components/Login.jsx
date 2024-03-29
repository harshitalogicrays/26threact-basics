import React from 'react'

const Login = () => {
  return (
    <div className='container mt-5'>
        <form>
            <div className='form-floating mb-3'>
                <input type="text" className='form-control' placeholder=''></input>
                <label>username</label>
            </div> 
            <div className='form-floating mb-3'>
                <input type="password" className='form-control' placeholder=''></input>
                <label>password</label>
            </div> 
            <button  type="submit"  class="btn btn-primary"> Submit </button>

                
        </form>
    </div>
  )
}

export default Login
