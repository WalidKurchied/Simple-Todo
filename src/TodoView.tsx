import React from 'react'

interface Props {
    todos: string[]
}

const TodoView: React.FC <Props> = ({ todos }) => {
    const todosList: Array<any> = todos.map((todo, index) => (
        <li key={index}>
            <label>
                <input type="checkbox" />
                <span>{todo}</span>
            </label>
        </li>
    ));
    
    return (
        <div id="todoViewContainer">
            <ul>
                {todosList}
            </ul>
        </div>
    )
}

export default TodoView;