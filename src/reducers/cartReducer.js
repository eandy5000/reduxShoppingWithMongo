//cart reducer

export function cartReducer(state={cart: []}, action){
    switch(action.type){
        case 'ADD_TO_CART':
        return {cart: [...state.cart, action.payload]}

        case 'DELETE_FROM_CART':
        const delId = action.payload.id
        const delArr = [...state.cart]
        const delItemIndex = delArr.findIndex(item => item.id === delId)
        
        return {cart: [
            ...delArr.slice(0, delItemIndex),
            ...delArr.slice(delItemIndex + 1)
        ]}
        
        default:
        return state
    }

}

