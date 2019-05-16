export const projects = (state=[], action) => {
    switch(action.type){
        case "INITIAL_PROJECTS":
            return action.projects;
        case "ADD_PROJECT":
            const addProjects = [...state, action.project]
            return addProjects;
        case "DELETE_PROJECT":
            const deleteProjects = state.filter(project => {
                return project.id !== action.id
            })
            return deleteProjects
        default:
            return state;
    }
}