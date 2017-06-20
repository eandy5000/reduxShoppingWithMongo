import {combineReducers} from 'redux'
import {counterReducer} from './countReducer.js'
import {booksReducer} from './booksReducer.js'

export default combineReducers({
    count: counterReducer,
    books: booksReducer
})