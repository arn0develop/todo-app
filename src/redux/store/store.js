import {combineReducers} from 'redux'
import todoReducer from "../todolist/todo-reducer"

export default combineReducers({
    listProd:todoReducer
})