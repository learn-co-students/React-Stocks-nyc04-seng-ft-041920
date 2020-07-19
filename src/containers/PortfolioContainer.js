import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {
  render() {

    return (
      <div>
        <h2>My Portfolio</h2>
          {this.props.ownedStonks.map((stonk, index) =>

            <Stock
              key={index}
              id={stonk[0].id}
              name={stonk[0].name}
              func={this.props.sellStonk}
              ticker={stonk[0].ticker}
              price={stonk[0].price}
              type={stonk[0].type}
            />
          )}
      </div>
    );
  }

}

export default PortfolioContainer;
