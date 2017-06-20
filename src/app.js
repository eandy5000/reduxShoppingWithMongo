import React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducer from './reducers/index.js'
//actions
import {inc, dec} from './actions/countActions'
import {getBooks, addBook, updateTitle, deleteBook} from './actions/booksActions'

const store = createStore(reducer)

// dom and components
const root = document.querySelector('#app')
import BookList from './components/BookList'

store.subscribe(function () {
    console.log('store: ', store.getState().books)
})

store.dispatch(getBooks())

ReactDOM.render(
    <Provider store={store}>
        <BookList />
    </Provider>
    ,
    root
)



