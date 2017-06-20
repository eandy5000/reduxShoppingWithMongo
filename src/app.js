import {createStore} from 'redux'
import reducer from './reducers/index.js'
//actions
import {inc, dec} from './actions/countActions'

console.log('wrk')

function counter (state = 0, action) {
    switch(action.type) {
        case 'INC':
        return state += 1

        case 'DEC':
        return state -= 1
    }
    return state
}

const store = createStore(reducer)

store.subscribe(function () {
    console.log('store: ', store.getState().count)
})

store.dispatch(inc())
store.dispatch({type: 'INC', payload: 1})
store.dispatch({type: 'INC', payload: 1})
store.dispatch(dec())


