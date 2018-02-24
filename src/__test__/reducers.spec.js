import { gameReducer} from '../reducers/reducer_game';
import {defaultState} from '../defaultState'

describe('---reducers', () => {
    it('should return the inital state if state is not defined ', ()=>{
        expect(gameReducer(undefined, {})).toEqual(defaultState());
    });
})