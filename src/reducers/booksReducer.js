
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

        case 'DELETE_BOOK':
        const delArr = [...state.books]
        const delInd = delArr.findIndex(book => {
            return book._id === action.payload._id
        })
        return {
            books: [
                ...state.books.slice(0, delInd),
                ...state.books.slice(delInd + 1)
            ],
            error: ''
        }

        case 'DELETE_BOOK_ERROR':
        return {
            books: [
                ...state.books
            ],
            error: 'error removing book'
        }

        case 'UPDATE_BOOK':
        console.log('red!!! ', action.payload)
        const upInd = state.books.findIndex(book => {
            return book._id === action.payload._id
        })
        return {
            books: [
                ...state.books.slice(0, upInd),
                action.payload,
                ...state.books.slice(upInd + 1)
            ],
            error: ''
        }

        case 'UPDATE_BOOK_ERROR':
        return {
            books: [...state.books],
            error: 'error updating book'
        }
        
        default:
        return state
    }
}