import React from 'react'
import "./Coins.css"
import CoinsMap from './CoinsMap'
import Form from "react-bootstrap/Form"
import { useState } from 'react'

const Coins = (coins) => {
  const [search, setSearch] = useState("")
  return (
    <>
        <Form.Control 
            placeholder="Search coin by name" 
            type="search" 
            className='search w-50'
            onChange={(e) => setSearch(e.target.value)}/>
        <div className='mt-4'>
                <div className='row-s'>
                    <p>#</p>
                    <p>Coin</p>
                    <p>Price</p>
                    <p>24h</p>
                    <p>Volume</p>
                    <p>Mkt Cap</p>
                </div>
                {coins.coins.filter((coins) => coins.symbol.toLowerCase().includes(search.trim().toLowerCase())).map(coins => {
                    return(
                        <CoinsMap coins={coins} key={coins.id}/>
                    )
                })}
        </div>
    </>
    
  )
}

export default Coins