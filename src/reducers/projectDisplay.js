export const toggleProjectDisplay = (state = false, action) => {
    switch(action.type){
        case "TOGGLE_PROJECT": 
            return !state;
        default: 
            return state;
    }
}

