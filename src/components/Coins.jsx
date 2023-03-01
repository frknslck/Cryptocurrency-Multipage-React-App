import React from 'react'
import { Container } from "react-bootstrap"
import "./Coins.css"
import CoinsMap from './CoinsMap'

const Coins = (coins) => {
  return (
    <Container className='gap mt-4'>
            <div className='heading'>
                <p>#</p>
                <p>Coin</p>
                <p>Price</p>
                <p>24h</p>
                <p>Volume</p>
                <p>Mkt Cap</p>
            </div>
            {coins.coins.map(coins => {
                return(
                    <CoinsMap coins={coins} key={coins.id}/>
                )
            })}
    </Container>
  )
}

export default Coins