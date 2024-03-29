import React, { useState } from 'react'

const Register = () => {
    let [user,setUser]=useState({username:'',email:'',password:'',cpassword:''}) //state object

    let handleSubmit=(e)=>{
        e.preventDefault()
        alert(JSON.stringify(user)) 
        //convert javascript object(user) into json string - JSON.stringify(jsobj)
        //json string to javascript object - JSON.parse(jsonstr)
    }
  return (
    <div className='container mt-5'>
        <h1><i class="bi bi-pencil-square"></i> Register here</h1><hr/>
        <div className="row">
            <div className="col-4">
                <img src={require('../assets/images/register.png')}  class="img-fluid"/>

            </div>
            <div className="col-8">
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className='mb-3 col-6'>
                            <label className='form-label'>Username</label>
                            <input type="text" name="username" className='form-control' 
                            value={user.username} onChange={(e)=>{console.log(e.target.value,e.target.name)
                            setUser({...user,username:e.target.value})
                            }}/>
                        </div>
                        <div className='mb-3 col-6'>
                            <label className='form-label'>Email</label>
                            <div className="input-group">
                                <span class="input-group-text" id="basic-addon1">
                                     <i class="bi bi-envelope"></i>
                                </span>
                                <input type="text" name="email" className='form-control'
                                value={user.email} onChange={(e)=>setUser({...user,email:e.target.value})} />
                            </div>
                            
                        </div>
                    </div>
                    
                    <div className='mb-3'>
                        <label className='form-label'>Password</label>
                        <div className="input-group">
                            <input type="password" name="password" className='form-control'
                            value={user.password}  onChange={(e)=>setUser({...user,password:e.target.value})}/>
                            <button type="button" className='btn btn-primary'><i class="bi bi-eye-slash"></i></button>
                        </div>
                       
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>Confirm Password</label>
                        <input type="password" name="cpassword" className='form-control'
                        value={user.cpassword}  onChange={(e)=>setUser({...user,cpassword:e.target.value})}/>
                    </div>
                    <div class="d-grid gap-2">
                            <button type="submit"  className="btn btn-primary" >  Register </button>
                    </div>
                    
                 
                    
                </form>
            </div>
        </div>
            {JSON.stringify(user)}


            <div className='row'>
                <div className='col-1 offset-1'>  <label className='col-form-label'>username</label></div>
                <div className="col-6"><input className='form-control'></input></div>
                
            </div>
    </div>


  )
}

export default Register
