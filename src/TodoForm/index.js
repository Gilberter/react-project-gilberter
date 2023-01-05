import React from "react";
import { TodoContext } from "../TocoContext";

function TodoForm() {
    const {addTodo, setOpen} = React.useContext(TodoContext)


    const [newTodo, setNewTodo] = React.useState('')

    const onChangeNewTodo = (event) => {
        setNewTodo(event.target.value)
        console.log(event.target.value);
    }
    const onCancel = () => {
        setOpen(false)
    }
    const onAdd = (event) => {
        event.preventDefault();
        addTodo(newTodo)
    }

    console.log(newTodo);
    
    return (
        <form >
            <label>Escribe perra hpta</label>
            <textarea value={newTodo} onChange={onChangeNewTodo}  placeholder="Escribe Tu Todo" />
            <div>
                <button type="button" onClick={onCancel}>
                    Cancelar
                </button>
                <button type="submit" onClick={onAdd}>
                    Añadir
                </button>
            </div>
        </form>
        
    );
}

export { TodoForm }