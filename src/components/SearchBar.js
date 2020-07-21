import React from 'react';

const SearchBar = (props) => {
  console.log(props)
  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input type="radio" value="Alphabetically" checked={props.sortVal === 'Alphabetically'} onChange={props.updateSort}/>
        Alphabetically
      </label>
      <label>
        <input type="radio" value="Price" checked={props.sortVal === 'Price'} onChange={props.updateSort}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={props.updateFilter}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
