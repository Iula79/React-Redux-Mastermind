import {combineReducers} from 'redux';
import ColorsReducer from './reducer_colors.js';
import GameReducer from './reducer_game.js';
// import CurrentColorReducer from './reducer_current_color.js'
// import AnswerReducer from './reducer_answer.js';
// import CurrentRowReducer from './reducer_current_row.js';
// import GuessCountReducer from './reducer_guess_count.js';
// import SubmitRowReducer from './reducer_submit_row'

const rootReducer = combineReducers({
    colors:ColorsReducer,
    game: GameReducer,
    // currentColor:CurrentColorReducer,
    // answer:AnswerReducer,
    // currentRow:CurrentRowReducer,
    // guessCount:GuessCountReducer,
    // row:SubmitRowReducer

})

export default rootReducer;