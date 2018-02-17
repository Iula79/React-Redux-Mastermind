function updateObject(oldObject, newValues) {
    return Object.assign({}, oldObject, newValues);
}

export default function (state =null,action){
    switch(action.type){
        case 'TOGGLE_LIGHTBOX':
        return updateObject(state,{ lightboxOn:true});
        default: state;
    }
    
}