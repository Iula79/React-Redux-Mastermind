import {createAnswer} from '../actions/answer';
import {addColor} from '../actions/addcolor'

describe('---actions', () => {
    it('should create an action that creates an array of four random colors', ()=>{
        const colors = ["black","black", "black", "black", "black", "black", "black", "black", "black"]
        const answer = ["black","black", "black", "black"];
        let expectedAction = {
            type:'CREATE_ANSWER',
            payload:answer
        }
        expect(createAnswer(colors)).toEqual(expectedAction)
    })
    it('should create an action that selects a cell', ()=>{
        const cell = 1;
        let expectedAction = {
            type:'CELL_SELECTED',
            payload:{
                cell
            }
        }
        expect(addColor(cell)).toEqual(expectedAction)
    })

})