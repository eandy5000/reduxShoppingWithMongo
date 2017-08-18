// books reducer

export function booksReducer(state={books: [] }, action) {
    switch(action.type){
        
        case 'POST':
        return {books: [
            ...state.books,
            action.payload
        ]}

        default:
        return {books: state.books}
    }
}