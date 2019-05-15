import { deletePaletteInState } from "../action"

export const deletePalette = (id) => {
    const method = {
        method: "DELETE",
    }
    return async (dispatch) => {
        try{
            const response = await fetch(`http://localhost:3001/api/projects/palettes/${id}`, method)
            dispatch(deletePaletteInState(id))
        }catch(error){

        }
    }
}