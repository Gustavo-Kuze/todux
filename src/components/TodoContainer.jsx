import React from 'react'
import TodoList from './TodoList'
import TodoInput from './TodoInput'

export default () => {
    return (
        <div className="container mb-5">
            <div className="row">
                <div className="col-8 offset-2">
                    <TodoInput />
                    <TodoList />
                </div>
            </div>
        </div>
    )
}
