// books reducer
const startingBooks = [
    {
        id: '1',
        name: 'test',
        price: 11
    },
    {
        id: '2',
        name: 'Stuff',
        price: 11
    },
    {
        id: '3',
        name: 'Nonsense',
        price: 11
    }
]

export function booksReducer(state={books: [] }, action) {
    switch(action.type){
        
        //action. payload takes an array
        case 'FETCH':
        return {books: [
            ...state.books,
            ...startingBooks
        ]}

        //takes a single book object as action.payload
        case 'POST':
        return {books: [
            ...state.books,
            action.payload
        ]}

        case 'DELETE':
        const id = action.id
        const arr = [...state.books]
        const delInd = arr.findIndex((book) => book.id === id)

        return {books: [
            ...arr.slice(0, delInd),
            ...arr.slice(delInd + 1)
        ]}

        case 'UPDATE_NAME':
        const upId = action.payload.id
        const upArr = [...state.books]
        const upInd = upArr.findIndex(book => upId === book.id)
        console.log(upArr[upInd])

        return {books: [
            ...upArr.slice(0, upInd),
            {
                ...upArr[upInd],
                name: action.payload.name
            },
            ...upArr.slice(upInd + 1)
        ]}

        default:
        return {books: state.books}
    }
}