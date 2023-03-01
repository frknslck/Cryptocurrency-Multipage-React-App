import React from 'react'
// import "./Coins.css"

const CoinsMap = ({coins}) => {
  return (
    <div className='map-s'>
        <p> {coins.market_cap_rank} </p>
        <div className='d-flex gap-3'>
            <img src={coins.image} alt={coins.symbol} width="50px"/>
            <p>{coins.symbol.toUpperCase()}</p>
        </div>
        <p>${coins.current_price.toLocaleString()}</p>
        <p>{coins.price_change_percentage_24h.toFixed(2)}</p>
        <p>$ {coins.total_volume.toLocaleString()}</p>
        <p>$ {coins.market_cap.toLocaleString()}</p>
    </div>
  )
}

export default CoinsMap