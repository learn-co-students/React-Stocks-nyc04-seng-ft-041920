import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  render() {
    console.log("=====> StockContainer:", this.props)
    return (
      <div>
        <h2>Stocks</h2>
        {
          this.props.stocks.map(stock => <Stock key={stock.id} stock={stock} stockAction={this.props.addPortfolio}/>)
        }
      </div>
    );
  }

}

export default StockContainer;
