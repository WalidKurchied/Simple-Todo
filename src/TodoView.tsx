import React from 'react'

interface Props {
    todos: string[],
    handleReset: Function
}

const TodoView: React.FC <Props> = ({ todos, handleReset }) => {
    let extraControls = null;
    const todosList: Array<any> = todos.map((todo, index) => (
        <li key={index}>
            <label>
                <input type="checkbox" />
                <span>{todo}</span>
            </label>
        </li>
    ));

    if (todosList.length) {
        extraControls = (
            <div id="exraInfoContainer">
                <span>count {todosList.length}</span>
                <span className="extra-info-span-btn">show completed</span>
                <span className="extra-info-span-btn" onClick={() => handleReset()}>clear</span>
            </div>
        );
    }
    
    return (
        <>
            <div id="todoViewContainer">
                <ul>
                    {todosList}
                </ul>
            </div>
            {extraControls}
        </>
    )
}

export default TodoView;