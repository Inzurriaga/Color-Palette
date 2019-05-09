import { combineReducers } from "redux";
import { toggleProjectDisplay } from "./projectDisplay"
import { colorPalette } from "./colorPalette"
import { toggleSaveModal } from "./saveModal"
import { projects } from "./projects"
import { projectPalettes } from "./projectPalettes"

export const rootReducer = combineReducers({
    toggleProjectDisplay,
    colorPalette,
    toggleSaveModal,
    projects,
    projectPalettes
})