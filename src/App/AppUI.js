import React from "react";
import { TodoCounter  } from "../TodoCounter/TodoCounter";
import { TodoSearch } from "../TodoSearch/TodoSearch";
import { CreateTodoButton } from "../CreateTodoButton/CreateTodoButton";
import { TodoList } from "../TodoList/TodoList";
import { TodoItem } from "../TodoItem/TodoItem";
import { TodoContext } from "../TocoContext";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";




function AppUI() {

    const {error, loading, searchedTodos, toDeleteeTodos, toCompleteTodos, open, setOpen} = React.useContext(TodoContext)
    return (
        <React.Fragment>
            <TodoCounter /> 
            <TodoSearch />
                
                <TodoList>
                {error && <p>Hubo un error, no te preocupes ya lo estamos solucionando</p>}
                {loading && <p>Estamos Cargando, no cierres la pagina...</p>}
                {(!loading && searchedTodos.lenght == 0) && <p>Crea tu primer tarea para hacer!!!</p>}
                {searchedTodos.map(todo => (
                    <TodoItem key={todo.text} text={todo.text} completed={todo.completed} onDelete={()=> toDeleteeTodos(todo.text)} onComplete={() => toCompleteTodos(todo.text)}  />
                ))}
                
                </TodoList>
            {open && (
                <Modal>
                    <TodoForm />
                </Modal>  
            )}  
            <CreateTodoButton setOpen={setOpen} open={open}/>
        </ React.Fragment>
    );
}

export { AppUI }