import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { deleteTodo, markTodoAsDone, resetTodo } from '../components/redux/actions/todoActions'

class TodoList extends Component {

    toggleDone = (itemName, isItemDone) => {
        if (isItemDone) {
            this.props.resetTodo(itemName)

        } else {
            this.props.markTodoAsDone(itemName)
        }
    }

    renderItems = items => {
        return items.map((item, i) => (
            <li key={`${item}--${i}`} className="list-group-item d-flex justify-content-between align-items-center">
                <span>{!item.done ? item.name : <del className="text-muted">{item.name}</del>}</span>
                <div className="d-flex justify-content-center align-items-center">
                    <button onClick={() => this.toggleDone(item.name, item.done)}
                        className={`btn btn-link edit-item ${item.done ? 'text-warning' : 'text-success'}`} >
                        <i className={`fas fa-${item.done ? 'times' : 'check'}`}></i>
                    </button>
                    <button onClick={() => this.props.deleteTodo(item.name)}
                        className="btn btn-link text-danger edit-item">
                        <i className="fas fa-trash"></i>
                    </button>
                </div>
            </li >
        ))
    }

    render() {
        return (
            <ul className="list-group drop-shadow">
                {this.renderItems(this.props.todos)}
            </ul>
        )
    }
}

const mapStateToProps = state => ({
    todos: state.todos
})

const mapDispatchToProps = dispatch => bindActionCreators({
    deleteTodo, markTodoAsDone, resetTodo
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)