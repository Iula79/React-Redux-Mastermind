export function selectColor(color){
    console.log(color)
    return {
        type:'COLOR_SELECTED',
        payload: color
    }
}