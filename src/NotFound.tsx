import React from 'react'
import { useNavigate } from 'react-router-dom'

function NotFound() {

  const navigate = useNavigate()

  return (
    <>
        <div className="d-flex align-items-center justify-content-center vh-100">
            <div className="text-center">
                <h1 className="display-1 fw-bold">404</h1>
                <div><i className="bi bi-bug-fill" style={{ fontSize: 50 }} ></i></div>
                <p className="fs-3"> <span className="text-danger">Opps!</span> Page not found.</p>
                <p className="lead">
                    The page you’re looking for doesn’t exist.
                  </p>
                <a onClick={ (evt) => navigate('/') } className="btn btn-primary">Go Login</a>
            </div>
        </div>
    </>
  )
}

export default NotFound