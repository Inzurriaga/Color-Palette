import React, { Component } from "react";

export default class Header extends Component{
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
                </nav>
            </header>
        )
    }
}