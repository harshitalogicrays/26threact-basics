import React from 'react'
import logo from '../assets/images/a.jpg'
import { Link } from 'react-router-dom'
const DefaultLayout = ({children}) => { //props.children
  return (
    <>
        <nav
            class="navbar navbar-expand-sm navbar-dark bg-dark"
        >
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                    <img src={logo} height={40} width={40}/>
                </a>
                <button
                    class="navbar-toggler d-lg-none"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapsibleNavId"
                    aria-controls="collapsibleNavId"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="collapsibleNavId">
                    <ul class="navbar-nav me-auto mt-2 mt-lg-0">
                        <li class="nav-item">
                            <Link class="nav-link active" to='/' aria-current="page"
                                >Home
                                <span class="visually-hidden">(current)</span></Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to='/validations'>Valdiations</Link>
                        </li>
                        <li class="nav-item dropdown">
                            <a
                                class="nav-link dropdown-toggle"
                                href="#"
                                id="dropdownId"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                                >Dropdown</a >
                            <div
                                class="dropdown-menu"
                                aria-labelledby="dropdownId"
                            >
                                <a class="dropdown-item" href="#"
                                    >Action 1</a  >
                                <a class="dropdown-item" href="#"
                                    >Action 2</a >
                            </div>
                        </li>
                    </ul>
                    <form class="d-flex my-2 my-lg-0">
                        <input
                            class="form-control me-sm-2"
                            type="text"
                            placeholder="Search"
                        />
                        <button
                            class="btn btn-outline-success my-2 my-sm-0"
                            type="submit"   >
                            Search
                        </button>
                    </form>
                </div>
            </div>
        </nav>
        
        <div className='container'>
            {children}
        </div>
   </>
  )
}

export default DefaultLayout
