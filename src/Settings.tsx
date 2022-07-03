import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import { useDispatch, useSelector } from 'react-redux'
import NavBar from './components/NavBar'
import { INote } from './models/INote'
import { StateType } from './useRedux/AppStore'
import { ENote } from './useRedux/ENote'
import { INoteAction } from './useRedux/INoteAction'

function Settings() {

  // use redux
  const dispatch = useDispatch()
  const noteArr = useSelector( ( item: StateType ) => item.NoteReducer )

  const [title, setTitle] = useState('')
  const [detail, setDetail] = useState('')
  const [nDate, setNDate] = useState('')
  const addNote = ( evt: React.FormEvent ) => {
    evt.preventDefault()
    const item:INote = {
      id: parseInt( ""+(Math.random() * 100) ),
      title: title,
      detail: detail,
      date: nDate
    }
    const saveItem: INoteAction = {
      type: ENote.NOTE_ADD,
      payload: item
    }
    dispatch(saveItem)
  }

  const fncDelete = ( index: number ) => {
    const item = noteArr[index]
    const deleteItem: INoteAction = {
      type: ENote.NOTE_DELETE,
      payload: item
    }
    dispatch(deleteItem)
  }

  return (
    <>
        <Helmet>
          <title> Note Module </title>
          <meta name="description" content="Note Module Page" />
        </Helmet>
        <NavBar/>
        <div className='row'>
          <div className='col-sm-5'>
            <h2>Note Add</h2>
            <form onSubmit={ addNote }>

              <div className="mb-3">
                <label htmlFor="title" className="form-label">Title</label>
                <input required onChange={(evt) => setTitle(evt.target.value)} type="text" className="form-control" id="title" placeholder='Title' />
              </div>
              <div className="mb-3">
                <label htmlFor="detail" className="form-label">Detail</label>
                <input required onChange={(evt) => setDetail(evt.target.value)}  type="text" className="form-control" id="detail" placeholder='Detail' />
              </div>
              <div className="mb-3">
                <label htmlFor="date" className="form-label">Date</label>
                <input required onChange={(evt) => setNDate(evt.target.value)}  type="date" className="form-control" id="date" placeholder='Date' />
              </div>
              
              <button type="submit" className="btn btn-primary"> <i className="bi bi-arrow-right"></i> Add</button>
            </form>
          </div>
          <div className='col-sm-7'>
          <h2>Note List</h2>
          <table className="table table-hover">
          <thead>
            <tr className="d-flex" >
              <th className="col-2">ID</th>
              <th className="col-3">Title</th>
              <th className="col-3">Detail</th>
              <th className="col-3">Date</th>
              <th className="col-1">Delete</th>
            </tr>
          </thead>
          <tbody>

            { noteArr.map((item, index) => 
              <tr key={index} className="d-flex" >
                <td  className="col-2"> { item.id } </td>
                <td className="col-3"> { item.title } </td>
                <td className="col-3"> { item.detail } </td>
                <td className="col-3"> { item.date } </td>
                <td className="col-1"><button onClick={(evt) => fncDelete(index)} className='btn btn-danger btn-sm'><i className="bi bi-trash3"></i></button></td>
              </tr>
             )}

          </tbody>
        </table>
          </div>
        </div>
    </>
    
  )
}

export default Settings