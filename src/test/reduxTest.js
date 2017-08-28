import store from '../store'

store.subscribe(function() {
    console.log('current state ', store.getState().books)
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

store.dispatch({
    type: 'DELETE',
    id: '4'
})

store.dispatch({
    type: 'UPDATE_NAME',
    payload: {
        id: '1',
        name: 'Changed'
    }
})
