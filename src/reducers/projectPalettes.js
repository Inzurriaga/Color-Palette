export const projectPalettes = (state=[], action) => {
    switch(action.type){
        case "INITIAL_PALETTE":
            return action.palettes;
        case "ADD_PALETTE":
            const addPalette = [...state, action.palette]
            return addPalette
        case "DELETE_Palette":
            const deletePalette = state.filter(palette => {
                return palette.id !== action.id
            })
            return deletePalette
        case "DELETE_PROJECT_PALETTE":
            const deleteProjectPalette = state.filter(palette => {
                return palette.projectsId !== action.projectId
            })
            return deleteProjectPalette;
        default: 
            return state;
    }
}