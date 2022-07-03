import React from 'react'
import { Helmet } from 'react-helmet'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import NavBar from './components/NavBar'
import { StateType } from './useRedux/AppStore'

function NoteDetail() {

    const { index } = useParams()
    let indexInt = 0
    if ( index ) {
        indexInt = parseInt(index)
    }
    // use redux
    const dispatch = useDispatch()
    const noteArr = useSelector( ( item: StateType ) => item.NoteReducer )
    const item = noteArr[indexInt]
  return (
    <>
        <Helmet>
            <title> Note Module </title>
            <meta name="description" content="Note Module Page" />
        </Helmet>
        <NavBar/>
        { item && 
        <div className="card col-6">
            <div className="card-body">
                <h5 className="card-title"> { item.title } </h5>
                <p className="card-text"> { item.detail } </p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item"> { item.id }</li>
                <li className="list-group-item"> { item.date }</li>
            </ul>
            <div className="card-body">
                <a href="#" className="card-link">Card link</a>
                <a href="#" className="card-link">Another link</a>
            </div>
        </div>
        }
    </>
  )
}

export default NoteDetail