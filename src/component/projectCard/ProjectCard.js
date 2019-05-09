import React, { Component } from "react";
import { connect } from "react-redux";
import {CopyToClipboard} from 'react-copy-to-clipboard';

export class ProjectCard extends Component{
    render(){
        let { name, palette } = this.props.project
        let palettes = palette.map(color => {
            // change to the index to the id of the palette
            return <div key={color.id}>
                        <h4>{color.name}</h4>
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

export default connect()(ProjectCard)