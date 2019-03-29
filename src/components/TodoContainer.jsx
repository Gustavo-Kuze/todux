import React, { Component } from 'react'
import TodoList from './TodoList'
import TodoInput from './TodoInput'

export default class TodoContainer extends Component {

    state = {
        todos: []
    }

    add = todo => {
        if (!this.state.todos.map(t => t.name).includes(todo))
            this.setState({ todos: [...this.state.todos, { name: todo, done: false }] })
    }

    delete = todoName => this.setState({
        todos: [...this.state.todos.filter(todo => todo.name !== todoName)]
    })

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-8 offset-2">
                        <TodoInput add={this.add} />
                        <TodoList todos={this.state.todos} delete={this.delete} />
                    </div>
                </div>
            </div>
        )
    }
}
