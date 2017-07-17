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

export function deleteBook(store, _id) {
    axios.delete(`/books/${_id}`)
        .then(res => {
            store.dispatch({
                type: 'DELETE_BOOK', 
                payload: {
                  _id,
                  response: res  
                } })
        })
        .catch(err => console.log('action err ', err))
}

// function needs store, updated item (with title and price) and _id
export function updateBook(store, _id, update) {
    axios.put(`/books/${_id}`, update)
        .then(res => {
            store.dispatch({
                type: 'UPDATE_BOOK',
                payload: res.data
            })
        })
        .catch(err => console.log(err))
}