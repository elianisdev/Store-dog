import React, {useState} from 'react';
import "./TodoSearch.css"

const TodoSearch = () => {
  const [searchValue, setSearchValue] = useState('');
console.log('')

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

