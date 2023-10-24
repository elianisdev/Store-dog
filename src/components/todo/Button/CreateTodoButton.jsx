import React from 'react';
import './CreateTodoButton.css';

const TodoCreateButton = () => {
  return (
    <div>
      <button className="CreateTodoButton"
      onClick={
        (event) => {
          console.log('le diste click al botón')
          console.log(event)
          console.log(event.target)
        }

      }
      >+</button>
    </div>
  );
};

export default TodoCreateButton;
