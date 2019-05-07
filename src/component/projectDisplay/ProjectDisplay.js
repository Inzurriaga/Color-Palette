import React, { Component } from "react";
import { connect } from "react-redux" 


export class ProjectDisplay extends Component{
    constructor(){
        super();
        this.state = {
            test: "hello im the display test"
        }
    }

    render(){
        let display;
        if(this.props.toggleProjectDisplay){
            display = {
                width: "30vw"
            }
        }else{
            display = {
                width: 0
            }
        }
        return(
            <section style={display} className="project-section">
                <div className="overflow">
                    <div>
                        <div>
                            <h2>Projects</h2>
                        </div>
                    </div>
                    <ul>

                    </ul>
                </div>
            </section>
        )
    }
}

export const mapStateToProps = (state) => ({
    toggleProjectDisplay: state.toggleProjectDisplay
})

export default connect(mapStateToProps)(ProjectDisplay)