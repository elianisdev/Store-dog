import React, {useState} from 'react';
import TodoCounter from "../../components/todo/TodoCounter";
import TodoSearch from "../../components/todo/TodoSearch/TodoSearch";
import TodoList from "../../components/todo/TodoList";
import CreateTodoButton from "../../components/todo/Button/CreateTodoButton";
import TodoItem from "../../components/todo/Todo Item/TodoItem";


const defaultTodos = [
  { text: 'Estudiar React', completed: false },
  { text: 'Estudiar condicionales', completed: true },
  { text: 'Estudiar validaciones', completed: false },
  { text: 'Ver television', completed: false },
  { text: 'Sacar a Mia', completed: true }
]
const About = () => {
  const [todos, setTodos] = useState()
  const [searchValue, setSearchValue] = useState('');
  console.log('Los Usuarios buscan todos de ' + searchValue)

  return (
    <>
     <TodoCounter
     completado = {5}
     total= {15}
     />
      <TodoSearch
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      />
      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}

          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </>
  );
};


export default About;