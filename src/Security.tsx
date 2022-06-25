import React from 'react'
import { Navigate } from 'react-router-dom'

function Security( item : { component: JSX.Element } ) {

  const control = () => {
    const stData = sessionStorage.getItem("user")
    if ( stData ) {
        return stData
    }else {
        return null
    }
  }
  const user = control()

  return (
    user === null 
    ? 
    <Navigate to='/'/>
    :
    item.component
  )
}

export default Security