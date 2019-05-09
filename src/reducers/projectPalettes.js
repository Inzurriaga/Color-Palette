export const projectPalettes = (state=[], action) => {
    switch(action.type){
        case "INITIAL_PALETTE":
            return action.palettes;
        case "ADD_PALETTE":
            const updatedPalette = [...state, action.palette]
            return updatedPalette
        default: 
            return state;
    }
}