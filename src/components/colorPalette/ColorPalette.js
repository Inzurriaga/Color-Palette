import React, { Component } from "react";
import { connect } from "react-redux";
import { toggleLock } from "../../action"
import unlock from "../../images/unlock.png"
import lock from "../../images/lock.png"


export class ColorPalette extends Component{
    
    render(){
        return(
            <div className="colorPalette-section">
                {
                    this.props.colorPalette.map((color, index) => {
                        let hello;
                        if(color.lock){
                            return(
                                <div className="color" id={index} key={index} style={{"backgroundColor": color.hex}}>
                                    <button onClick={() => {this.props.toggleLock(index)}}>
                                        <img src={lock}></img>
                                    </button>
                                    <p>{color.hex}</p>
                                </div>
                            )
                        }else{
                            return(
                                <div className="color" id={index} key={index} style={{"backgroundColor": color.hex}}>
                                    <button onClick={() => {this.props.toggleLock(index)}}>
                                        <img src={unlock}></img>
                                    </button>
                                    <p>{color.hex}</p>
                                </div>
                            )
                        }
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
    toggleLock: index => dispatch(toggleLock(index))
})

export default connect(mapStateToProps, mapDispatchToProps)(ColorPalette)