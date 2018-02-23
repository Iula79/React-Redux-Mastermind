import {combineReducers} from 'redux';
import {gameReducer} from './reducer_game';
import LightBoxReducer from './reducer_lightbox';

const rootReducer = combineReducers({
    game: gameReducer,
    lightBoxOn:LightBoxReducer
})

export default rootReducer;