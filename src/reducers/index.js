import {combineReducers} from 'redux'

// reducers
import {countReducer} from './countReducer'
import {booksReducer} from './booksReducer'

export default combineReducers({
    count: countReducer,
    books: booksReducer
})
