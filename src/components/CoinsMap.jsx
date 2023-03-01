import React from 'react'
import "./Coins.css"

const CoinsMap = ({coins}) => {
    console.log(coins);
  return (
    <div className='map-row'>
        <p> {coins.market_cap_rank} </p>
        <div className='d-flex g-3'>
            <img src={coins.image} alt={coins.symbol} width="50px"/>
            <p>{coins.symbol}</p>
        </div>
        <p>${coins.current_price}</p>
        <p>{coins.price_change_percentage_24h}</p>
        <p>{coins.total_volume}</p>
        <p>{coins.market_cap}</p>
    </div>
  )
}

export default CoinsMap