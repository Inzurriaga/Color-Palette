import { combineReducers } from "redux";
import { toggleProjectDisplay } from "./projectDisplay"
import { colorPalette } from "./colorPalette"

export const rootReducer = combineReducers({
    toggleProjectDisplay,
    colorPalette
})