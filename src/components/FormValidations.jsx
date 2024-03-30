import React, { useRef, useState } from 'react'

const FormValidations = () => {
    let obj={username:'',email:'',password:'',cpassword:''}
    let [user,setUser]=useState({...obj}) //state object
    let [errors,setErrors]=useState({})
    let pwdRef=useRef()
    let btnRef=useRef()
    let handleSubmit=(e)=>{
        e.preventDefault()
        let myerrors=validationrules() //myerrors={unameerr:"Username is required",emailerr:"Email is required"}
        if(Object.keys(myerrors).length !=0){
            setErrors(myerrors)}
        else {
            setErrors({})
             alert(JSON.stringify(user)) }       
    }

    let validationrules=()=>{
        let formerrors={}
        let pattern=/^([\w\!\#\$\%\^\&\*\-\+\=\.]+)\@([\w]+)\.([a-zA-Z]{2,3})$/
        let pwdpattern=/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[_\!\@\#\$\%\^\&\*\(\)\-\+\=\.]).{6,20}$/
        if(user.username==''){ //user.username.length==0
            formerrors.unameerr="Username is required" //formerrors={unameerr:"Username is required"}
        }  
        if(user.email==''){
            formerrors.emailerr="Email is required" //formerrors={unameerr:"Username is required",emailerr:"Email is required"}
        }
        else if(!pattern.test(user.email)){
            formerrors.emailerr="Invalid Email" //formerrors={unameerr:"Username is required",emailerr:"Invalid Email"}
        }
        if(user.password==''){
            formerrors.pwderr="password is required"
        }
        else if(!pwdpattern.test(user.password)){
            formerrors.pwderr="1 uppercase , 1 lowercase , 1 digit , 1 special - min 6 max 20"
        }
        if(user.cpassword =='' || user.cpassword != user.password){
            formerrors.cpwderr="password not match"
        }
        return formerrors
    }

        let handleClick=()=>{
            if(pwdRef.current.type=="password"){
                pwdRef.current.type="text"
                btnRef.current.innerHTML='<i class="bi bi-eye"></i>'
            }
            else if(pwdRef.current.type=="text"){
                pwdRef.current.type="password"
                btnRef.current.innerHTML='<i class="bi bi-eye-slash"></i>'
            }
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
                        <input type="text" name="username" className={`form-control ${errors.unameerr && "is-invalid"}`} 
                        value={user.username} onChange={(e)=>{console.log(e.target.value,e.target.name)
                        setUser({...user,username:e.target.value})
                        }}/>
                         {errors.unameerr && <span class="text-danger">{errors.unameerr}</span>}
                    </div>
                   
                    <div className='mb-3 col-6'>
                        <label className='form-label'>Email</label>
                            <input type="text" name="email" className='form-control'
                            value={user.email} onChange={(e)=>setUser({...user,email:e.target.value})} />
                             {errors.emailerr && <span class="text-danger">{errors.emailerr}</span>}
                    </div>
                </div>
                
                <div className='mb-3'>
                    <label className='form-label'>Password</label>
                    <div className="input-group">
                        <input type="password" name="password" className='form-control'
                        value={user.password}  onChange={(e)=>setUser({...user,password:e.target.value})} ref={pwdRef}/>
                        <button type="button" className='btn btn-primary' ref={btnRef}  onClick={handleClick}><i class="bi bi-eye-slash"></i></button>                       
                    </div>
                    {errors.pwderr && <span class="text-danger">{errors.pwderr}</span>}
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Confirm Password</label>
                    <input type="password" name="cpassword" className='form-control'
                    value={user.cpassword}  onChange={(e)=>setUser({...user,cpassword:e.target.value})}/>
                    {errors.cpwderr && <span class="text-danger">{errors.cpwderr}</span>}
                </div>
                <div class="d-grid gap-2">
                        <button type="submit"  className="btn btn-primary" >  Register </button>
                </div>
                
             
                
            </form>
        </div>
    </div>
    </div>
  )
}

export default FormValidations
