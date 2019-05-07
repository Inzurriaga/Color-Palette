import React, { Component } from "react";

export default class ProjectDisplay extends Component{
    constructor(){
        super();
        this.state = {
            test: "hello im the display test"
        }
    }

    render(){
        return(
            <div className="project-section">
                <p>{this.state.test}</p>
            </div>
        )
    }
}