import React from 'react';
import "./TodoSearch.css"

const TodoSearch = () => {
  return (
    <div>
    <input placeholder='Estudiar dos horas diarias'
    className="TodoSearch"
    onChange={
      (event) => {
      console.log('Escribiste en el TodoSearch')
      console.log(event)
      console.log(event.target)
      console.log(event.target.value)
    }}
    />
    </div>
  );
};

export default TodoSearch;

