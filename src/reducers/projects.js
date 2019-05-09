export const projects = (state=[], action) => {
    switch(action.type){
        case "INITIAL_PROJECTS":
            return action.projects;
        case "ADD_PROJECT":
            const updatedProjects = [...state, action.project]
            return updatedProjects;
        default:
            return state;
    }
}