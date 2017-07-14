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