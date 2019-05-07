import React, { Component } from "react";
import { connect } from "react-redux";
import { toggleProjectDisplay } from "../../action"

export  class Header extends Component{
    constructor(){
        super();
        this.state = {
            test: "hello im a test"
        }
    }

    render(){
        return(
            <header>
                <div>
                    <h1>Palette Picker</h1>
                </div>
                <nav>
                    <button className="refresh"></button>
                    <button className="save"></button>
                    <button className="projects" onClick={this.props.toggleProjectDisplay}></button>
                </nav>
            </header>
        )
    }
}

export const mapDispatchToProps = (dispatch) => ({
    toggleProjectDisplay: () => dispatch(toggleProjectDisplay())
})

export default connect(null, mapDispatchToProps)(Header)