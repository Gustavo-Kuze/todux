import React, { Component } from 'react'

export default class TodoList extends Component {
    render() {
        return (
            <ul className="list-group drop-shadow">
                <li className="list-group-item d-flex justify-content-between align-items-center">
                    Cras justo odio
                    <div className="d-flex justify-content-center align-items-center">
                        <button className="btn btn-link text-warning"><i className="fas fa-pen"></i></button>
                        <button className="btn btn-link text-danger"><i className="fas fa-trash"></i></button>
                        <button className="btn btn-link text-success"><i className="fas fa-check"></i></button>
                    </div>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                    Dapibus ac facilisis in
                 <span className="badge badge-primary badge-pill">2</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                    Morbi leo risus
                 <span className="badge badge-primary badge-pill">1</span>
                </li>
            </ul>
        )
    }
}
