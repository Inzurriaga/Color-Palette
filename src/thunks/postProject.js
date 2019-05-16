import { addNewProject } from "../action"

export const postProject = (project) => {
    const method = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(project)
    }
    return async (dispatch) => {
        try{
            const response = await fetch(process.env.REACT_APP_BACKEND_URL + "/api/projects", method);
            if(!response.ok) {
                throw Error(response.statusText)
              }
            const id = await response.json();
            dispatch(addNewProject({...project, id: id.id}))
            return id
        }catch(error){
            console.log(error)
        }
    }
}