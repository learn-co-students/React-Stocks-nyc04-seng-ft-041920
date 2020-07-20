import React from 'react';

const SearchBar = (props) => {
  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        {/* 
          - pass updateSort form props in a callback function onClick. Pass in event.target.value as argument to updateSort callback function.
          - pass sort from props as the value of the checked attribute. A small condition will check if the value of sort was updated in the 
            MainContainer to true or false.
         */}
        <input type="radio" value="Alphabetically" checked={props.sort === "Alphabetically"} onChange={(event) => props.updateSort(event.target.value)}/>
        Alphabetically
      </label>
      <label>
        <input type="radio" value="Price" checked={props.sort === "Price"} onChange={(event) => props.updateSort(event.target.value)}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={(event) => props.updateType(event.target.value)}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
