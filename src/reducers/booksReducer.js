
export function booksReducer(state={books:[]}, action) {
    switch(action.type) {
        case 'ADD_BOOK':
        return {books:[
            ...state.books,
            ...action.payload
        ]}

        case 'GET_BOOKS':
        return {books: [
            ...state.books,
            ...action.payload
        ]}

        case 'DELETE_BOOK':
        // action.payload._id is _id
        const delArr = [...state.books]
        const delIndex = delArr.findIndex(book => {
            return book._id === action.payload._id
        })

        if(delIndex === -1) {
            return {books: delArr}
        }
        return {
            books:[
                ...delArr.slice(0, delIndex),
                ...delArr.slice(delIndex + 1)
            ]
        }

        case 'UPDATE_BOOK':
        const upArr = [...state.books]
        const upIndex = upArr.findIndex(book => {
            return book._id === action.payload._id
        })
        const updatedParts = {
            title: action.payload.title,
            price: action.payload.price
        }

        const upItem = Object.assign({}, upArr[upIndex], updatedParts)

        console.log('up item ', upItem)
        return {books: [
            ...upArr.slice(0, upIndex),
            upItem,
            ...upArr.slice(upIndex + 1)
        ]}

        default:
        return state

    }

}