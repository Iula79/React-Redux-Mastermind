import {defaultState, gameReducer} from '../reducers/reducer_game';


describe('---reducers', () => {
    it('should return the inital state if state is not defined ', ()=>{
        expect(gameReducer(undefined, {})).toEqual(defaultState);
    });
})