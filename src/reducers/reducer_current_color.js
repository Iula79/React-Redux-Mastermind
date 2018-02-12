export default function(state=null,action){
    switch(action.type){
        case 'COLOR_SELECTED':
        return action.payload
    }
    
    return state
}