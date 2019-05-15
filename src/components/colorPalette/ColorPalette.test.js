import React from "react"
import { shallow } from "enzyme"
import { ColorPalette, mapDispatchToProps, mapStateToProps } from "./ColorPalette"
import { generateColorPalette, toggleLock } from "../../action"

const mockGenerateColorPalette = jest.fn()
const mockToggleLock = jest.fn()
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
            <ColorPalette generateColorPalette={mockGenerateColorPalette}
                        toggleLock={mockToggleLock}
                        colorPalette={mockColorPalette}/>
        )
    })
    describe("App", () => {
        it("should match snap shot", () => {
            expect(wrapper).toMatchSnapshot()
        })
        it("should invoke generateColorPalette when button is click", () => {

        })
        it("should invoke toggleLock when button is click", () => {
            
        })
    })
    describe("mapDispatchToProps", () => {
        it('calls dispatch with an generateInitialColorPalette action when called', () => {
            const mockDispatch = jest.fn()
            const actionToDispatch = generateColorPalette(mockColorPalette)

            const mappedProps = mapDispatchToProps(mockDispatch)
            mappedProps.generateColorPalette(mockColorPalette)
      
            expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
          })
          it('calls dispatch with an getProjects action when called', () => {
            const mockDispatch = jest.fn()
            const actionToDispatch = toggleLock(1)
      
            const mappedProps = mapDispatchToProps(mockDispatch)
            mappedProps.toggleLock(1)
      
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