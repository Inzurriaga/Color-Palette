import React, { Component } from "react"

export default class ColorPalette extends Component{
    constructor(){
        super();
        this.state = {
            test: "this is a test fot the palette"
        }
    }

    render(){
        return(
            <div>
                <p>{this.state.test}</p>
            </div>
        )
    }
}