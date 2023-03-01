import React from 'react'
// import "./Coins.css"
import { useNavigate } from 'react-router-dom'

const CoinsMap = ({coins}) => {
  const navigate = useNavigate()
  const { id } = coins
  console.log(id);
  return (
    <div 
    className='map-s'
    type="button"
    onClick={() => navigate(`${id}`, { state: coins })}>
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