import { combineReducers } from 'redux'
import todosReducer from './reducers/todosReducer'

const combinedReducers = combineReducers({
    todos: todosReducer
})

export default combinedReducers