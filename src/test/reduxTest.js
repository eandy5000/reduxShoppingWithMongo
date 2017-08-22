import store from '../store'

store.subscribe(function() {
    console.log('current state ', store.getState())
})

store.dispatch({
    type: 'FETCH'
})

store.dispatch({
    type: 'POST',
    payload:             {
        id: '4',
        name: 'test',
        price: 11
    }
})
