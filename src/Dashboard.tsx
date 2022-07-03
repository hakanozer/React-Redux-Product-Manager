import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet';

import NavBar from './components/NavBar';
import ProductItem from './components/ProductItem';
import { IProduct, ProBilgiler } from './models/IProduct';

function Dashboard() {

  const [arr, setArr] = useState<ProBilgiler[]>([])

  useEffect(() => {
    const sendParams = {
      ref: '74430d47fa16b4c53c0fe59510752c70',
      start: '0'
    }
    const url = 'https://www.jsonbulut.com/json/product.php'
    axios.get<IProduct>(url, { params: sendParams }).then( res => {
      const arrx = res.data.Products[0].bilgiler
      setArr( arrx )
    })
  },[])
  

  return (
    <>  
        <Helmet>
          <title>Product List</title>
          <meta name="description" content="Product List Page" />
        </Helmet>
        <NavBar />
        <div className='row p-3'>
          { arr.map( ( item, index ) =>
            <ProductItem key={index} pro={item} />
          )}
        </div>
    </>
    
  )
}

export default Dashboard