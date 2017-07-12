import Axios from 'axios'
// books actions

export function getBooks () {
    return {
        type: 'GET_BOOKS'
    }
}

export function addBook (payload) {
    return function(dispatch) {
        Axios.post('/books', payload)
             .then(function(response){
                 dispatch({type: 'ADD_BOOK', payload: response.data})
             })
             .catch(function(err){
                dispatch({type: 'ADD_REJECTED', payload: 'Error adding Book'})
             })
    }
    // return {
    //     type: 'ADD_BOOK',
    //     payload
    // }
}

export function deleteBook (payload) {
    return {
        type: 'DELETE_BOOK',
        payload
    }
}

export function updateTitle (payload) {
    return {
        type: 'UPDATE_TITLE',
        payload
    }
}