// count reducer

export function countReducer(state = {count: 0}, action) {
    switch(action.type) {

        case 'ADD':
        return {count: state.count + 1}

        case 'SUB':
        return {count: state.count - 1}

        case 'RESET':
        return {count: 0 }

        default:
        return {count: state.count}
    }
}