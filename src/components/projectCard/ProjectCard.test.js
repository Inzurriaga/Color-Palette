import React from "react"
import { shallow } from "enzyme"
import { ProjectCard, mapDispatchToProps, mapStateToProps } from "./ProjectCard"

const mockDeletePalette = jest.fn();
const mockDeleteProject = jest.fn()
const mockDisplayProjectPalette = jest.fn()
const mockProject = {
    name: "color",
    id: 5,
    palette: [{
        id: 32,
        color1: "#2a01bd",
        color2: "#4e2b30",
        color3: "#235e2b",
        color4: "#c8604a",
        color5: "#3410f7",
        project_id: 3,
        name: "adsf"
    }]
}

describe("App", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(
            <ProjectCard deletePalette={mockDeletePalette}
                        deleteProject={mockDeleteProject}
                        displayProjectPalette={mockDisplayProjectPalette}
                        project={mockProject}/>
        )
    })
    describe("App", () => {
        it("should match snap shot", () => {
            expect(wrapper).toMatchSnapshot()
        })
    })
    describe("mapDispatchToProps", () => {

    })
    describe("mapStateToProps", () => {

    })
})