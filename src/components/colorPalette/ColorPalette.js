import React, { Component } from "react";
import { connect } from "react-redux";
import { generateColorPalette, toggleLock } from "../../action"


export class ColorPalette extends Component{
    render(){
        return(
            <div className="colorPalette-section">
                {
                    this.props.colorPalette.map((color, index) => {
                        let hello;
                        if(color.lock){
                            hello = "lock"
                        }else{
                            hello = "not lock"
                        }
                        return(
                            <div className="color" id={index} key={index} style={{"backgroundColor": color.hex}}>
                                <button onClick={() => {this.props.toggleLock(index)}}>{hello}</button>
                                <p>{color.hex}</p>
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
    generateColorPalette: palette => dispatch(generateColorPalette(palette)),
    toggleLock: index => dispatch(toggleLock(index))
})

export default connect(mapStateToProps, mapDispatchToProps)(ColorPalette)