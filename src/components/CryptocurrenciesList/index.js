// Write your JS code here
import {Component} from 'react'

import './index.css'

import CryptocurrencyItem from '../CryptocurrencyItem'

class CryptocurrenciesList extends Component {
  render() {
    const {cryptoData} = this.props

    return (
      <div className="detailed-container">
        <h1 className="main-title">Cryptocurrency Tracker</h1>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
            className="img"
            alt="cryptocurrency"
          />
        </div>

        <ul className="crypto-currency-list">
          <li className="list-header">
            <p className="list-coin-type-heading">Coin Type</p>
            <div className="usd-and-euro-coin-container">
              <p className="list-coin-value-heading ">USD</p>
              <p className="list-coin-value-heading ">EURO</p>
            </div>
          </li>

          {cryptoData.map(each => (
            <CryptocurrencyItem cryptoDetails={each} key={each.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default CryptocurrenciesList
