export function addColor(cell) {  
    
    return {
        type: 'CELL_SELECTED',
        payload: {
            cell
        }
    }
}