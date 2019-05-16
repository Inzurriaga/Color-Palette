import { initialPalette } from "../action"
export const getPalettes = () => {
    return async (dispatch) => {
        try{
            const response = await fetch("http://localhost:3001/api/palettes")
            if(!response.ok) {
                throw Error(response.statusText)
              }
            const palettes = await response.json()
            dispatch(initialPalette(palettes))
        }catch(error){

        }
    }
}