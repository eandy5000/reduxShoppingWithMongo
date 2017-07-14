export function countReducer(state={count: 0}, action) {
    
    switch(action.type) {
        case 'INC':
        return {count: state.count + 1}

        case 'DEC':
        return {count: state.count -1}

        case 'RESET':
        return {count: 0}

        default:
        return {count: state.count}
    }
}