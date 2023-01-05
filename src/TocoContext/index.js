import React from 'react'
import { useLocalStorage } from './useLocalStorage';

const TodoContext = React.createContext();


function TodoProvider(props) {

    
  const {item:todos,saveItem: saveTodos,loading,error} = useLocalStorage('TODOS_V1');
  const [open, setOpen] = React.useState(false);

  
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => todo.completed == true).length;
  const totalTodos = todos.length;

  
  const toCompleteTodos = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text == text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);

  }

  const addTodo = (text) => {
    
    const newTodos = [...todos];
    newTodos.push({
      text:text,
      completed:false,});
    saveTodos(newTodos);

  }

  const toDeleteeTodos = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text == text);
    
    const newTodos = [...todos];
    newTodos.splice(todoIndex,1);
    saveTodos(newTodos);

  }

  let searchedTodos = []

  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    })
  }

    return(
        <TodoContext.Provider value={{
            loading,
            error,
            completedTodos,
            totalTodos,
            toDeleteeTodos,
            toCompleteTodos,
            setSearchValue ,
            searchValue,
            searchedTodos ,
            open,
            setOpen,
            addTodo,
        }} >
            {props.children}
        </TodoContext.Provider>
    );
}

export { TodoContext, TodoProvider }