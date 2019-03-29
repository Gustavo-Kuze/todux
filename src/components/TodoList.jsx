import React, { Component } from 'react'

export default class TodoList extends Component {

    renderItems = items => items.map((item, i) => (
        <li key={`${item}--${i}`} className="list-group-item d-flex justify-content-between align-items-center">
            {item}
            <div className="d-flex justify-content-center align-items-center">
                <button className="btn btn-link text-warning edit-item"><i className="fas fa-pen"></i></button>
                <button className="btn btn-link text-success edit-item"><i className="fas fa-check"></i></button>
                <button onClick={() => this.props.delete(item)} className="btn btn-link text-danger edit-item"><i className="fas fa-trash"></i></button>
            </div>
        </li>
    ))

    render() {
        return (
            <ul className="list-group drop-shadow">
                {this.renderItems(this.props.todos)}
            </ul>
        )
    }
}

