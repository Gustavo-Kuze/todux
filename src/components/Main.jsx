import React from 'react'
import TodoList from './TodoList'
import TodoInput from './TodoInput'

const Main = () => {
    return (
        <main>
            <div className="container">
                <div className="row">
                    <div className="col-8 offset-2">
                        <TodoInput />
                        <TodoList />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main
