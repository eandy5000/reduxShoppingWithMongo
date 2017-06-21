const startingBooks = [
    {
        title: 'Sandman',
        id: '0',
        price: 34
    },
    {
        title: 'Treasure Island',
        id: '1',
        price: 5.99
    },
    {
        title: 'Shipwrecked!',
        id: '2',
        price: 11.23
    }
]

export function booksReducer (state = {books: []}, action) {
    switch(action.type) {
        case 'GET_BOOKS':
        return {books: [...state.books, ...startingBooks]}
        
        case 'ADD_BOOK':
        return {books: [...state.books, action.payload]}

        case 'DELETE_BOOK':
        const delArr = [...state.books]
        const delInd = delArr
                            .findIndex(book => book.id === action.payload.id.toString())
        return {books: [
            ...delArr.slice(0, delInd),
            ...delArr.slice(delInd + 1)
        ]}

        case 'UPDATE_TITLE':
        const upArr = [...state.books]
        const upInd = upArr.findIndex( book => {
            return book.id === action.payload.id
        })  
        const upItem = {...upArr[upInd], title: action.payload.title}

        return {books: [
            ...upArr.slice(0, upInd),
            upItem,
            ...upArr.slice(upInd + 1)
            ]}               

        default:
        return state
    }
}