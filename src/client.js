import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import axios from 'axios'

const middleware = applyMiddleware(thunk)
import reducer from './reducers'
const store = createStore(reducer, middleware)

// actions
import {inc, dec, reset} from './actions/countActions'
import {getBooks, addBook} from './actions/booksActions'

store.subscribe(() => {
    console.log('state books: ',store.getState().books.books)
})


getBooks(store)
// addBook(store, {title: 'action added title', price: 11})

setTimeout(() => {
    console.log(store.getState())
}, 3000)