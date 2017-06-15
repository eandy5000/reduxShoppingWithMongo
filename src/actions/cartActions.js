// Cart Actions

// passing an array with a book object or objects
export function addToCart(book) {
    return {
        type: 'ADD_TO_CART',
        payload: book
    }
}