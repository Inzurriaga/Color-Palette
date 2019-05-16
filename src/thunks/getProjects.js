import { initialProjects } from "../action"

export const getProjects = () => {
    return async (dispatch) => {
        try{
            const response = await fetch(process.env.REACT_APP_BACKEND_URL + "/api/projects")
            if(!response.ok) {
                throw Error(response.statusText)
              }
            const projects = await response.json()
            dispatch(initialProjects(projects))
        }catch(error){

        }
    }
}