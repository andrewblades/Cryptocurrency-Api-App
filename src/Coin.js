import React from 'react'
import './Coin.css'
const Coin = ({ name, image, symbol, price, volume, priceChange, marketcap }) => {
    return (
        <div className='coinContainer'>
            <div className="coinRow">
                <div className="coin">
                    <img src={image} alt="cryptocoins" />
                    <h1>{name}</h1>
                    <p className='coinSymbol'>{symbol}</p>
                </div>
                <div className="coinData">
                    <p className="coinPrice">
                        {price} euros
                    </p>
                    <p className='coinVolume'>
                        {volume.toLocaleString()} euros
                    </p>
                    {priceChange < 0 ? (
                        <p className="coinPercent red">{priceChange.toFixed(2)}%</p>
                    ) : (<p className="coinPercent green">{priceChange.toFixed(2)}%</p>)}

                    <p className="coinMarketcap">
                        Mkt Cap: {marketcap.toLocaleString()} euros
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Coin
