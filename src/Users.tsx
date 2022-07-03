import axios from 'axios';
import React, { useEffect, useState } from 'react'
import NavBar from './components/NavBar';
import md5 from 'md5';
import { IPlaceUser } from './models/IPlaceUser';
import { emails } from './models/EmailData';

function Users() {

  const [arr, setArr] = useState<IPlaceUser[]>([])
  const [single, setSingle] = useState<IPlaceUser>()

  const url = 'https://jsonplaceholder.typicode.com/users'
  useEffect(() => {
    axios.get<IPlaceUser[]>(url).then( res => {
      const dt = res.data
      dt.forEach( (item, index) => {
        item.email = emails[ index ]
      })
      setArr(dt)
    })    
  },[])
  

  return (
    <>  <NavBar />
        <h2>User List</h2>
        <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Picker</th>
            <th scope="col">Name</th>
            <th scope="col">Username</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>

        { arr.map( (item, index) => 
          <tr key={index} onClick={ (evt) => setSingle( item ) } role='button' data-bs-toggle="modal" data-bs-target="#exampleModal" >
            <th> { item.id } </th>
            <td> <img className="rounded-circle" width={66} src={'https://www.gravatar.com/avatar/'+ md5(item.email) + '?s=400&d=robohash&r=x'  }></img> </td>
            <td> { item.name } </td>
            <td> { item.username } </td>
            <td> { item.email } </td>
          </tr>
        )}

{ single && 
<div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel"> { single.name } </h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <img  src={'https://www.gravatar.com/avatar/'+ md5(single.email) + '?s=400&d=robohash&r=x'  }  className="img-fluid" />
      <h4> { single.username } </h4>
      <p> { single.company.name }  - { single.company.bs } </p>
      <p> { single.email } </p>
      <p> { single.phone } </p>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
}

          
        </tbody>
      </table>

    </>
    
  )
}

export default Users