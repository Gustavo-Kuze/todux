import React from 'react'

const TodoInput = () => {
    return (
        <div className="container mb-5">
            <div className="row">
                <div className="col-10">
                    <input className="form-control mb-3" type="text" />
                </div>
                <div className="col-2">
                    <button className="btn btn-primary text-light"><i className="fas fa-plus"></i></button>
                </div>
            </div>
        </div>
    )
}

export default TodoInput
