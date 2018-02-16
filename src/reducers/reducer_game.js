const defaultState = {
    colorSelected: 'gray',
    guessCount: 0,
    row: 0,
    answer: [],
    board: [[null, null, null, null]],
    won:false
}

function updateObject(oldObject, newValues) {
      return Object.assign({}, oldObject, newValues);
}

function addRowToBoard(board){
    if(!board[board.length-1].includes(null)){
        board.push([null,null,null,null])
    }
    return board
}

function compareGuessToAnswer(guess, answer){
    let exactCount = 0
    let nearCount = 0
    for (var i = 0; i < guess.length; i++) {
        if (guess[i] === answer[i]) {
            exactCount++
            guess[i] = NaN;
            answer[i] = NaN;
        }
    }
    for (var l = 0; l < guess.length; l++) {
        for (var j = 0; j < guess.length; j++) {
            if (guess[l] === answer[j]) {
                nearCount++
                guess[l] = NaN;
                answer[j] = NaN;
            }
        }
    }
    return {exactCount, nearCount}
}

function renderPegs(ecount, ncount){
   
        let pegArray = []

        for(var i=0; i<ecount; i++){
            pegArray[i]="red";
        }
        for(var j=ecount;j<ecount+ncount;j++ ){
            pegArray[j]="white"
        }
        return pegArray
 }        




export default function (state = defaultState, action) {

    switch (action.type) {
        case 'COLOR_SELECTED':
            return updateObject(state, { colorSelected: action.payload });
        case 'GUESS_COUNT':
            return updateObject(state, { guessCount: action.payload });
        case 'SUBMIT_ROW':
            let myBoard = state.board.slice()
            let currentRow = state.board[state.board.length-1].slice()
            let answer = state.answer.slice()
            let pegCount = compareGuessToAnswer(answer, currentRow)
            console.log(pegCount)
            return updateObject(state, {board: addRowToBoard(myBoard)});
        case 'CREATE_ANSWER':
            return updateObject(state, { answer: action.payload });
        case 'CELL_SELECTED':
            let newBoard = state.board
            newBoard[state.board.length-1][action.payload.cell] = state.colorSelected
            return updateObject(state, { board: newBoard });
        default: return state
    }
}