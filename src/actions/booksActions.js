import axios from 'axios'
// books actions

export function getBooks(store) {
    axios.get('/books')
        .then(res => {
            return store.dispatch({
                type: 'GET_BOOKS',
                payload: res.data
            })
        })
        .catch(err => {
            return store.dispatch({type: 'GET_BOOKS_ERROR'})
        })
}

export function addBook(store, book) {
    axios.post('/books', book)
        .then(res => {
            store.dispatch({type: 'ADD_BOOK', payload: [res.data]})
        })
        .catch(err => {
            store.dispatch({type: 'ADD_BOOK_ERROR'})
        })
}