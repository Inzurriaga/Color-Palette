import { deletePaletteInState } from "../action"

export const deletePalette = (id) => {
    const method = {
        method: "DELETE",
    }
    return async (dispatch) => {
        try{
            const response = await fetch(process.env.REACT_APP_BACKEND_URL + `/api/${id}`, method)
            if(!response.ok) {
                throw Error(response.statusText)
              }
            dispatch(deletePaletteInState(id))
        }catch(error){

        }
    }
}