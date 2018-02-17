const defaultState = {
    colors:["#40e0d0",
    "#654321",
    "#800080",
    "#ffa500",
    "#0000ff",
    "#ff0000",
    "#008000",
    "#ffff00"],
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

    let exactCount = 0;
    let nearCount = 0;
   
    if (!guess.includes(null)) {
        for (let i = 0; i < guess.length; i++) {
            if (guess[i] === answer[i]) {
                exactCount++
                guess[i] = NaN;
                answer[i] = NaN;
            }
        }
        for (let l = 0; l < guess.length; l++) {
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
    let ecount = obj.exactCount
    let ncount = obj.nearCount
    let pegArray = []

    for (let i = 0; i < ecount; i++) {
        pegArray[i] = "red";
    }
    for (let j = ecount; j < ecount + ncount; j++) {
        pegArray[j] = "white"
    }
    while (pegArray.length < 4) {
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
        case 'SUBMIT_ROW':
            let boardCopy = [...state.board];
            let currentRow = boardCopy[boardCopy.length - 1].slice()
            if (!currentRow.includes(null)) {
                let answerCopy = [...state.answer];
                let pegBoardCopy = [...state.pegBoard];
                let pegCount = compareGuessToAnswer(currentRow, answerCopy)
                let pegArray = renderPegs(pegCount);
                pegBoardCopy.push(pegArray);
                boardCopy.push([null, null, null, null]);
                return updateObject(state, { board: boardCopy, pegBoard: pegBoardCopy, won: checkWin(pegCount) });
            }
            return state;
        case 'CREATE_ANSWER':
            return updateObject(state, { answer: action.payload });
        case 'CELL_SELECTED':
            let newBoard = [...state.board]
            newBoard[state.board.length - 1][action.payload.cell] = state.colorSelected
            return updateObject(state, { board: newBoard });
        case 'RESET_GAME':
            return updateObject(state, {
                colors:["#40e0d0",
                "#654321",
                "#800080",
                "#ffa500",
                "#0000ff",
                "#ff0000",
                "#008000",
                "#ffff00"],
                colorSelected: null,
                board: [[null, null, null, null]],
                pegBoard: [],
                won: false
            })

        default: return state
    }
}