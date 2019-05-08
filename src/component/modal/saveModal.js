import React, { Component } from "react";
import { connect } from "react-redux";
import { toggleSaveModal } from "../../action"

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
        this.props.toggleSaveModal()
    }

    render(){
        let colorPalette = this.props.colorPalette.map(color => {
            return (
                <div className="color" style={{"background-color": color}}>

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
    toggleSaveModal: () => dispatch(toggleSaveModal())
})

export const mapStateToProps = (state) => ({
    colorPalette: state.colorPalette
})

export default connect(mapStateToProps, mapDispatchToProps)(SaveModal)