import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {
  render() {
    const {stonkData, filterWord, sortWord, buyStonk} = this.props

    let filtered;
    let sorted;

    switch(filterWord) {
      case 'Tech':
        filtered = stonkData.filter(stonk => stonk.type === 'Tech')
      break
      case 'Sportswear':
        filtered = stonkData.filter(stonk => stonk.type === 'Sportswear')
      break
      case 'Finance':
        filtered = stonkData.filter(stonk => stonk.type === 'Finance')
      break
      case 'View All':
        filtered = stonkData
      break
    }

    if (sortWord === 'Alphabetically') {
      sorted = filtered.concat().sort((a, b) => a.name.localeCompare(b.name))
    } else if (sortWord === 'Price') {
      sorted = filtered.concat().sort((a, b) => b.price - a.price)
    } else {
      sorted = filtered
    }

    return (
      <div>
        <h2>Stocks</h2>
        {sorted.map((stonk, index) =>
          <Stock
            func={buyStonk}
            id={stonk.id}
            key={index}
            name={stonk.name}
            ticker={stonk.ticker}
            price={stonk.price}
            type={stonk.type}
          />
        )}
      </div>
    );
  }

}

export default StockContainer;
