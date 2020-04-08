import React, { useRef } from 'react'

interface Props {
    addTodo: Function
}

const TodoInput: React.FC <Props> = ({ addTodo }) => {
    const todoTextInput = useRef<HTMLInputElement>(null);

    return (
        <div id="todoInputContainer">
            <input type="text" ref={todoTextInput} />
            <input type="button" value="Add Todo" onClick={() => addTodo(todoTextInput.current)} />
        </div>
    )
}

export default TodoInput;