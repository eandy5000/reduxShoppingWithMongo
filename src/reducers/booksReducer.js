export function counterReducer (state = {count: 0}, action) {
    switch(action.type) {
        case 'INC':
        return {count: state.count + action.payload}

        case 'DEC':
        return {count: state.count - action.payload}

        default: 
        return state
    }

}