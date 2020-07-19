import React, { Component } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "../components/SearchBar";

class MainContainer extends Component {
  state = {
    stock: [],
    myStocks: [],
  };

  updateMyStocks = (stock) => {
    this.setState({
      myStocks: [...this.state.myStocks, stock],
    });
  };

  deleteMyStock = (stock) => {
    let newArray = this.state.myStocks.filter((ele) => ele.id !== stock.id);
    this.setState({
      myStocks: newArray,
    });
  };

  componentDidMount() {
    fetch("http://localhost:3000/stocks")
      .then((resp) => resp.json())
      .then((stocks) => {
        this.setState({
          stock: stocks,
        });
      });
  }

  sortBy = (sortState) => {
    let sortedArray = [];
    if (sortState.alphabetically) {
      sortedArray = this.state.stock.sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
      this.setState({
        stock: sortedArray,
      });
    }
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <SearchBar sortBy={this.sortBy} />

        <div className="row">
          <div className="col-8">
            <StockContainer
              updateMyStocks={this.updateMyStocks}
              stocks={this.state.stock}
            />
          </div>
          <div className="col-4">
            <PortfolioContainer
              deleteMyStocks={this.deleteMyStock}
              myStocks={this.state.myStocks}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default MainContainer;
