import {createStore} from 'redux'
import reducer from './reducers'

// actions
import {inc, dec, zero} from './actions/countActions'
import {getBooks, addBook, deleteBook, updateTitle} from './actions/booksActions'

const store = createStore(reducer)

store.subscribe(() => {
    console.log('Store: ', store.getState())
})

store.dispatch({
    type: 'GET_BOOKS'
})

