import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {
  state = {
    stocks: [],
    portfolio: [],
    filter: 'All',
    sortBy: ''
  }

  componentDidMount() {
    fetch('http://localhost:3000/stocks')
    .then(r => r.json())
    .then(stocks => this.setState({stocks: stocks}))
  }

  addToPortfolio = (id) => {
      const portfolio = this.state.stocks.filter(s => s.id === id)
      this.setState({
        portfolio: [...portfolio, ...this.state.portfolio]
      })
  }

  removeFromPortfolio = (id) => {
    const newPortfolio = this.state.portfolio.filter(s => s.id !== id)
    this.setState({
      portfolio: [...newPortfolio]
    })
  } 

  updateFilter = (e) => {
    this.setState({
      filter: e.target.value
    })
  }

  updateSort = (e) => {
    this.setState({
      sortBy: e.target.value
    })
  }

  renderFilteredSorted = () => {
    const type = this.state.filter 
    const sortBy = this.state.sortBy
    let stocks = [...this.state.stocks]
    if (sortBy === 'Alphabetically') {
      stocks.sort((a,b) => (a.name > b.name ? 1 : -1))
    }
    if (sortBy === 'Price') {
      stocks.sort((a,b) => (a.price > b.price ? 1 : -1))
    }
    if (type !== 'All') {
      stocks = stocks.filter(s => s.type === type)
    }
    console.log(stocks)
    return stocks
  }

  render() {
    return (
      <div>
        <SearchBar sortVal={this.state.sortBy} updateSort={this.updateSort} updateFilter={this.updateFilter}/>

          <div className="row">
            <div className="col-8">

              <StockContainer handleClick={this.addToPortfolio} stocks={this.renderFilteredSorted()}/>

            </div>
            <div className="col-4">

              <PortfolioContainer handleClick={this.removeFromPortfolio} portfolio={this.state.portfolio}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
