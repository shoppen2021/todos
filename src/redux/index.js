import {combineReducers, createStore} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import {todoReducer} from "./reducers/todoReducer";

const rootReducer = combineReducers({
  todos: todoReducer
})

export const store = createStore(rootReducer, composeWithDevTools())