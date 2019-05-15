import React from "react"
import { projectPalettes } from "../projectPalettes"

const mockPalette = {
    id: 18,
    color1: "#453f05",
    color2: "#7a25bc",
    color3: "#fbed8c",
    color4: "#b0274d",
    color5: "#1ec9af",
    project_id: 59,
    name: "hello",
}
const mockProjectPalettes = [{
    id: 38,
    color1: "#453f05",
    color2: "#7a25bc",
    color3: "#fbed8c",
    color4: "#b0274d",
    color5: "#1ec9af",
    project_id: 59,
    name: "hello",
},{
    id: 28,
    color1: "#453f05",
    color2: "#7a25bc",
    color3: "#fbed8c",
    color4: "#b0274d",
    color5: "#1ec9af",
    project_id: 35,
    name: "hello",
}]


describe("projectPalettes", () => {
    it("default", () => {
        const mockAction = {
            type: "DEFAULT",
        }
        const result = projectPalettes(undefined, mockAction)
        expect(result).toEqual([])
    })
    it("INITIAL_PALETTE", () => {
        const mockAction = {
            type: "INITIAL_PALETTE",
            palettes: mockProjectPalettes
        }
        const result = projectPalettes(undefined, mockAction)
        expect(result).toEqual(mockProjectPalettes)
    })
    it("ADD_PALETTE", () => {
        const mockAction = {
            type: "ADD_PALETTE",
            palette: mockPalette
        }
        const expected = [...mockProjectPalettes, mockPalette]
        const result = projectPalettes(mockProjectPalettes, mockAction)
        expect(result).toEqual(expected)
    })
    it("DELETE_PALETTE", () => {
        // fix this
        const mockAction = {
            type: "DELETE_PALETTE",
            id: 28
        }
        const expected = [{
            id: 38,
            color1: "#453f05",
            color2: "#7a25bc",
            color3: "#fbed8c",
            color4: "#b0274d",
            color5: "#1ec9af",
            project_id: 59,
            name: "hello",
        }]
        const result = projectPalettes(mockProjectPalettes, mockAction)
        expect(result).toEqual(expected)
    })
    it("DELETE_PROJECT_PALETTE", () => {
        const mockAction = {
            type: "DELETE_PROJECT_PALETTE",
            projectId: 35
        }
        const expected = [{
            id: 38,
            color1: "#453f05",
            color2: "#7a25bc",
            color3: "#fbed8c",
            color4: "#b0274d",
            color5: "#1ec9af",
            project_id: 59,
            name: "hello",
        }]
        const result = projectPalettes(mockProjectPalettes, mockAction)
        expect(result).toEqual(expected)
    })
})