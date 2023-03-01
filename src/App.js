import { Routes, Route } from "react-router-dom"
import Container from "react-bootstrap/Container"
import { useState, useEffect } from "react";
import axios from "axios"
import Coins from "./pages/Coins"
import CoinsDetail from "./pages/CoinsDetail"
import NotFound from "./pages/NotFound"
import Logo from "./components/Logo"

function App() {
  const [coins, setCoins] = useState([])

  const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=25&page=1&sparkline=false"

  useEffect(() => {
    axios.get(url).then((response) => {
      setCoins(response.data)
      console.log(response.data);
    }).catch((error) => {
      console.log(error);
    })
  }, [])
  
  return (
    <Container>
      <Logo/>
      <Routes>
        <Route path="/" element={<Coins coins={coins} />}/>
        <Route path="/coin" element={<CoinsDetail/>}>
          <Route path=":coinId" element={<CoinsDetail/>} />
        </Route>
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </Container>
  );
}

export default App;
