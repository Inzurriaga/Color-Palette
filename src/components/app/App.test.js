import React from "react"
import { shallow } from "enzyme"
import { App, mapDispatchToProps, mapStateToProps } from "./App"
import { getProjects } from "../../thunks/getProjects";
import { getPalettes } from "../../thunks/getPalettes";
import { generateInitialColorPalette } from "../../action"
jest.mock("../../thunks/getProjects")
jest.mock("../../thunks/getPalettes")

const mockGetProjects = jest.fn()
const mockGetPalettes = jest.fn()
const mockGenerateInitialColorPalette = jest.fn()
const mockToggleSaveModal = false

describe("App", () => {

    let wrapper;
    beforeEach(() => {
        wrapper = shallow(
            <App getProjects={mockGetProjects}
                getPalettes={mockGetPalettes}
                generateInitialColorPalette={mockGenerateInitialColorPalette}
                toggleSaveModal={mockToggleSaveModal}
                />
        )
    })

    describe("App", () => {

        it("should match snap shot", () => {
            expect(wrapper).toMatchSnapshot()
        })

    })

    describe("mapDispatchToProps", () => {
        
        it('calls dispatch with an generateInitialColorPalette action when called', () => {
            const mockDispatch = jest.fn()
            const actionToDispatch = generateInitialColorPalette()
            const mappedProps = mapDispatchToProps(mockDispatch)
            mappedProps.generateInitialColorPalette()
            expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
          })

          it('calls dispatch with an getProjects action when called', () => {
            const mockDispatch = jest.fn()
            const actionToDispatch = getProjects()
            const mappedProps = mapDispatchToProps(mockDispatch)
            mappedProps.getProjects()
            expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
          })

          it('calls dispatch with an getPalettes action when called', () => {
            const mockDispatch = jest.fn()
            const actionToDispatch = getPalettes()
            const mappedProps = mapDispatchToProps(mockDispatch)
            mappedProps.getPalettes()
            expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
          })

    })
    describe("mapStateToProps", () => {

        it("should only return waht is needed from the store", () => {
            const mockStore = {
                colorPalette: [{},{},{}],
                project: [{},{},{}],
                toggleSaveModal: false
            }
            const expected = {
                toggleSaveModal: false
            }
            const result = mapStateToProps(mockStore)
            expect(result).toEqual(expected)
        })
        
    })
})