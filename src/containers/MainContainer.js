import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  state = {
    stocks: []
  }

  componentDidMount() {
    fetch(`http://localhost:3000/stocks`)  
    .then (r => r.json())
    .then ( stocks => {
      this.setState({
        stocks: stocks
      })
    })
  }

  render() {
    return (
      <div>
        <SearchBar/>

          <div className="row">
            <div className="col-8">

        <StockContainer stocks={this.state.stocks}/>

            </div>
            <div className="col-4">

              <PortfolioContainer/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
