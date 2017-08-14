import store from '../store'

store.subscribe(function() {
    console.log('current state ', store.getState())
})

store.dispatch({type: 'ADD'})
store.dispatch({type: 'ADD'})
store.dispatch({type: 'ADD'})
store.dispatch({type: 'SUB'})
store.dispatch({type: 'SUB'})
store.dispatch({type: 'ADD'})
store.dispatch({type: 'ADD'})
store.dispatch({type: 'ADD'})
store.dispatch({type: 'RESET'})