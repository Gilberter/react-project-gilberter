import React from "react";
import './CreateTodoButton.css'

function CreateTodoButton (props) {

    const onClickButton = () => {
        props.setOpen(!props.open);
        }



    return (
        <button className="CreateTodoButton"
        onClick={onClickButton}
        >
            +
        </button>
    );
}
export { CreateTodoButton };