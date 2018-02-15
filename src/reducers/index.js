import {combineReducers} from 'redux';
import ColorsReducer from './reducer_colors.js';
import GameReducer from './reducer_game.js';

const rootReducer = combineReducers({
    colors:ColorsReducer,
    game: GameReducer
})

export default rootReducer;