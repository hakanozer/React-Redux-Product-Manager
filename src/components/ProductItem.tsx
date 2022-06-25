import React from 'react'
import { ProBilgiler } from '../models/IProduct'

function ProductItem( item: { pro: ProBilgiler } ) {
  return (
    
        <div className="card col-sm-4">
            <img src={ item.pro.images[0].normal } className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title"> { item.pro.productName } </h5>
                <p className="card-text">{ item.pro.brief }</p>
                <button type="button" className="btn btn-dark" style={{ position: 'absolute', top: 5, right: 5 }}>
                    <i className="bi bi-arrow-right"></i> Detail
                    <span className="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle" style={{ zIndex: 10 }}>
                         
                            {
                                 parseInt( ""+ ( Math.random() * 10 ) )
                            } 
                    </span>
                </button>
           
            </div>
        </div>
  )
}

export default ProductItem