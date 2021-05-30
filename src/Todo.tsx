import React, { Component } from 'react';
import TodoInput from './TodoInput';
import TodoView from './TodoView';

import './styles/todo.css';

export type SetAsComplete = (e: React.ChangeEvent<HTMLInputElement>, id: number) => void;
export type HandleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => void;
export type AddToDo = (param: HTMLInputElement) => void;
export type HandleReset = () => void;

export interface Todos {
    content: string,
    isComplete: boolean,
}

interface State {
    todos: Todos[]
}

export default class Todo extends Component<{}, State> {
    constructor(props: {}) {
        super(props);
        this.addTodo = this.addTodo.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.setAsComplete = this.setAsComplete.bind(this);
        this.state = {
            todos: [],
        }
    };

    handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
        if (e.keyCode === 13) {
            this.addTodo(e.target as HTMLInputElement);
        }
    }

    addTodo({ value }: HTMLInputElement) {
        if ((value as any).trim()) {
            this.setState((prevState: State) => ({
                todos: [...prevState.todos, { content: value, isComplete: false }]
            }));
        }
    }

    setAsComplete(e: React.ChangeEvent<HTMLInputElement>, id: number) {
        const isComplete = e.target.checked;

        setTimeout(() => {
            this.setState(({ todos }) => ({
                    todos: todos.map((todo: Todos, index: number) => {
                        if (index === id) {
                            return {...todo, isComplete};
                        }

                        return todo;
                    })
            }));
        }, 150);
    }

    handleReset() {
        this.setState({ todos: [] });
    }

    render() {
        return (
            <>
                <h1 id="todoTitle">TODO</h1>
                <div id="todo">
                    <TodoInput addTodo={this.addTodo} onKeyDown={this.handleKeyDown} />
                    <TodoView todos={this.state.todos} handleReset={this.handleReset} setAsComplete={this.setAsComplete} />
                </div>
            </>
        )
    }
}
