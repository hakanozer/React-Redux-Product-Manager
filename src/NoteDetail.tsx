import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import NavBar from './components/NavBar'
import { StateType } from './useRedux/AppStore'
import { ENote } from './useRedux/ENote'
import { INoteAction } from './useRedux/INoteAction'

function NoteDetail() {

    const navigate = useNavigate()
    const { index } = useParams()
    let indexInt = -1
    if ( index ) {
        indexInt = parseInt(index)
    }


    // use redux
    const dispatch = useDispatch()
    const noteArr = useSelector( ( item: StateType ) => item.NoteReducer )
    const item = noteArr[indexInt]

  const fncDelete = () => {
    const answer = window.confirm("Are you sure Delete!, " + item.title )
    if ( answer ) {
        const deleteItem: INoteAction = {
            type: ENote.NOTE_DELETE,
            payload: item
        }
        dispatch(deleteItem)
        navigate('/settings')
    }
  }  


  useEffect(() => {
    if ( !item ) {
        navigate('/settings')
    }
  }, [])


  return (
    <>
        <NavBar/>
        <h2> Note Detail </h2>
        { item && 
        <>
            <Helmet>
                <title> { item.title } </title>
                <meta name="description" content={ item.detail } />
            </Helmet>
            <div className="card col-6">
                <div className="card-body">
                    <h5 className="card-title"> { item.title } </h5>
                    <p className="card-text"> { item.detail } </p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><span className="badge text-bg-primary">ID:</span> { item.id }</li>
                    <li className="list-group-item"> <span className="badge text-bg-primary">Date:</span> { item.date }</li>
                </ul>
                <div className="card-body">
                <button onClick={(evt) => fncDelete() } className='btn btn-danger btn-sm'><i className="bi bi-trash3"></i></button>
                </div>
            </div>
        </>
        }
    </>
  )
}

export default NoteDetail