export function fetcher () {
    return {
        type: 'FETCH'
    }
}

export function poster(obj) {
    return {
        type: 'POST',
        payload: obj
    }
}

export function deleter(obj) {
    return {
        type: 'DELETE',
        payload: obj
    }
}