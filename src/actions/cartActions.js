
export function cartItemAdder(payload) {
    return {
        type: 'ADD_TO_CART',
        payload
    }
}

export function cartItemDeleter(payload) {
    return {
        type: 'DELETE_FROM_CART',
        payload
    }
}