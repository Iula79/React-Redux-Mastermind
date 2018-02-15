export default function (state = null, action) {
    console.log(state)
    switch (action.type) {
        case 'COLOR_SELECTED':
            return action.payload;
        case 'GUESS_COUNT':
            return action.payload;
        case 'SUBMIT_ROW':
            return action.payload;
        case 'CREATE_ANSWER':
            return action.payload;
    }

    return state
}