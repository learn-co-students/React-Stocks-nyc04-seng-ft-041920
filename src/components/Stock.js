import React from 'react'

const Stock = ({id, name, price, ticker, type, func}) => (
  <div>
    <div id={id} className="card" onClick={() => func(id)}>
      <div className="card-body">
        <h5 className="card-title">{
          name
          }</h5>
        <p className="card-text">
          {ticker}: {price}</p>
      </div>
    </div>


  </div>
);

export default Stock
