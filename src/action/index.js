export const toggleProjectDisplay  = () => ({
    type: "TOGGLE_PROJECT"
})

export const generateColorPalette = (palette) => ({
    type: "GENERATED_PALETTE",
    palette
})

export const toggleSaveModal = () => ({
    type: "TOGGLE_SAVE"
})

export const initialProjects = (projects) => ({
    type: "INITIAL_PROJECTS",
    projects
})

export const addNewProject = (project) => ({
    type: "ADD_PROJECT",
    project
})

export const initialPalette = (palettes) =>({
    type: "INITIAL_PALETTE",
    palettes
})

export const addNewPalette = (palette) => ({
    type: "ADD_PALETTE", 
    palette
})