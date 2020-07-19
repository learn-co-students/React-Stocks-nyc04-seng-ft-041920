import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {
  state = {
    stocks: [],
    sortKey: "All",
    filterKey: "View All",
    boughtStonks: []
  }

  componentDidMount() {
    fetch("http://localhost:3000/stocks")
    .then(r => r.json())
    .then(stocks => {
      this.setState({stocks})
    })
  }

  handleSort = (val) => {
    this.setState({sortKey: val})
  }

  handleFilter = (val) => {
    this.setState({filterKey: val})
  }

  buyStonk = (id) => {
    let stonk = this.state.stocks.filter(stonk => stonk.id === id)
    // something's wonky, and i think it's because of how i structured this
    this.setState(prevState => {
      return {
        boughtStonks: [
          ...prevState.boughtStonks,
          stonk
        ]
      }
    })
  }

  sellStonk = (id) => {
    console.log(id)
    let stonk = this.state.boughtStonks.filter(stonk => stonk[0].id !== id)
    console.log(stonk)
    this.setState({boughtStonks: stonk})
  }

  render() {
    return (
      <div className="container">
        <SearchBar
          sortFunc={this.handleSort}
          filterFunc={this.handleFilter}
        />

          <div className="row">
            <div className="col-8">

              <StockContainer
                filterWord={this.state.filterKey}
                sortWord={this.state.sortKey}
                stonkData={this.state.stocks}
                buyStonk={this.buyStonk}
              />

            </div>
            <div className="col-4">

              <PortfolioContainer
                sellStonk={this.sellStonk}
                ownedStonks={this.state.boughtStonks}
              />

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
