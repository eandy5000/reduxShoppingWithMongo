export function booksReducer (state = {books: []}, action) {

    switch (action.type) {
        case 'GET_BOOKS':
        

        case 'POST_BOOK':
        // using concat vrs spread
        // let books = state.books.concat(action.payload)
        // return {books} 
        return {books: [...state.books, ...action.payload]}
        
        case 'DELETE_BOOK':
        const bookToDelete = [...state.books]
        const indexToDelete = bookToDelete.findIndex((book) => {
            return book.id === action.payload.id
        })
        return {books: [
            ...bookToDelete.slice(0, indexToDelete),
            ...bookToDelete.slice(indexToDelete + 1)
            ]}
        
        case 'UPDATE_TITLE':
        const booksArr = [...state.books]
        const updateIndex = booksArr.findIndex((book) => book.id === action.payload.id)
        const newItem = {
            ...booksArr[updateIndex],
            title: action.payload.title
        }

        return [
            ...booksArr.slice(0, updateIndex),
            newItem,
            ...booksArr.slice(updateIndex + 1)
        ]
    }
    return state
}