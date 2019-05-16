import { initialPalette } from "../action"
export const getPalettes = () => {
    return async (dispatch) => {
        try{
            const response = await fetch(process.env.REACT_APP_BACKEND_URL + "/api/palettes")
            if(!response.ok) {
                throw Error(response.statusText)
              }
            const palettes = await response.json()
            dispatch(initialPalette(palettes))
        }catch(error){

        }
    }
}