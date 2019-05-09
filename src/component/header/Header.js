import React, { Component } from "react";
import { connect } from "react-redux";
import { toggleProjectDisplay, generateColorPalette, toggleSaveModal } from "../../action"

export  class Header extends Component{
    constructor(){
        super();
        this.state = {
            test: "hello im a test"
        }
    }

    render(){
        return(
            <header>
                <div>
                    <h1>Palette Picker</h1>
                </div>
                <nav>
                    <button className="refresh" onClick={this.props.generateColorPalette}></button>
                    <button className="save" onClick={this.props.toggleSaveModal}></button>
                    <button className="projects" onClick={this.props.toggleProjectDisplay}></button>
                </nav>
            </header>
        )
    }
}

export const mapDispatchToProps = (dispatch) => ({
    toggleProjectDisplay: () => dispatch(toggleProjectDisplay()),
    generateColorPalette: () => dispatch(generateColorPalette()),
    toggleSaveModal: () => dispatch(toggleSaveModal())
})


export default connect(null, mapDispatchToProps)(Header)