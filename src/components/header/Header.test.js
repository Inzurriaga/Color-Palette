import React from "react"
import { shallow } from "enzyme"
import { toggleProjectDisplay, generateColorPalette, toggleSaveModal } from "../../action"
import { Header, mapDispatchToProps, mapStateToProps } from "./Header"

const mockToggleProjectDisplay = jest.fn()
const mockGenerateColorPalette = jest.fn()
const mockToggleSaveModal = jest.fn()
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
            <Header colorPalette={mockColorPalette}
                    toggleProjectDisplay={mockToggleProjectDisplay}
                    generateColorPalette={mockGenerateColorPalette}
                    toggleSaveModal={mockToggleSaveModal}/>
        )
    })

    describe("App", () => {

        it("should match snap shot", () => {
            expect(wrapper).toMatchSnapshot();
        })

        it("should call generateColorPalette when button is click", () => {
            wrapper.find(".refresh").simulate("click");
            expect(mockGenerateColorPalette).toHaveBeenCalled();
        })

        it("should call toggleSaveModal when button is click", () => {
            wrapper.find(".save").simulate("click");
            expect(mockToggleSaveModal).toHaveBeenCalled();
        })

        it("should call toggleProjectDisplay when button is click", () => {
            wrapper.find(".projects").simulate("click");
            expect(mockToggleProjectDisplay).toHaveBeenCalled()
        })

    })
    describe("mapDispatchToProps", () => {

        it('calls dispatch with an toggleProjectDisplay action when called', () => {
            const mockDispatch = jest.fn()
            const actionToDispatch = toggleProjectDisplay()
            const mappedProps = mapDispatchToProps(mockDispatch)
            mappedProps.toggleProjectDisplay()
            expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
          })

          it('calls dispatch with an toggleSaveModal action when called', () => {
            const mockDispatch = jest.fn()
            const actionToDispatch = toggleSaveModal()
            const mappedProps = mapDispatchToProps(mockDispatch)
            mappedProps.toggleSaveModal()
            expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
          })

          it('calls dispatch with an generateColorPalette action when called', () => {
            const mockDispatch = jest.fn()
            const actionToDispatch = generateColorPalette(mockColorPalette)
            const mappedProps = mapDispatchToProps(mockDispatch)
            mappedProps.generateColorPalette(mockColorPalette)
            expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
          })

    })
    describe("mapStateToProps", () => {

        it("should only return waht is needed from the store", () => {
            const mockStore = {
                colorPalette: [{},{},{}],
                project: [{},{},{}]
            }
            const expected = {
                colorPalette: [{},{},{}]
            }
            const result = mapStateToProps(mockStore)
            expect(result).toEqual(expected)
        })
        
    })
})