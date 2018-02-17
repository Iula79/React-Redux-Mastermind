import {combineReducers} from 'redux';
import GameReducer from './reducer_game.js';

const rootReducer = combineReducers({
    game: GameReducer
})

export default rootReducer;