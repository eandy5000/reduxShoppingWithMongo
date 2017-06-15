import {createStore} from 'redux'

// step 3 define reducer
const reducer = function (state = 0, action) {
    switch (action.type) {
        case 'INC':
        return state + action.payload;
        case 'DEC':
        return state--
    }
    return state
}

// step 1 Create Store
const store = createStore(reducer)

// look at store state
store.subscribe(function () {
    console.log(`Store state: ${store.getState()}`)
})

// step 2 create and dispatch actions

store.dispatch({type: 'INC', payload: 1})
store.dispatch({type: 'INC', payload: 1})
store.dispatch({type: 'DEC', payload: 1})
