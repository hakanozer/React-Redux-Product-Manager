import React, { useEffect } from 'react'
import { NavLink, useNavigate } from "react-router-dom";

function NavBar() {

    const navigate = useNavigate()

    const control = () => {
        const stData = sessionStorage.getItem("user")
        if ( stData ) {
            return stData
        }else {
            return null
        }
      }
      const user = control()

      setInterval(function () {
        const user = control()
        if ( user === null || user === "" ) {
            sessionStorage.removeItem("user")
            navigate('/')
        }
      }, 1000);


      const logOut = () => {
        sessionStorage.removeItem("user")
        navigate('/')
      }

  return (
    <>
       <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <NavLink to='/dashboard' className='nav-link' >Product</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to='/settings' className="nav-link" >Note</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to='/users' className="nav-link" >Users</NavLink>
                </li>
                <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                { user }
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item" onClick={logOut} role='button'>LogOut</a></li>
                </ul>
                </li>
                
            </ul>
            <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
            </div>
        </div>
        </nav> 
    </>
  )
}

export default NavBar