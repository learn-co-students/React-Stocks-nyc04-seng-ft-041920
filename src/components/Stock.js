import React from "react";

class Stock extends React.Component {
  clickHandler() {
    this.props.handleStockClick(this.props.stock);
    // this.setState((prevState) => ({
    //   isBought: !prevState.isBought,
    // }));
  }

  render() {
    return (
      <div onClick={() => this.clickHandler()}>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{this.props.stock.name}</h5>
            <p className="card-text">
              {this.props.stock.ticker}: {this.props.stock.price}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Stock;
