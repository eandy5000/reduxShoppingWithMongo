export function cartReducer (state = {cart: []}, action) {
    switch(action.type) {
        case 'ADD_ITEM':
        const itemAdded = [action.payload]
        const addCart = [
            ...state.cart,
            ...itemAdded
        ]
        
        return {cart: addCart,
                total: totals(addCart)
                }

        case 'DELETE_ITEM':
        const delCart = [...action.payload]
        return {cart: [...action.payload],
                total: totals(delCart)
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
       
       return {
           cart: newArr,
           total: totals(newArr)
    }

        default:
        return state
    }
}

// Calculate totals

export function totals (payloadArr) {

    const calcTot = payloadArr.map(item => {
        return item.price * item.qty
    }).reduce((a,b) => {
        return a + b
    }, 0)

    return calcTot
}