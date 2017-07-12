import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

const reducer = function(state=0, action) {
    switch(action.type) {
        case 'INC':
        return state = state + 1

        case 'DEC':
        return state = state - 1

    }
    return state
}

const middleWare = applyMiddleware(thunk)

const store = createStore(reducer, middleWare)

store.subscribe(() => console.log('state: '+ store.getState()))

store.dispatch({type: 'TEST'})
store.dispatch({type: 'INC'})
store.dispatch({type: 'INC'})
store.dispatch({type: 'INC'})
store.dispatch({type: 'DEC'})
store.dispatch({type: 'INC'})
