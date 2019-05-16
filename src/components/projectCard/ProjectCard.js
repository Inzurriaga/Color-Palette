import React, { Component } from "react"
import { connect } from "react-redux"
import {CopyToClipboard} from 'react-copy-to-clipboard'
import { deletePalette } from "../../thunks/deletePalette"
import { deleteProject } from "../../thunks/deleteProject"
import { displayProjectPalette } from "../../action"

export class ProjectCard extends Component{

    deletePalette = (id) => {
        this.props.deletePalette(id)
    }

    deleteProject = () => {
        this.props.deleteProject(this.props.project.id)
    }

    displayPalette = (palette) => {
        let projectPalette = []
        for(var i = 0; i < 5; i++){
            projectPalette.push({
                hex: palette[`color${i+1}`],
                lock: false
            })
        }
        this.props.displayProjectPalette(projectPalette)
    }

    render(){
        let { name, palette } = this.props.project
        let palettes = palette.map(color => {
            return <div className="palette" key={color.id}>
                        <h4 onClick={() => {this.displayPalette(color)}}>{color.name}</h4>
                        <button className="delete-palette" onClick={() => {this.deletePalette(color.id)}}>X</button>
                        <div className="palette-display">
                            <CopyToClipboard text={color.color1}>
                                <div style={{"backgroundColor": color.color1}} className="color-display"></div>
                            </CopyToClipboard>
                            <CopyToClipboard text={color.color2}>
                                <div style={{"backgroundColor": color.color2}} className="color-display"></div>
                            </CopyToClipboard>
                            <CopyToClipboard text={color.color3}>
                                <div style={{"backgroundColor": color.color3}} className="color-display"></div>
                            </CopyToClipboard>
                            <CopyToClipboard text={color.color4}>
                                <div style={{"backgroundColor": color.color4}} className="color-display"></div>
                            </CopyToClipboard>
                            <CopyToClipboard text={color.color5}>
                                <div style={{"backgroundColor": color.color5}} className="color-display"></div>
                            </CopyToClipboard>
                        </div>
                    </div>
        })
        return(
            <article>
                <div className="project-name">
                    <h3>{name}</h3>
                    <button onClick={this.deleteProject}>X</button>
                </div>
                <div>
                    {
                        palettes
                    }
                </div>
            </article>
        )
    }
}

export const mapDispatchToProps = (dispatch) => ({
    deletePalette: id => dispatch(deletePalette(id)),
    deleteProject: id => dispatch(deleteProject(id)),
    displayProjectPalette: palette => dispatch(displayProjectPalette(palette))
})

export default connect(null, mapDispatchToProps)(ProjectCard)