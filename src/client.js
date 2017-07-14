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

function getEm() {
    return Axios.get('/books')
                .then(res => {
                    store.dispatch({type: 'GET_BOOKS', payload: res.data})
                })
                .catch(err => console.log(err))
}
getEm()

function delOne(_id) {
    Axios.delete(('/books/' + _id))
         .then(response => {
             // payload needs id and res
             store.dispatch({type: 'DELETE_BOOK', payload:{_id}})
             console.log(response)
         })
         .catch(err => console.log('delOne Error',err))
}

// delOne('5966b0109302cd2711bbb245')

setTimeout(() =>{
    console.dir(store.getState())
}, 3000)




function foo() {
    return Axios.post('/books', {title: 'Think I fixed it', price: 1.99})
                .then(res => {
                    store.dispatch({type:'ADD_BOOK', payload: [res.data]})
                })
                .catch(err => console.log(err))
}
foo()
