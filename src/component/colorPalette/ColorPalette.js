import React, { Component } from "react";

export default class ColorPalette extends Component{
    constructor(){
        super();
        this.state = {
            colors: []
        }
    }

    componentDidMount(){
        this.generateColor()
    }

    generateColor = () => {
        let colorList = [];
        for(var i = 0; i < 5; i++){
            var randomColor = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
            colorList.push(randomColor)
        };
        this.setState({
            colors: colorList
        })
    }

    render(){
        return(
            <div className="colorPalette-section">
                {
                    this.state.colors.map((color, index) => {
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