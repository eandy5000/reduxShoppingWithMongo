const startingBooks = [
    {
        title: 'Sandman',
        _id: Math.floor(Math.random() * 100000),
        price: 34
    },
    {
        title: 'Treasure Island',
        _id: Math.floor(Math.random() * 100000),
        price: 5.99
    },
    {
        title: 'Shipwrecked!',
        _id: Math.floor(Math.random() * 100000),
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
                            .findIndex(book => book._id === action.payload._id.toString())
        return {books: [
            ...delArr.slice(0, delInd),
            ...delArr.slice(delInd + 1)
        ]}

        case 'UPDATE_TITLE':
        const upArr = [...state.books]
        const upInd = upArr.findIndex( book => {
            return book._id === action.payload._id
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