import {createStore} from 'redux'
import reducer from './reducers'

// actions
import {inc, dec, zero} from './actions/countActions'
import {getBooks, addBook, deleteBook, updateTitle} from './actions/booksActions'

const store = createStore(reducer)

store.subscribe(() => {
    console.log('Store: ', store.getState().books.books)
})

store.dispatch({
    type: 'GET_BOOKS'
})

store.dispatch(addBook({
        title: 'The Shinning',
        id: '7',
        price: 34
    }))

store.dispatch(addBook({
        title: 'asdfsad asdfasdf',
        id: '9',
        price: 34
    }))

store.dispatch(deleteBook({id: 7}))

store.dispatch(updateTitle({
        id: '9',
        title: 'Dune'
    }))