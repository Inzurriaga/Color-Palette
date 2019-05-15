import { addNewPalette } from "../action"

export const postPalette = (id, palette) => {
    const method = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(palette)
    }
    return async (dispatch) => {
        try{
            const response = await fetch(`http://localhost:3001/api/projects/palettes/${id}`, method);
            if(!response.ok) {
                throw Error(response.statusText)
              }
            const paletteId = await response.json();
            dispatch(addNewPalette({...palette, id: paletteId.id, "project_id": id}))
        }catch(error){
            console.log(error)
        }
    }
}