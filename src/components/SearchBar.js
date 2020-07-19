import React from 'react';

const SearchBar = ({sortFunc, filterFunc}) => {
  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input type="checkbox" value="All" onChange={() => sortFunc("All")} />
        All
      </label>
      <label>
        <input type="checkbox" value="Alphabetically" onChange={() => sortFunc("Alphabetically")}/>
        Alphabetically
      </label>
      <label>
        <input type="checkbox" value="Price" onChange={() => sortFunc("Price")}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select
          onChange={(e) => filterFunc(e.target.value)}>
          <option eventkey="View All" value="View All">View All</option>
          <option eventkey="Tech" value="Tech">Tech</option>
          <option eventkey="Sportswear" value="Sportswear">Sportswear</option>
          <option eventkey="Finance" value="Finance">Finance</option>

        </select>
      </label>


    </div>
  );
}


export default SearchBar;
