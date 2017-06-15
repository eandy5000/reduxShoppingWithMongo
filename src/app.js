import {createStore} from 'redux'


// step 3 define reducer
const reducer = function (state = {books: []}, action) {

    switch (action.type) {
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

        case 'UPDATE_BOOK':
        const updatedBooks = [...state.books]
        const updatedIndex = updatedBooks.findIndex((book) => {
            return book.id === action.payload.id
        })
        // const updateBook = updatedBooks[updatedIndex]
        // updateBook.title = action.payload.title
        // Doing the same thing with the spread operator
        const updateBook = {
            ...updatedBooks[updatedIndex],
            title: action.payload.title
        }

        console.log('changed title', updateBook)
        return {
            books: [
                ...updatedBooks.slice(0, updatedIndex),
                updateBook,
                ...updatedBooks.slice(updatedIndex + 1)
            ]
        }
    }
    return state
}

// step 1 Create Store
const store = createStore(reducer)

// look at store state
store.subscribe(function () {
    console.log('Store state:', store.getState())
})

// step 2 create and dispatch actions

store.dispatch({type: 'POST_BOOK', payload: [{
    id: 1,
    title: 'A Test',
    price: 33.33
}]})

store.dispatch({type: 'POST_BOOK', payload: [{
    id: 2,
    title: 'Another Test',
    price: 33.33
}]})

store.dispatch({type: 'POST_BOOK', payload: [{
    id: 3,
    title: 'Final Test',
    price: 33.33
}]})

store.dispatch({
    type: 'DELETE_BOOK',
    payload: {id: 2}
})

store.dispatch({
    type: 'UPDATE_BOOK',
    payload: {
        id: 3,
        title: 'Changing the Test'
    }
})



