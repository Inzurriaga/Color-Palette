import { initialProjects } from "../action"

export const getProjects = () => {
    return async (dispatch) => {
        try{
            const response = await fetch("http://localhost:3001/api/projects")
            const projects = await response.json()
            dispatch(initialProjects(projects))
        }catch(error){

        }
    }
}