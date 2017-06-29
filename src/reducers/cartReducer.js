export function cartReducer (state = {cart: []}, action) {
    switch(action.type) {
        case 'ADD_ITEM':
        return {cart:[...state.cart, action.payload]}

        case 'DELETE_ITEM':
        console.log('in reducer', action.payload)
        return {cart: [...action.payload]}

        case 'UPDATE_CART':
        const upArr = [...state.cart]
        const upIndex = upArr.findIndex(updatedItem => updatedItem._id === action._id)
        const newItem = {
            ...upArr[upIndex],
            qty: upArr[upIndex].qty + action.unit
        }
       
       return {cart: [
           ...upArr.slice(0, upIndex),
           newItem,
           ...upArr.slice(upIndex + 1)
       ]}

        default:
        return state
    }
}