
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
        
        default:
        return state
    }
}