import store from '../store'

store.subscribe(function() {
    console.log('current state ', store.getState())
})

store.dispatch({type: 'test'})