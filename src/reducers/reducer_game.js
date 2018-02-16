const defaultState = {
    colorSelected: 'gray',
    guessCount: 0,
    row: 0,
    answer: [],
    board: [[null, null, null, null]],
    won:false
}

function updateObject(oldObject, newValues) {
    // Encapsulate the idea of passing a new object as the first parameter
    // to Object.assign to ensure we correctly copy data instead of mutating
    return Object.assign({}, oldObject, newValues);
}

function addRowToBoard(board){
    if(!board[board.length-1].includes(null)){
        board.push([null,null,null,null])
    }
    return board
}

export default function (state = defaultState, action) {

    switch (action.type) {
        case 'COLOR_SELECTED':
            return updateObject(state, { colorSelected: action.payload });
        case 'GUESS_COUNT':
            return updateObject(state, { guessCount: action.payload });
        case 'SUBMIT_ROW':
            let myBoard = state.board
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