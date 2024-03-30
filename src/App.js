import logo from './logo.svg';
import './App.css';
import FirstComopent from './components/FirstComponent';
import Propsdemo from './components/Propsdemo';
import Eventdemo from './components/Eventdemo';
import Statedemo from './components/Statedemo';
import { useState } from 'react';
import Conditionrendering from './components/Conditionrendering';
import Listrendering from './components/Listrendering';
import Products from './components/Products';
import ProductList from './components/ProductList';
import image1 from './assets/images/a.jpg'
import Register from './components/Register';
import Login from './components/Login';
import FormValidations from './components/FormValidations';
import { Outlet } from 'react-router-dom';
function App() {
  // let a=10
  let [isLoggedIn,setIsLoggedIn]=useState(true)
  return (
    <div>
      {/* <img src={image1} /> */}
      {/* <h1 style={{color:'red',backgroundColor:'yellow'}}>Hello React</h1>
      <h3 className='text-primary' style={{background:'aqua'}}>javascript variable: {a}</h3>

      <FirstComopent></FirstComopent>
      <FirstComopent/>
      <hr/>
        <button
          type="button"
          class="btn btn-primary"
        >
          Button
        </button> */}
        
      {/* <Propsdemo username="Saurabh" address="ahmedabad"/>
       <hr/> 
        <Eventdemo num1="3" num2="5"/><hr/>
        <Statedemo num1="3" num2="5"/> */}

        {/* <button type="button"  className="btn btn-primary" onClick={()=>setIsLoggedIn(!isLoggedIn)} >
          {isLoggedIn ? "logout" : "login"}
        </button>
        
        <Conditionrendering checklogin={isLoggedIn} username="Saurabh"/> */}

        {/* <Listrendering/> */}

        {/* <Products/> */}


        {/* <ProductList/> */}

        {/* <Register/> */}
        {/* <Login/> */}

        {/* <FormValidations/> */}

        <Outlet/>

    </div>
  );
}

export default App
