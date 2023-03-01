import React from 'react'
import { useEffect, useState} from "react"
import { useParams } from 'react-router-dom'
import axios from 'axios'
import DOMPurify from 'dompurify'
import Container  from 'react-bootstrap/Container'

const CoinsDetail = () => {
  const params = useParams()
  const [coin, setCoin] = useState({})
  const url = `https://api.coingecko.com/api/v3/coins/${params.coinId}`

  useEffect(() => {
    axios.get(url).then((response) => {
      setCoin(response.data)
    }).catch((error) => {
      console.log(error);
    })
  }, [])
  return (
    <Container>
        <div className="box">
            <h1 className='text-center'>{coin.name}</h1>
        </div>
        <div className="box">                
            <span className='rank text-center'>Rank # {coin.market_cap_rank}</span>
            <div className="alt-box">
                <div className='d-flex gap-3 align-items-center'>
                  {coin.image ? <img src={coin.image.small} alt='' width="80px"/> : null}
                  {coin.symbol ? <p className='mt-2 fs-3'>{coin.symbol.toUpperCase()} to USD</p> : null}
                </div>
                {coin.market_data?.current_price ? <h1>${coin.market_data.current_price.usd.toLocaleString()}</h1> : null}
            </div>
        </div>
        <div className='box'>
            <table>
                <thead>
                    <tr>
                        <th>1h</th>
                        <th>24h</th>
                        <th>7d</th>
                        <th>14d</th>
                        <th>30d</th>
                        <th>1yr</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{coin.market_data?.price_change_percentage_1h_in_currency ? <p>{coin.market_data.price_change_percentage_1h_in_currency.usd.toFixed(1)}%</p> : null}</td>
                        <td>{coin.market_data?.price_change_percentage_24h_in_currency ? <p>{coin.market_data.price_change_percentage_24h_in_currency.usd.toFixed(1)}%</p> : null}</td>
                        <td>{coin.market_data?.price_change_percentage_24h_in_currency ? <p>{coin.market_data.price_change_percentage_7d_in_currency.usd.toFixed(1)}%</p> : null}</td>
                        <td>{coin.market_data?.price_change_percentage_24h_in_currency ? <p>{coin.market_data.price_change_percentage_14d_in_currency.usd.toFixed(1)}%</p> : null}</td>
                        <td>{coin.market_data?.price_change_percentage_24h_in_currency ? <p>{coin.market_data.price_change_percentage_30d_in_currency.usd.toFixed(1)}%</p> : null}</td>
                        <td>{coin.market_data?.price_change_percentage_24h_in_currency ? <p>{coin.market_data.price_change_percentage_1y_in_currency.usd.toFixed(1)}%</p> : null}</td>

                    </tr>
                </tbody>
            </table>
        </div>
        <div className='box'>
            <div className='stats'>
                <div>
                    <div className='row'>
                        <h4>24 Hour Low</h4>
                        {coin.market_data?.low_24h ? <p>${coin.market_data.low_24h.usd.toLocaleString()}</p> : null}
                    </div>
                    <div className='row'>
                        <h4>24 Hour High</h4>
                        {coin.market_data?.high_24h ? <p>${coin.market_data.high_24h.usd.toLocaleString()}</p> : null}                            </div>
                </div>
                <div>
                    <div className='row'>
                        <h4>Market Cap</h4>
                        {coin.market_data?.market_cap ? <p>${coin.market_data.market_cap.usd.toLocaleString()}</p> : null}
                    </div>
                    <div className='row'>
                        <h4>Circulating Supply</h4>
                        {coin.market_data ? <p>{coin.market_data.circulating_supply}</p> : null}
                    </div>
                </div>
            </div>
        </div>

        <div className='box'>
            <div className='about'>
                <h3 className='text-center'>About</h3>
                <p dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(coin.description ? coin.description.en : ''),}}>
                </p>
            </div>
        </div>
    </Container>
  )
}

export default CoinsDetail