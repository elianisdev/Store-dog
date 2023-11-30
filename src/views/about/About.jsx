import React, {useState} from 'react';
import TodoCounter from "../../components/todo/TodoCounter";
import TodoSearch from "../../components/todo/TodoSearch/TodoSearch";
import TodoList from "../../components/todo/TodoList";
import CreateTodoButton from "../../components/todo/Button/CreateTodoButton";
import TodoItem from "../../components/todo/Todo Item/TodoItem";

const defaultTodos = [
  { text: 'Estudiar React', completed: false },
  { text: 'Estudiar condicionales', completed: true },
  { text: 'Estudiar validaciones', completed: true },
  { text: 'Ver television', completed: false },
  { text: 'Sacar a Mia', completed: true} ,
  { text: 'Escuchar podcats', completed: false }
]
const About = () => {
  const [todos, setTodos] = useState(defaultTodos)
  const [searchValue, setSearchValue] = useState('');
  const completedTodos = todos.filter(todo=>
    !!todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter(
    (todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todo.text.includes(searchText)
    }
  )

  console.log('Los Usuarios buscan todos de ' + searchValue)

  return (
    <>
     <TodoCounter
     completado = {completedTodos}
     total= {totalTodos}
     />
      <TodoSearch
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      />
      <TodoList>
        {searchedTodos.map((todo, index) => (
          <TodoItem
            key={index}
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
