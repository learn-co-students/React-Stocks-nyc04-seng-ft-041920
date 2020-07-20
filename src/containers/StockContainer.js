import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {
  
  renderStocks () {
    return this.props.stocks.map (stocks =>
    <Stock 
    key={stocks.id}
    ticker={stocks.ticker}
    name={stocks.name}
    type={stocks.type}
    price={stocks.price}
    />)
    }

  render() {
    return (
      <div>
        <h2>Stocks</h2>
        {this.renderStocks()}
      </div>
    );
  }

}

export default StockContainer;
