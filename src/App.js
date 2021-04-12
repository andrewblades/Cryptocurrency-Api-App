import axios from 'axios'
import React, { useState, useEffect } from 'react'

import './App.css';
import Coin from './Coin';

// https://api.coingecko.com/api/v3/coins/
// markets?vs_currency=eur&
// order=market_cap_desc&per_page=100&page=1&sparkline=false

function App() {


  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('')

  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false')
      .then(res => {
        console.log(res.data)
        setCoins(res.data)
      })
      .catch(error => alert('Oi you have error', error))

  }, [])

  const handleChange = e => {
    setSearch(e.target.value)
  }


  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  )

  if (coins === undefined) {
    return (
      <div>Coins not found</div>
    )
  } else {
    return (
      <div className="coinsApp">
        <div className="coinSearch">
          <h1 className="coinText">Search a currency</h1>
          <form>
            <input type="text" placeholder='Search' className='coinInput' onChange={handleChange} />
          </form>
        </div>
        {filteredCoins.map(coin => {
          return (
            <Coin
              key={coin.id}
              name={coin.name}
              image={coin.image}
              symbol={coin.symbol}
              marketcap={coin.market_cap}
              price={coin.current_price}
              priceChange={coin.price_change_percentage_24h}
              volume={coin.total_volume}
            />


          )
        })}

      </div>
    );
  }
}
export default App;
