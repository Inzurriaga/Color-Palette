import React, { Component } from "react"

export default class Header extends Component{
    constructor(){
        super();
        this.state = {
            test: "hello im a test"
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