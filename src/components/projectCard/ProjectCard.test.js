import React from "react"
import { shallow } from "enzyme"
import { ProjectCard, mapDispatchToProps } from "./ProjectCard"
import { deletePalette } from "../../thunks/deletePalette";
import { deleteProject } from "../../thunks/deleteProject";
import { displayProjectPalette } from "../../action";
jest.mock("../../thunks/deletePalette")
jest.mock("../../thunks/deleteProject")

const mockDeletePalette = jest.fn();
const mockDeleteProject = jest.fn()
const mockDisplayProjectPalette = jest.fn()
const mockPalette = [{
    hex: "#000000",
    lock: false
}]
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
        it("should invoke deletePalette when delete palette button is click", () => {
            wrapper.find("button").at(1).simulate("click")
            expect(mockDeletePalette).toHaveBeenCalled()
        })
        it("should invoke deleteProject when delete project button is click", () => {
            wrapper.find("button").at(0).simulate("click")
            expect(mockDeleteProject).toHaveBeenCalled()
        })
        it("should invoke deleteProject when delete project button is click", () => {
            wrapper.find("h4").at(0).simulate("click")
            expect(mockDisplayProjectPalette).toHaveBeenCalled()
        })
    })
    describe("mapDispatchToProps", () => {
        it('calls dispatch with an deletePalette action when called', () => {
            const mockDispatch = jest.fn()
            const actionToDispatch = deletePalette(2)
      
            const mappedProps = mapDispatchToProps(mockDispatch)
            mappedProps.deletePalette(2)
      
            expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
          })
          it('calls dispatch with an deleteProject action when called', () => {
            const mockDispatch = jest.fn()
            const actionToDispatch = deleteProject(2)
      
            const mappedProps = mapDispatchToProps(mockDispatch)
            mappedProps.deleteProject(2)
      
            expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
          })
          it('calls dispatch with an displayProjectPalette action when called', () => {
            const mockDispatch = jest.fn()
            const actionToDispatch = displayProjectPalette(mockPalette)
      
            const mappedProps = mapDispatchToProps(mockDispatch)
            mappedProps.displayProjectPalette(mockPalette)
      
            expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
          })
    })
})