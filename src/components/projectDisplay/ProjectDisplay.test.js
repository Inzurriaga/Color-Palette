import React from "react"
import { shallow } from "enzyme"
import { ProjectDisplay } from "./ProjectDisplay"

const mockToggleProjectDisplay = false;
const mockProjects = [{
    name: "hello", 
    id: 3
},{
    name: "color", 
    id: 4
}]
const mockProjectPalettes = [{
    id: 32,
    color1: "#2a01bd",
    color2: "#4e2b30",
    color3: "#235e2b",
    color4: "#c8604a",
    color5: "#3410f7",
    project_id: 3,
    name: "adsf"
},{
    id: 32,
    color1: "#2a01bd",
    color2: "#4e2b30",
    color3: "#235e2b",
    color4: "#c8604a",
    color5: "#3410f7",
    project_id: 3,
    name: "adsf"
}]

describe("App", () => {

    let wrapper;
    beforeEach(() => {
        wrapper = shallow(
            <ProjectDisplay toggleProjectDisplay={mockToggleProjectDisplay}
                        projectPalettes={mockProjectPalettes}
                        projects={mockProjects}/>
        )
    })

    describe("App", () => {
        
        it("should match snap shot", () => {
            expect(wrapper).toMatchSnapshot()
        })

    })
})