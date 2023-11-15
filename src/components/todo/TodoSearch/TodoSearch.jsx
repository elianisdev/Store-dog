import React, {} from 'react';
import "./TodoSearch.css"

const TodoSearch = ({searchValue, setSearchValue}) => {


  return (
    <div>
    <input placeholder='Estudiar dos horas diarias'
    className="TodoSearch"
    value={searchValue}
    onChange={
      (event) => {
        setSearchValue(event.target.value);
    }}
    />
    </div>
  );
};

export default TodoSearch;

