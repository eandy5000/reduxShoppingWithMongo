//helper functions

export function toDollars (num) {
    return `$${num.toFixed(2)}`
}

export function randomId () {
    return Math.floor(Math.random() * 100000)
}