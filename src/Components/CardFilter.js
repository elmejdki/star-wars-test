import React from 'react';

const CardFilter = ({ searchChange }) => {
  return (
    <div className="pa2">
      <input
        className="filter"
        onChange={ searchChange }
        type="text"
        placeholder="search for a person ..." 
      />
    </div>
  );
}

export default CardFilter;
