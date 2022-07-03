import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { useLocation, useNavigate } from 'react-router-dom'
import NavBar from './components/NavBar'
import { ProBilgiler } from './models/IProduct'

function Detail() {

  const nav = useNavigate()  
  const loc = useLocation()
  const [pro, setPro] = useState<ProBilgiler>()
  useEffect(() => {
    if ( loc.state ) {
        const pro = loc.state as ProBilgiler
        setPro( pro )
      }else {
        nav('/dashboard')
      }
  }, [])
  
  return (
    <>
        { pro && 
        <>
        <Helmet>
          <title>{ pro.productName }</title>
          <meta name="description" content="Product Detail Page" />
        </Helmet>
            <NavBar/>
            
            <div className='row mt-3'>
                <div className='col-sm-5'>
                    <img src={ pro.images[0].normal } className="img-thumbnail" height={300} />
                </div>
                <div className='col-sm-7'>
                    <h2> {pro.productName } <span className="badge bg-danger"> ₺{ pro.price } </span> </h2>
                    <div  dangerouslySetInnerHTML={{__html: pro.description }}></div>

                </div>
            </div>
        </>
        }
    </>
  )
}

export default Detail