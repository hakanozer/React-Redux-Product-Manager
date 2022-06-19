import React, { useEffect, useState } from 'react'

import NavBar from './components/NavBar';
import { control } from './Control';

function Dashboard() {

  
  const [search, setSearch] = useState('')

  useEffect(() => {
    console.log( search )
  },[search])
  

  

  return (
    <>  <NavBar />
        <div>Dashboard</div>
        <input onChange={(evt) => setSearch( evt.target.value ) } className='form-control' placeholder='Search..'></input>
        <div> { search } </div>
    </>
    
  )
}

export default Dashboard