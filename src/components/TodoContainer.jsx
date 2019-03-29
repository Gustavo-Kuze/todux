import React, { Component } from 'react'
import TodoList from './TodoList'
import TodoInput from './TodoInput'

export default class TodoContainer extends Component {

    state = {
        todos: []
    }

    add = todo => this.setState({ todos: [...this.state.todos, todo] })
    delete = todo => this.setState({
        todos: [...this.state.todos]
            .splice(this.state.todos.indexOf(todo), 1)
    })

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-8 offset-2">
                        <TodoInput add={this.add}/>
                        <TodoList todos={this.state.todos}/>
                    </div>
                </div>
            </div>
        )
    }
}
