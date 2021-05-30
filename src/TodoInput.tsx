import React, { useRef, useEffect } from 'react';
import { AddToDo, HandleKeyDown } from './Todo';

interface Props {
    addTodo: AddToDo,
    onKeyDown: HandleKeyDown
}

const TodoInput: React.FC <Props> = ({ addTodo, onKeyDown }) => {
    const todoTextInput = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (todoTextInput.current !== null) {
            todoTextInput.current.focus();
        }
    }, []);

    return (
        <div id="todoInputContainer">
            <input type="text" ref={todoTextInput} onKeyDown={e => onKeyDown(e)} />
            <input type="button" value="Add Todo" onClick={() => addTodo(todoTextInput.current!)} />
        </div>
    )
}

export default TodoInput;