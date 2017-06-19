import React from 'react'
import ReactDom from 'react-dom'
import {Provider} from 'react-redux'

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

import BooksList from './components/pages/BooksList'

ReactDom.render(
    <Provider store={store}>
    <BooksList />
    </Provider>
    ,
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

store.dispatch(postBook([{id: 5, title: 'Much Later', price: 8}]))





