import {combineReducers} from 'redux'

//reducers
import {countReducer} from './countReducer'
import {booksReducer} from './booksReducer'
import {cartReducer} from './cartReducer'

export default combineReducers({
    count: countReducer,
    books: booksReducer,
    cart: cartReducer
})