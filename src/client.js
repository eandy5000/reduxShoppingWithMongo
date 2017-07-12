import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import Axios from 'axios'

import {inc, dec} from './actions/countActions'

import reducer from './reducers'

const middleWare = applyMiddleware(thunk)

const store = createStore(reducer, middleWare)

store.subscribe(() => {
    console.log('store: '+ store.getState().count.count)
    console.dir(store.getState().books.books)    
})

store.dispatch(dec())
store.dispatch(inc())
store.dispatch(inc())
store.dispatch(inc())
store.dispatch(dec())
store.dispatch(inc())

function bar() {
    return Axios.get('/books')
                .then(res => {
                    store.dispatch({type: 'GET_BOOKS', payload: res.data})
                })
                .catch(err => console.log(err))
}
bar()



function foo() {
    return Axios.post('/books', {title: 'Think I fixed it', price: 1.99})
                .then(res => {
                    store.dispatch({type:'ADD_BOOK', payload: [res.data]})
                })
                .catch(err => console.log(err))
}
foo()
