import { deleteProjectInState, deleteProjectPalettes } from "../action"

export const deleteProject = (id) => {
    const method = {
        method: "DELETE",
    }
    return async (dispatch) => {
        try{
            const response = await fetch(process.env.REACT_APP_BACKEND_URL + `/api/${id}`, method)
            if(!response.ok) {
                throw Error(response.statusText)
              }
            dispatch(deleteProjectInState(id))
            dispatch(deleteProjectPalettes(id))
        }catch(error){

        }
    }
}