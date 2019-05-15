import React from "react"
import { toggleProjectDisplay } from "../projectDisplay"

describe("toggleProjectDisplay", () => {
    it("default", () => {
        const mockAction = {
            type: "DEFAULT",
        }
        const result = toggleProjectDisplay(undefined, mockAction)
        expect(result).toEqual(false)
    })
    it("TOGGLE_PROJECT", () => {
        const mockAction = {
            type: "TOGGLE_PROJECT",
        }
        const result = toggleProjectDisplay(undefined, mockAction)
        expect(result).toEqual(true)   
    })
})