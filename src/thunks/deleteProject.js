import { deleteProjectInState, deleteProjectPalettes } from "../action"

export const deleteProject = (id) => {
    const method = {
        method: "DELETE",
    }
    return async (dispatch) => {
        try{
            const response = await fetch(`http://localhost:3001/api/projects/${id}`, method)
            dispatch(deleteProjectInState(id))
            dispatch(deleteProjectPalettes(id))
        }catch(error){

        }
    }
}