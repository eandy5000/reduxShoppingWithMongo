// books actions

export function getBooks () {
    return {
        type: 'GET_BOOKS'
    }
}

export function addBook (payload) {
    return {
        type: 'ADD_BOOK',
        payload
    }
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