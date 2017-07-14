import {combineReducers} from 'redux'

// reducers
import {countReducer} from './countReducer'

export default combineReducers({
    count: countReducer
})
