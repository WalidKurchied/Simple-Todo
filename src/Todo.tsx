import React, { Component } from 'react'
import TodoInput from './TodoInput';
import TodoView from './TodoView';

import './todo.css';

interface State {
    todos: any[] //TODO: need to fix this type
}

export default class Todo extends Component<{}, State> {
    constructor(props: {}) {
        super(props);
        this.addTodo = this.addTodo.bind(this);
        this.onKeyDown = this.onKeyDown.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.setAsComplete = this.setAsComplete.bind(this);
        this.state = {
            todos: [],
        }
    };

    onKeyDown(e: KeyboardEvent) {
        if (e.keyCode === 13) {
            this.addTodo(e.target as HTMLInputElement);
        }
    }

    addTodo({ value }: HTMLInputElement) {
        if (value.trim()) {
            this.setState(prevState => ({
                todos: [...prevState.todos, { content: value, isComplete: false }]
            }));
        }
    }
    
    setAsComplete(e: any, id: number) {
        const isComplete = e.target.checked;

        setTimeout(() => {
            this.setState(({ todos }) => ({
                    todos: todos.map((todo, index) => {
                        if(index === id) {
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
                    <TodoInput addTodo={this.addTodo} onKeyDown={this.onKeyDown} />
                    <TodoView todos={this.state.todos} handleReset={this.handleReset} setAsComplete={this.setAsComplete} />
                </div>
            </>
        )
    }
}
