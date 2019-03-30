export const add = todo => {
    return {
        type: "ADD",
        payload: todo
    }
}

export const deleteTodo = todoName => {
    return {
        type: "DELETE",
        payload: todoName
    }
}

export const markTodoAsDone = todoName => {
    return {
        type: "MARK_AS_DONE",
        payload: { todoName, done: false }
    }
}

export const resetTodo = todoName => {
    return {
        type: "RESET",
        payload: { todoName, done: true }
    }
}