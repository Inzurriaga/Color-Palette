import React from "react"
import { toggleSaveModal } from "../saveModal"

describe("projects", () => {
    it("default", () => {
        const mockAction = {
            type: "DEFAULT",
        }
        const result = toggleSaveModal(undefined, mockAction)
        expect(result).toEqual(false)
    })
    it("should change the state when the action type is TOGGLE_SAVE", () => {
        const mockAction = {
            type: "TOGGLE_SAVE",
        }
        const result = toggleSaveModal(undefined, mockAction)
        expect(result).toEqual(true)
    })
})