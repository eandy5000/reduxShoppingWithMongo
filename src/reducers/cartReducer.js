export function cartReducer (state = {cart: []}, action) {
    switch(action.type) {
        case 'ADD_ITEM':
        return {cart:[...state.cart, action.payload],
                total: totals(action.payload)
                }

        case 'DELETE_ITEM':
        console.log('in reducer', action.payload)
        return {cart: [...action.payload],
                total: totals(action.payload)
                }

        case 'UPDATE_CART':
        const upArr = [...state.cart]
        const upIndex = upArr.findIndex(updatedItem => updatedItem._id === action._id)
        const newItem = {
            ...upArr[upIndex],
            qty: upArr[upIndex].qty + action.unit
        }
        const newArr = [
           ...upArr.slice(0, upIndex),
           newItem,
           ...upArr.slice(upIndex + 1)
        ]
       
       return {cart: newArr,
       total: totals(newArr)
    
    }

        default:
        return state
    }
}

// Calculate totals

export function totals (payloadArr) {
    const totalAmt = payloadArr.map(cartItem => {
        return cartItem.price * cartItem.qty
    }).reduce((a, b) => {
        return a + b
    }, 0)

    return {amout: totalAmt}
}