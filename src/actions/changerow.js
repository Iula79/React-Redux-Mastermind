export function changeRow(row) {
    row ++
    return {
        type: 'CURRENT_ROW',
        payload: row
    }
}