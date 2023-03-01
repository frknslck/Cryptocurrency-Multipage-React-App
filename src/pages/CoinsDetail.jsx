import React from 'react'
import { useEffect, useState} from "react"
import { useParams } from 'react-router-dom'
import axios from 'axios'

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
  console.log(params.coinId);
  console.log(coin.id);
  return (
      <h1>{coin.id}</h1>
  )
}

export default CoinsDetail