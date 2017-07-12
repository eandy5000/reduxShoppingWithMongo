
export function booksReducer(state={books:[]}, action) {
    switch(action.type) {
        case 'ADD_BOOK':
        return {books:[
            ...state.books,
            action.payload
        ]}
    }
    return state
}