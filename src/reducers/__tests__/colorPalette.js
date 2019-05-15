import React from "react"
import { colorPalette } from "../colorPalette"

const mockPalette = [{
    hex: "#97a5b4",
    lock: false
},{
    hex: "#97a5b4",
    lock: false
},{
    hex: "#97a5b4",
    lock: false
},{
    hex: "#97a5b4",
    lock: false
},{
    hex: "#97a5b4",
    lock: false
}]

describe("colorPalette", () => {
    it("default", () => {
        const mockAction = {
            type: "DEFAULT",
            palette: []
        }
        const result = colorPalette(undefined, mockAction)
        expect(result).toEqual([])
    })
    it("GENERATE_INITIAL", () => {
        const mockAction = {
            type: "GENERATE_INITIAL",
        }
        const result = colorPalette(undefined, mockAction)
        expect(typeof result).toEqual("object")
    })
    it("GENERATED_PALETTE", () => {
        const mockAction = {
            type: "GENERATED_PALETTE",
            palette: mockPalette
        }
        const result = colorPalette(undefined, mockAction)
        expect(typeof result).toEqual("object")
    })
    it("TOGGLE_LOCK", () => {
        const mockAction = {
            type: "TOGGLE_LOCK",
        }
        const mockState = mockPalette
        const result = colorPalette(mockState, mockAction)
        expect(typeof result).toEqual("object")
    })
    it("DISPLAY_PALETTE", () => {
        const mockAction = {
            type: "DISPLAY_PALETTE",
            palette: mockPalette
        }
        const result = colorPalette(undefined, mockAction)
        expect(result).toEqual(mockPalette) 
    })
})