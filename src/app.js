import {createStore} from 'redux'

function reducer (state=0, action) {
    switch(action.type) {
        default:
        return state
    }
}

const store = createStore(reducer)

store.subscribe(() => {
    console.log('Store: ', store.getState())
})

store.dispatch({
    type: 'TEST'
})