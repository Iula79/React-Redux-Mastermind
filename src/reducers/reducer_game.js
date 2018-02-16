const defaultState = {
    colorSelected: null,
    answer: [],
    board: [[null, null, null, null]],
    pegBoard: [],
    won: false
}

function updateObject(oldObject, newValues) {
    return Object.assign({}, oldObject, newValues);
}

function compareGuessToAnswer(guess, answer) {

    let exactCount = 0
    let nearCount = 0
    if (!guess.includes(null)) {
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
    }
    return { exactCount, nearCount }
}

function renderPegs(obj) {
    var ecount = obj.exactCount
    var ncount = obj.nearCount
    let pegArray = []

    for (var i = 0; i < ecount; i++) {
        pegArray[i] = "red";
    }
    for (var j = ecount; j < ecount + ncount; j++) {
        pegArray[j] = "white"
    }
    while(pegArray.length<4){
        pegArray.push('black')
    }
    return pegArray
}

function checkWin(obj) {
    return obj.exactCount === 4
}




export default function (state = defaultState, action) {

    switch (action.type) {
        case 'COLOR_SELECTED':
            return updateObject(state, { colorSelected: action.payload });
        case 'GUESS_COUNT':
            return updateObject(state, { guessCount: action.payload });
        case 'SUBMIT_ROW':
            let boardCopy = [...state.board];
            let currentRow = boardCopy[boardCopy.length - 1]
            if (!currentRow.includes(null)) {
                let answerCopy = [...state.answer];
                let pegBoardCopy = [...state.pegBoard];
                let pegCount = compareGuessToAnswer(currentRow, answerCopy)
                let pegArray = renderPegs(pegCount);
                pegBoardCopy.push(pegArray);
                boardCopy.push([null, null, null, null]);            
                return updateObject(state, { board: boardCopy, pegBoard:pegBoardCopy, won:checkWin(pegCount) });
            }
            return state;
        case 'CREATE_ANSWER':
            return updateObject(state, { answer: action.payload });
        case 'CELL_SELECTED':
            let newBoard = [...state.board]
            newBoard[state.board.length - 1][action.payload.cell] = state.colorSelected
            return updateObject(state, { board: newBoard });
        default: return state
    }
}