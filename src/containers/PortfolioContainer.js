import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  render() {
    console.log("=====> PortfolioContainer:", this.props.stocks)
    return (
      <div>
        <h2>My Portfolio</h2>
          {
            this.props.stocks.map(stock => <Stock key={stock.id} stock={stock} stockAction={this.props.removeStock} />)
          }
      </div>
    );
  }

}

export default PortfolioContainer;
