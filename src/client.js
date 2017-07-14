import {createStore, applyMiddleware} from 'redux'

const middleware = applyMiddleware()
import reducer from './reducers'
const store = createStore(reducer, middleware)

//count actions
import {inc, dec, reset} from './actions/countActions'

store.subscribe(() => {
    console.log('store: ', store.getState().count.count)
})


store.dispatch(inc())
store.dispatch(inc())
store.dispatch(inc())
store.dispatch(inc())
store.dispatch(dec())
store.dispatch(reset())