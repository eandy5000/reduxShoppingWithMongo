
export function booksReducer(state = {books: []}, action) {
    switch(action.type) {
        case 'GET_BOOKS':
        return {
            books: [...action.payload],
            error: ''
        }

        case 'GET_BOOKS_ERROR':
        return {
            books: [...state.books],
            error: 'error getting books'
        }

        case 'ADD_BOOK':
        console.log('red pay ',action.payload)
        return {
            books: [
                ...state.books,
                ...action.payload
            ],
            error: ''
        }

        case 'ADD_BOOK_ERROR':
        return {
            books: [
                ...state.books
            ],
            error: 'error adding book'
        }
        
        default:
        return state
    }
}