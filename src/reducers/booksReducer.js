const booksStart = [
    {
        id: 1,
        title: 'Of Mice and Men',
        price: 11
    },
    {
        id: 2,
        title: 'Icebreaker',
        price: 12.34
    },
    {
        id: 3,
        title: 'sdfgsdfg dsfasd',
        price: 9.99
    }
]

export function booksReducer (state = {books: []}, action) {
    switch(action.type) {
        case 'GET_BOOKS':
        return {books: [...state.books, ...booksStart]}

        case 'ADD_BOOK':
        return {books: [...state.books, action.payload]}

        case 'DELETE_BOOK':
        const delArr = state.books
        const delInd = delArr.findIndex(function(book) {
            return book.id === action.payload.id
        })
        return {books: [...delArr.slice(0, delInd), ...delArr.slice(delInd + 1)]}

        case 'UPDATE_TITLE':
        const updateArr = state.books
        const updateInd = updateArr.findIndex(function(book) {
            return book.id === action.payload.id
        })
        const updateItem = Object.assign({}, updateArr[updateInd], {title: action.payload.title})
        return {books: [...updateArr.slice(0, updateInd), updateItem, ...updateArr.slice(updateInd + 1)]}

        default:
        return state
    }
}