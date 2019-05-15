import React, { Component } from "react";
import { connect } from "react-redux";
import { toggleProjectDisplay, generateColorPalette, toggleSaveModal } from "../../action"

export  class Header extends Component{

    render(){
        const colorPalette = this.props.colorPalette
        return(
            <header>
                <div>
                    <h1>Palette Picker</h1>
                </div>
                <nav>
                    <button className="refresh" onClick={() => {this.props.generateColorPalette(colorPalette)}}></button>
                    <button className="save" onClick={this.props.toggleSaveModal}></button>
                    <button className="projects" onClick={this.props.toggleProjectDisplay}></button>
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