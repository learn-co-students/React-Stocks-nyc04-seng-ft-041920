import React from "react";

class SearchBar extends React.Component {
  state = {
    alphabetically: false,
    price: false,
  };

  onChangeHandler = (event) => {
    event.persist();
    this.setState((prevState) => {
      return {
        [event.target.value]: !prevState[event.target.value],
      };
    });
  };

  componentDidUpdate() {
    this.props.sortBy(this.state);
  }

  render() {
    return (
      <div>
        <strong>Sort by:</strong>
        <label>
          <input
            type="radio"
            value="alphabetically"
            checked={this.state.alphabetically}
            onClick={this.onChangeHandler}
          />
          Alphabetically
        </label>
        <label>
          <input
            type="radio"
            value="price"
            checked={this.state.price}
            onClick={this.onChangeHandler}
          />
          Price
        </label>
        <br />

        <label>
          <strong>Filter:</strong>
          <select onChange={null}>
            <option value="Tech">Tech</option>
            <option value="Sportswear">Sportswear</option>
            <option value="Finance">Finance</option>
          </select>
        </label>
      </div>
    );
  }
}
export default SearchBar;
