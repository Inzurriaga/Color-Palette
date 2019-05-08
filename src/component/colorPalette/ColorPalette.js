import React, { Component } from "react";
import { connect } from "react-redux";
import { generateColorPalette } from "../../action"

export  class ColorPalette extends Component{
    componentDidMount(){
        this.props.generateColorPalette()
    }

    render(){
        return(
            <div className="colorPalette-section">
                {
                    this.props.colorPalette.map((color, index) => {
                        return(
                            <div className="color" id={index} style={{"background-color": color}}>
                                <p>{color}</p>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export const mapStateToProps = (state) => ({
    colorPalette: state.colorPalette
})

export const mapDispatchToProps = (dispatch) => ({
    generateColorPalette: palette => dispatch(generateColorPalette(palette))
})

export default connect(mapStateToProps, mapDispatchToProps)(ColorPalette)