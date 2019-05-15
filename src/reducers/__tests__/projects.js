import React from "react"
import { projects } from "../projects"

const mockProject = {
    name: "helloThree",
    id: 5
}

const mockProjects = [{
    name: "helloOne", 
    id: 2
},{
    name: "helloTwo",
    id: 3
}]

describe("projects", () => {
    it("default", () => {
        const mockAction = {
            type: "DEFAULT",
        }
        const result = projects(undefined, mockAction)
        expect(result).toEqual([])
    })
    it("INITIAL_PROJECTS", () => {
        const mockAction = {
            type: "INITIAL_PROJECTS",
            projects: mockProjects
        }
        const result = projects(undefined, mockAction)
        expect(result).toEqual(mockProjects)
    })
    it("ADD_PROJECT", () => {
        const mockAction = {
            type: "ADD_PROJECT",
            project: mockProject
        }
        const expected = [{
            name: "helloOne", 
            id: 2
        },{
            name: "helloTwo",
            id: 3
        },{
            name: "helloThree",
            id: 5
        }]
        const result = projects(mockProjects, mockAction)
        expect(result).toEqual(expected)
    })
    it("DELETE_PROJECT", () => {
        const mockAction = {
            type: "DELETE_PROJECT",
            id: 2
        }
        const expected = [{
            name: "helloTwo",
            id: 3
        }]
        const result = projects(mockProjects, mockAction)
        expect(result).toEqual(expected)
    })
})