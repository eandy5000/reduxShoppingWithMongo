export function cartReducer (state = {cart: []}, action) {
    switch(action.type) {
        case 'ADD_ITEM':
        return {cart:[...state.cart, action.payload]}

        case 'DELETE_ITEM':
        console.log('in reducer', action.payload)

        default:
        return state
    }
}