import React, { Component } from 'react'
import TodoInput from './TodoInput';
import TodoView from './TodoView';

import './todo.css';

interface State {
    todos: string []
}

export default class Todo extends Component <{}, State> {
    constructor(props: {}) {
        super(props);
        this.addTodo = this.addTodo.bind(this);
        this.state = {
            todos: []
        }
    };

    addTodo({ value }:HTMLInputElement) {
        this.setState(prevState => ({todos: [...prevState.todos, value]}));
    }

    render() {
        return (
            <>
                <h1 id="todoTitle">TODO</h1>
                <div id="todo">
                    <TodoInput addTodo={this.addTodo} />
                    <TodoView todos={this.state.todos} />
                </div>
            </>
        )
    }
}
