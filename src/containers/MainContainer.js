import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  state = {
    stocks: [],
    portfolioIds: [],
    type: "All",
    sort: "none"
  }

  // addPortfolio is a callback function that will be invoked onClick 
  // in the Stock component. This callback function will receive the 
  // id of the stock the user would like to buy
  addPortfolio = (stockId) => {
    // check if the id already exists.
    if (!this.state.portfolioIds.find(id => id === stockId)) {
      // if id does not exist already in the portfolioIds array 
      // save new id
      this.setState({
        portfolioIds: [stockId, ...this.state.portfolioIds]
      }) 
    }
  }

  // removeStock is a callback function that will be invoked onClick
  // in the Stock component. It will be invoked by the same onClick
  // event. Like addPortfolio (above) it will also receive an id as
  // an argument. 
  removeStock = (stockId) => {
    this.setState({
      // we will .filter() over the array of ids and collect all of those id's
      // that do not match the condition (collect all id's from portfolioIds except)
      // the one returned.
      portfolioIds: this.state.portfolioIds.filter(id => id !== stockId)
    })
  }

  // return all of the stocks objects to be displayed in PortfolioContainer component
  portfolioStocks() {
    // .map() over each id number and still within the map block iterate once again to over 
  // all stocks to .find() the stocks that match the ids from the portfolioIds array.
    return this.state.portfolioIds.map(id => this.state.stocks.find(stock => stock.id === id))
  }

  // update sort state with the value returned from onClick callback function from
  // SearchBar component
  updateSort = (value) => {
    this.setState({
      sort: value
    })
  }

  updateType = (value) => {
    this.setState({
      type: value
    })
  }

  sortAndRenderStocks = () => {
    // use the spread operator to make a non-destructive copy of the stocks array to filteredStocks
    let filteredStocks = [...this.state.stocks]

    // sort by type
    if (this.state.type !== "All") {
      filteredStocks = filteredStocks.filter(stock => stock.type === this.state.type)
    }
    // sort Alphabetically
    if (this.state.sort === "Alphabetically") {
      return filteredStocks.sort((a,b) => a.name.localeCompare(b.name))
    } 
    // sort by Price
    if (this.state.sort === "Price") {
      return filteredStocks.sort((a,b) => a.price - b.price)
    }

    return filteredStocks
  }

  // initial fetch
  componentDidMount() {
    fetch("http://localhost:3000/stocks") 
    .then(r => r.json())
    .then(stockData => {
      this.setState({
        // set initial state
        stocks: stockData
      })
    })
  }

  render() {
    console.log("=====> MainContainer:", this.state)
    return (
      <div>
        <SearchBar updateType={this.updateType} updateSort={this.updateSort} sort={this.state.sort} />

          <div className="row">
            <div className="col-8">

              {/* 
                - pass addPortfolio callback function to StockContainer component and from StockContainer to Stock component.
                - pass stocks to StockContainer component.
              */}
              
              <StockContainer addPortfolio={this.addPortfolio} stocks={this.sortAndRenderStocks()} />

            </div>
            <div className="col-4">

              {/* 
                - pass pass the returned value of the portfolioStocks function to PortfolioContainer component.
              */}
              <PortfolioContainer removeStock={this.removeStock} stocks={this.portfolioStocks()} />

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
