import store from '../store'

import {addCount, subCount, resetCount} from '../actions/countActions'
import {fetcher, poster, deleter} from '../actions/booksActions'
import {cartItemAdder, cartItemDeleter} from '../actions/cartActions'

// store.subscribe(function() {
//     console.log('current state ', store.getState().cart)
// })

spatch(fetcher)
spatch(poster, {
    id: '4',
    name: 'test',
    price: 11,
    bad: "do bad thing"
})
spatch(deleter, {id: '1'})

spatch(cartItemAdder, {id: '1'})
spatch(cartItemAdder, {id: '2'})
spatch(cartItemAdder, {id: '3'})
spatch(cartItemDeleter, {id: '1'})


function spatch(...args) {
    let fn = args[0]
    let payload = args[1]

    if(args.length > 1) {
        return store.dispatch(fn(payload)) 
    }

    return store.dispatch(fn())

}

