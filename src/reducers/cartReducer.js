export function cartReducer (state = {cart: []}, action) {
    switch(action.type) {
        case 'ADD_ITEM':
        return {cart:[...state.cart, action.payload]}

        default:
        return state
    }
}