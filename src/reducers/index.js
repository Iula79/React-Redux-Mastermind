import {combineReducers} from 'redux';
import ColorsReducer from './reducer_colors.js'

const rootReducer = combineReducers({
    colors:ColorsReducer
})

export default rootReducer;