import {createStore} from 'redux'


// step 3 define reducer
const reducer = function (state = {books: []}, action) {

    switch (action.type) {
        case 'POST_BOOK':
        let books = state.books.concat(action.payload)
        return {books}
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



