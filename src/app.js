import React from 'react'
import ReactDom from 'react-dom'

import {createStore, applyMiddleware} from 'redux'
import logger from 'redux-logger'


// step 3 define reducer
import reducers from './reducers'

// step 1 Create Store adding logging middleware
const middleware = applyMiddleware(logger)
const store = createStore(reducers, middleware)
const root = document.querySelector('#app')

// Import Actions
import {addToCart} from './actions/cartActions'
import {postBook, deleteBook, updateTitle} from './actions/booksActions'

// look at store state ** replacing with middleware
// store.subscribe(function () {
//     console.log('Store state:', store.getState())
// })

// step 2 create and dispatch actions

// Components

import BooksList from './components/pages/booksList'

ReactDom.render(
    <BooksList />,
    root
)

store.dispatch(postBook([{
    id: 1,
    title: 'A Test',
    price: 33.33
}]))

store.dispatch(postBook([{
    id: 2,
    title: 'Another Test',
    price: 33.33
}]))

store.dispatch(postBook([{
    id: 3,
    title: 'Final Test',
    price: 33.33
}]))

store.dispatch(postBook([{id: 5, title: 'rugger'}]))

store.dispatch(deleteBook({id: 2}))

store.dispatch(updateTitle({
        id: 3,
        title: 'Changing the Tester'
    }))

// Cart actions
/* remember we are passing an array to addToCart so we can concat it to our state*/ 
store.dispatch(addToCart([{id: 4}]))
store.dispatch(addToCart([{id: 3}]))
store.dispatch(addToCart([{id: 3}]))
store.dispatch(addToCart([{id: 3}]))




