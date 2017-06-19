// Books Actions

// Get Books, no payload
export function getBooks() {
    return {
        type: 'GET_BOOKS'
    }
}

// to concat our book to books we are passing an object in an array to our functions
export function postBook(book) {
    return {
        type: 'POST_BOOK',
        payload: book
    }
}

// passes the function an object with an id to delete
export function deleteBook(book) {
    return {
        type: 'DELETE_BOOK',
        payload: book
    }
}

// takes an object with an id and the changed title

export function updateTitle (obj) {
    return {
        type: 'UPDATE_TITLE',
        payload: obj
    }
}