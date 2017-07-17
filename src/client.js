import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import axios from 'axios'

const middleware = applyMiddleware(thunk)
import reducer from './reducers'
const store = createStore(reducer, middleware)

// actions
import {inc, dec, reset} from './actions/countActions'
import {getBooks, addBook, deleteBook, updateBook} from './actions/booksActions'

store.subscribe(() => {
    console.log('state books: ',store.getState().books.books)
})



// addBook(store, {title: 'uno', price:3})
getBooks(store)



updateBook(store, '596bfb0b8497598921edd5a1', {title: 'ocho', price: 3})


setTimeout(() => {
    console.log(store.getState())
}, 4000)