const defaultState = {
    colorSelected : 'gray',
    guessCount : 0,
    row : 0,
    answer : []
}

function updateObject(oldObject, newValues) {
    // Encapsulate the idea of passing a new object as the first parameter
    // to Object.assign to ensure we correctly copy data instead of mutating
    return Object.assign({}, oldObject, newValues);
}

export default function (state = defaultState, action) {
    console.log(state)
    switch (action.type) {
        case 'COLOR_SELECTED':
            return updateObject(state, { colorSelected: action.payload});
        case 'GUESS_COUNT':
            return updateObject(state, { guessCount: action.payload});
        case 'SUBMIT_ROW':
            return updateObject(state, { row: action.payload.row});
        case 'CREATE_ANSWER':
            return updateObject(state, {answer: action.payload});
        default : return state
    }

    
}