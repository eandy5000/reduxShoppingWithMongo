import {createStore} from 'redux'
import reducer from './reducers'

// actions
import {inc, dec, zero} from './actions/countActions'

const store = createStore(reducer)

store.subscribe(() => {
    console.log('Store: ', store.getState().count)
})

store.dispatch({
    type: 'INC'
})
store.dispatch(inc())
store.dispatch(inc())
store.dispatch(dec())
store.dispatch(zero())