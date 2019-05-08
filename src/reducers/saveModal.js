export const toggleSaveModal = (state=false, action) => {
    switch(action.type){
        case "TOGGLE_SAVE":
            return !state
        default:
            return state;
    }
}