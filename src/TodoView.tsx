import React, { useState } from 'react';


interface Props {
    todos: { content: string, isComplete: boolean } []
    handleReset: Function,
    setAsComplete: Function
}

const TodoView: React.FC<Props> = ({ todos, handleReset, setAsComplete }) => {
    let extraControls = null;
    const [toggleCompletedTodos, setToggleCompletedTodos] = useState<boolean>(false);

    const todosList: Array<any> = todos.map(({ content, isComplete }, index) => {
        if (toggleCompletedTodos || !isComplete) {
            return (
                <li key={index}>
                    <label>
                        <input type="checkbox" onChange={e => setAsComplete(e, index)} defaultChecked={isComplete} />
                        <span>{content}</span>
                    </label>
                </li>
            );
        }
    });

    if (todosList.length) {
        extraControls = (
            <div id="exraInfoContainer">
                <span>count {todosList.length}</span>
                <span className="extra-info-span-btn" onClick={() => setToggleCompletedTodos(!toggleCompletedTodos)}>show completed</span>
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