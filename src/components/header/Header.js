import React, { Component } from "react";
import { connect } from "react-redux";
import { toggleProjectDisplay, generateColorPalette, toggleSaveModal } from "../../action"
import reset from "../../images/reset.png";
import save from "../../images/save.png";
import folder from "../../images/folder.png"

export  class Header extends Component{

    render(){
        const colorPalette = this.props.colorPalette
        return(
            <header>
                <div>
                    <h1>Palette Picker</h1>
                </div>
                <nav>
                    <button className="refresh" onClick={() => {this.props.generateColorPalette(colorPalette)}}>
                        <img src={reset}></img>
                    </button>
                    <button className="save" onClick={this.props.toggleSaveModal}>
                        <img src={save}></img>
                    </button>
                    <button className="projects" onClick={this.props.toggleProjectDisplay}>
                    <img src={folder}></img>
                    </button>
                </nav>
            </header>
        )
    }
}

export const mapStateToProps = (state) => ({
    colorPalette: state.colorPalette
})

export const mapDispatchToProps = (dispatch) => ({
    toggleProjectDisplay: () => dispatch(toggleProjectDisplay()),
    generateColorPalette: palette => dispatch(generateColorPalette(palette)),
    toggleSaveModal: () => dispatch(toggleSaveModal())
})


export default connect(mapStateToProps, mapDispatchToProps)(Header)