import store from '../store'

import {addCount, subCount, resetCount} from '../actions/countActions'
import {fetcher, poster, deleter} from '../actions/booksActions'

store.subscribe(function() {
    console.log('current state ', store.getState().books)
})

// store.dispatch({
//     type: 'FETCH'
// })

// store.dispatch({
//     type: 'POST',
    // payload:             {
    //     id: '4',
    //     name: 'test',
    //     price: 11,
    //     bad: "do bad thing"
    // }
// })

// store.dispatch({
//     type: 'DELETE',
//     payload: {
//         id: '1'
//     }
// })

// store.dispatch({
//     type: 'UPDATE_NAME',
//     payload: {
//         id: '3',
//         name: 'Changed',
//         price: 7,
//         secure: false,
//         new_id: '1234'
//     }
// })

// store.dispatch({
//     type: 'READ',
//     payload: {
//         id: '3'
//     }
// })

spatch(fetcher)
spatch(poster, {
    id: '4',
    name: 'test',
    price: 11,
    bad: "do bad thing"
})
spatch(deleter, {id: '1'})




function spatch(...args) {
    let fn = args[0]
    let payload = args[1]

    if(args.length > 1) {
        return store.dispatch(fn(payload)) 
    }

    return store.dispatch(fn())

}

