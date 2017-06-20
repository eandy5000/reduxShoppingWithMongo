import {combineReducers} from 'redux'
import {counterReducer} from './booksReducer.js'

export default combineReducers({
    count: counterReducer
})