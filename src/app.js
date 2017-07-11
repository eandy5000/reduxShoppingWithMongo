import React from 'react'
import ReactDom from 'react-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducer from './reducers'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'

// actions
import {inc, dec, zero} from './actions/countActions'
import {getBooks, addBook, deleteBook, updateTitle} from './actions/booksActions'

// components
const app = document.querySelector('#app')
import BookList from './components/BookList'
import Cart from './components/Cart'
import BookForm from './components/BookForm'
import Main from './components/Main'

const store = createStore(reducer)

// store.subscribe(() => {
//     console.log('Store: ', store.getState())
// })

const Routes = (
    <Provider store={store}>
       <div>
        <Router history={browserHistory}>
            <Route path="/" component={Main}>
                <IndexRoute component={BookList} />
                <Route path="/cart" component={Cart} />
                <Route path="/admin" component={BookForm} />
            </Route>
        </Router>
       </div>
    </Provider>
)

ReactDom.render(
    Routes,
    app
)

