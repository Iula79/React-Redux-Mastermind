export default function (state = false, action) {
    switch (action.type) {
        
        case 'TOGGLE_LIGHTBOX':  
            let toggled = !state
            return  toggled;
        default: return state;
    }
     
}