import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

const middleware = applyMiddleware(thunk)
import reducer from './reducers'
const store = createStore(reducer, middleware)

// actions
import {inc, dec, reset} from './actions/countActions'
import {getBooks} from './actions/booksActions'

store.subscribe(() => {
    console.log('state books: ',store.getState().books.books)
})


getBooks(store)

setTimeout(() => {
    console.log(store.getState())
}, 3000)