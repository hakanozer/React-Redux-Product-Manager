import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { IUser } from './models/IUser'

function Login() {

  // useNavigate -> react-router-dom
  // componentler arasında veri aktarmı ve geçişler sağlanır.
  const navigate = useNavigate()

  // useState
  // kullanıcıdan yada servisten gelen dataların barındırılması
  // ve değişimi halinde otomatik etki(HTML Dom) oluşumu için kullanılır.
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loginErrorMessage, setErrorMessage] = useState(false)
  const [messageError, setMessageError] = useState('')

  const fncSend = (evt: React.FormEvent) => {
    evt.preventDefault()
    const sendParams = {
      ref: '74430d47fa16b4c53c0fe59510752c70',
      userEmail: email,
      userPass: password,
      face: 'no'
    }
    const url = 'https://www.jsonbulut.com/json/userLogin.php'
    axios.get<IUser>(url, { params: sendParams }).then( res => {
        const user = res.data.user[0]
        const status = user.durum
        const message = user.mesaj
        if ( status === true ) {
          const bilgi = user.bilgiler
          if ( bilgi ) {
            sessionStorage.setItem("user", bilgi.userEmail )
            navigate('/dashboard')
          }
        }else {
          setMessageError(message)
          setErrorMessage(true)
        }
    })

  }
  return (
    <>
        <div className='row'>
            <div className='col-sm-4'></div>
            <div className='col-sm-4'>
                <h2>User Login</h2>
                { loginErrorMessage && 
                  <div className="alert alert-danger alert-dismissible fade show" role="alert">
                    <strong>Error!</strong> { messageError }
                    <button onClick={(evt) => setErrorMessage(false) } type="button" className="btn-close" aria-label="Close"></button>
                  </div>
                }
                <form onSubmit={fncSend} >
                    <input required type='email' className='form-control mt-3' onChange={(evt) => setEmail( evt.target.value ) } placeholder='E-Mail' />
                    <input required type='password' className='form-control mt-3' onChange={(evt) => setPassword( evt.target.value ) } placeholder='Password' />
                    <button className='btn btn-primary mt-2' type='submit'>Send</button>
                </form>
            </div>
            <div className='col-sm-4'></div>
        </div>
    </>
  )
}

export default Login