import React, { useRef } from 'react'

interface Props {
    addTodo: Function,
    onKeyDown: Function
}

const TodoInput: React.FC <Props> = ({ addTodo, onKeyDown }) => {
    const todoTextInput = useRef<HTMLInputElement>(null);

    return (
        <div id="todoInputContainer">
            <input type="text" ref={todoTextInput} onKeyDown={e => onKeyDown(e)} />
            <input type="button" value="Add Todo" onClick={() => addTodo(todoTextInput.current)} />
        </div>
    )
}

export default TodoInput;