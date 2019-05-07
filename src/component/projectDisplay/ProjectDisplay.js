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
            <section className="project-section">
                <div>
                    <div>
                        <h2>Projects</h2>
                    </div>
                </div>
                <ul>

                </ul>
            </section>
        )
    }
}