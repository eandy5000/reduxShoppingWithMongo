// books reducer

export function booksReducer(state={books: [] }, action) {
    switch(action.type){
        
        //action. payload takes an array
        case 'FETCH':
        return {books: [
            {
                id: '1',
                name: 'test',
                price: 11
            },
            {
                id: '2',
                name: 'test',
                price: 11
            },
            {
                id: '3',
                name: 'test',
                price: 11
            }
        ]}

        //takes a single book object as action.payload
        case 'POST':
        return {books: [
            ...state.books,
            action.payload
        ]}

        default:
        return {books: state.books}
    }
}