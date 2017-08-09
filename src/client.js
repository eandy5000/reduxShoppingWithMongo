import {createStore} from 'redux'

const reducer = function (state={count: 0}, action) {
    switch(action.type) {
        default:
        return {count: state.count}
    }
}


const store = createStore(reducer)

store.subscribe(function() {
    console.log(store.getState())
})

store.dispatch({type: 'test'})

import './reduxTest.js'
