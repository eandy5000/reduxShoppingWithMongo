import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import Axios from 'axios'

import {inc, dec} from './actions/countActions'

import reducer from './reducers'

const middleWare = applyMiddleware(thunk)

const store = createStore(reducer, middleWare)

store.subscribe(() => {
    console.log('store: '+store.getState().count.count)
    console.log('books: '+store.getState().books.books.length)    
})

store.dispatch(dec())
store.dispatch(inc())
store.dispatch(inc())
store.dispatch(inc())
store.dispatch(dec())
store.dispatch(inc())

function foo() {
    return Axios.post('/books', {title: 'test', price: 1.99})
                .then(res => {
                    store.dispatch({type:'ADD_BOOK', payload: res.data})
                })
                .catch(err => console.log(err))
}
foo()
