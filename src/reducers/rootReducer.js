import { combineReducers } from "redux";
import { toggleProjectDisplay } from "./projectDisplay"
import { colorPalette } from "./colorPalette"
import { toggleSaveModal } from "./saveModal"

export const rootReducer = combineReducers({
    toggleProjectDisplay,
    colorPalette,
    toggleSaveModal
})