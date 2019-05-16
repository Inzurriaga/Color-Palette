import React from "react"
import { shallow } from "enzyme"
import { SaveModal, mapDispatchToProps, mapStateToProps } from "./SaveModal"
import { toggleSaveModal } from "../../action";
import { postPalette } from "../../thunks/postPalette";
import { postProject } from "../../thunks/postProject"
jest.mock("../../thunks/postPalette")
jest.mock("../../thunks/postProject")

const mockToggleSaveModal = jest.fn()
const mockPostPalette = jest.fn()
const mockPostProject = jest.fn()
const mockProjects = [{
    name: "hello", 
    id: 3
},{
    name: "color", 
    id: 4
}]
const mockColorPalette = [{
    hex: "#000000",
    lock: true
},{
    hex: "#000000",
    lock: true
},{
    hex: "#000000",
    lock: true
},{
    hex: "#000000",
    lock: true
},{
    hex: "#000000",
    lock: true
}]

describe("App", () => {

    let wrapper;
    beforeEach(() => {
        wrapper = shallow(
            <SaveModal toggleSaveModal={mockToggleSaveModal}
                        postPalette={mockPostPalette}
                        postProject={mockPostProject}
                        colorPalette={mockColorPalette}
                        projects={mockProjects}/>
        )
    })

    describe("App", () => {

        it("should match snap shot", () => {
            expect(wrapper).toMatchSnapshot()
        })

        it("should change the state of the project name when input is change", () => {
                wrapper.find(".projectName").simulate("change", {target: {
                    className: "projectName",
                    value: "hello"
                }})
                expect(wrapper.state("projectName")).toEqual("hello")
        })

        it("should change the state of the palette name when input is change", () => {
            wrapper.find(".paletteName").simulate("change", {target: {
                className: "paletteName",
                value: "hello"
            }})
            expect(wrapper.state("paletteName")).toEqual("hello")
        })

        it("should invoke postPalette when createNewPalette is invoke", () => {
            wrapper.instance().createNewPalette()
            expect(mockPostPalette).toHaveBeenCalled()
        })

        it("should invoke postProject when createNewProject is invoke", () => {
            wrapper.instance().createNewProject()
            expect(mockPostProject).toHaveBeenCalled()
        })

        it("should invoke toggleSaveModal when toggleDisplay is invoke", () => {
            wrapper.find(".close").simulate("click", {preventDefault: () => {}})
            expect(mockToggleSaveModal).toHaveBeenCalled()
        })

    })
    describe("mapDispatchToProps", () => {

        it('calls dispatch with an toggleSaveModal action when called', () => {
            const mockDispatch = jest.fn()
            const actionToDispatch = toggleSaveModal()
            const mappedProps = mapDispatchToProps(mockDispatch)
            mappedProps.toggleSaveModal()
            expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
          })

          it('calls dispatch with an postPalette action when called', () => {
            const mockDispatch = jest.fn()
            const actionToDispatch = postPalette(2, mockColorPalette)
            const mappedProps = mapDispatchToProps(mockDispatch)
            mappedProps.postPalette(2, mockColorPalette)
            expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
          })

          it('calls dispatch with an postProject action when called', () => {
            const mockDispatch = jest.fn()
            const actionToDispatch = postProject(mockProjects)
            const mappedProps = mapDispatchToProps(mockDispatch)
            mappedProps.postProject(mockProjects)
            expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
          })

    })

    describe("mapStateToProps", () => {

        it("should only return waht is needed from the store", () => {
            const mockStore = {
                colorPalette: [{},{},{}],
                projects: [{},{},{}],
                toggle: true,
            }
            const expected = {
                colorPalette: [{},{},{}],
                projects: [{},{},{}]
            }
            const result = mapStateToProps(mockStore)
            expect(result).toEqual(expected)
        })
        
    })
})