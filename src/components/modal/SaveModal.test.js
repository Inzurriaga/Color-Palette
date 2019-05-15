import React from "react"
import { shallow } from "enzyme"
import { SaveModal, mapDispatchToProps, mapStateToProps } from "./SaveModal"

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
    })
    describe("mapDispatchToProps", () => {

    })
    describe("mapStateToProps", () => {

    })
})