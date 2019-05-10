import React, { Component } from "react";
import { connect } from "react-redux";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { deletePalette, deleteProject, deleteProjectPalettes } from "../../action"

export class ProjectCard extends Component{

    deletePalette = (id) => {
        this.props.deletePalette(id)
    }

    deleteProject = () => {
        this.props.deleteProjectPalettes(this.props.project.id)
        this.props.deleteProject(this.props.project.id)
    }

    render(){
        let { name, palette } = this.props.project
        let palettes = palette.map(color => {
            return <div key={color.id}>
                        <h4>{color.name}</h4>
                        <button onClick={() => {this.deletePalette(color.id)}}></button>
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
                    <button onClick={this.deleteProject}></button>
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

const mapDispatchToProps = (dispatch) => ({
    deletePalette: id => dispatch(deletePalette(id)),
    deleteProject: id => dispatch(deleteProject(id)),
    deleteProjectPalettes: id => dispatch(deleteProjectPalettes(id))
})
export default connect(null, mapDispatchToProps)(ProjectCard)