export const emptyCell = '#371c0e';
export const defaultState = {
    colors: ["#40e0d0",
        "#654321",
        "#800080",
        "#ffa500",
        "#0000ff",
        "#ff0000",
        "#008000",
        "#ffff00"],
    colorSelected: null,
    currentRowIndex:0,
    answer: [],
    board: [
        [emptyCell, emptyCell, emptyCell, emptyCell],
        [emptyCell, emptyCell, emptyCell, emptyCell],
        [emptyCell, emptyCell, emptyCell, emptyCell],
        [emptyCell, emptyCell, emptyCell, emptyCell],
        [emptyCell, emptyCell, emptyCell, emptyCell],
        [emptyCell, emptyCell, emptyCell, emptyCell],
        [emptyCell, emptyCell, emptyCell, emptyCell],
        [emptyCell, emptyCell, emptyCell, emptyCell],
        [emptyCell, emptyCell, emptyCell, emptyCell],
        [emptyCell, emptyCell, emptyCell, emptyCell]
    ],
    pegBoard: [],
    won: false
}