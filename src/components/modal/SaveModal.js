import React, { Component } from "react"
import { connect } from "react-redux"
import { toggleSaveModal } from "../../action"
import { postPalette } from "../../thunks/postPalette"
import { postProject } from "../../thunks/postProject"


export class SaveModal extends Component{
    constructor(){
        super();
        this.state = {
            projectName: "",
            paletteName: ""
        }
    }

    toggleDisplay = (e) => {
        e.preventDefault()
        this.props.toggleSaveModal()
    }

    changeFormState = (e) => {
        let {className, value} = e.target
        this.setState({
            [className]: value
        })
    }

    submitPalette = (e) => {
        e.preventDefault()
        const titleCheck = this.props.projects.find(project =>  project.name === this.state.projectName)
        if(titleCheck){
            this.createNewPalette(titleCheck.id);
        }else{
            this.createNewProject();
        }
        this.props.toggleSaveModal();
    }

    createNewPalette = (id) => {
        const { paletteName } = this.state
        const palette = this.props.colorPalette.reduce((acc, color, index) => {
            acc[`color${index+1}`] = color.hex
            return acc
        }, {})
        const newPalette = {...palette, name: paletteName }
        this.props.postPalette(id, newPalette)
    }

    createNewProject = async () => {
        const { projectName } = this.state
        const newProject = {
            name: projectName
        }
        let project = await this.props.postProject(newProject)
        await this.createNewPalette(project.id )
    }

    render(){
        let colorPalette = this.props.colorPalette.map((color, index) => {
            return (
                <div key={index} className="color" style={{"backgroundColor": color.hex}}>

                </div>
            )
        })
        return(
            <div className="modal-section">
                <form>
                    <button className="close" onClick={this.toggleDisplay}>X</button>
                    <label>
                        <h3>Project Name</h3>
                        <input className="projectName" value={this.state.projectName} onChange={this.changeFormState}></input>
                    </label>
                    <label>
                        <h3>Palette Name</h3>
                        <input className="paletteName" value={this.state.paletteName} onChange={this.changeFormState}></input>
                    </label>
                    <div className="color_display">
                        {
                            colorPalette
                        }
                    </div>
                    <button className="submit" onClick={this.submitPalette}>Submit</button>
                </form>
            </div>
        )
    }
}

export const mapDispatchToProps = (dispatch) => ({
    toggleSaveModal: () => dispatch(toggleSaveModal()),
    postPalette: (projectId, palette) => dispatch(postPalette(projectId, palette)),
    postProject: project => dispatch(postProject(project))
})

export const mapStateToProps = (state) => ({
    colorPalette: state.colorPalette,
    projects: state.projects
})

export default connect(mapStateToProps, mapDispatchToProps)(SaveModal)