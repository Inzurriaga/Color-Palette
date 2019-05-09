import React, { Component } from 'react';
import { connect } from "react-redux"
import Header from "../header/Header.js"
import ColorPalette from "../colorPalette/ColorPalette.js"
import ProjectDisplay from "../projectDisplay/ProjectDisplay.js"
import SaveModal from "../modal/SaveModal";
import { initialProjects, initialPalette } from "../../action"

export class App extends Component {

  componentDidMount(){
    const exampleProjects = [
      {
          id: 1,
          name: "hello world",
      },
      {
        id: 2,
        name: "what what",
      },
      {
        id: 3,
        name: "my name is",
      },
      {
        id: 4,
        name: "yes",
      }
    ]
    const examplePalette =  [{
      id: 7842,
      projectsId: 1,
      name: "hello",
      color1: "#a3f441",
      color2: "#5e6a30",
      color3: "#4bf859",
      color4: "#ad2a13",
      color5: "#88d981",
    }, {
      id: 7014,
      projectsId: 1,
      name: "hello",
      color1: "#a3f441",
      color2: "#5e6a30",
      color3: "#4bf859",
      color4: "#ad2a13",
      color5: "#88d981",
    }, {
      id: 7819,
      projectsId: 2,
      name: "hello",
      color1: "#a3f441",
      color2: "#5e6a30",
      color3: "#4bf859",
      color4: "#ad2a13",
      color5: "#88d981",
    },{
      id: 78142,
      projectsId: 2,
      name: "hello",
      color1: "#a3f441",
      color2: "#5e6a30",
      color3: "#4bf859",
      color4: "#ad2a13",
      color5: "#88d981",
    }, {
      id: 70142,
      projectsId: 2,
      name: "hello",
      color1: "#a3f441",
      color2: "#5e6a30",
      color3: "#4bf859",
      color4: "#ad2a13",
      color5: "#88d981",
    }, {
      id: 78192,
      projectsId: 3,
      name: "hello",
      color1: "#a3f441",
      color2: "#5e6a30",
      color3: "#4bf859",
      color4: "#ad2a13",
      color5: "#88d981",
    },{
      id: 8142,
      projectsId: 4,
      name: "hello",
      color1: "#a3f441",
      color2: "#5e6a30",
      color3: "#4bf859",
      color4: "#ad2a13",
      color5: "#88d981",
    }, {
      id: 142,
      projectsId: 4,
      name: "hello",
      color1: "#a3f441",
      color2: "#5e6a30",
      color3: "#4bf859",
      color4: "#ad2a13",
      color5: "#88d981",
    }, {
      id: 8192,
      projectsId: 4,
      name: "hello",
      color1: "#a3f441",
      color2: "#5e6a30",
      color3: "#4bf859",
      color4: "#ad2a13",
      color5: "#88d981",
    },{
      id: 792,
      projectsId: 4,
      name: "hello",
      color1: "#a3f441",
      color2: "#5e6a30",
      color3: "#4bf859",
      color4: "#ad2a13",
      color5: "#88d981",
    }]
    this.props.initialProjects(exampleProjects)
    this.props.initialPalette(examplePalette)
  }

  render(){
    return (
      <div className="App">
        <Header/>
        <ColorPalette/>
        <ProjectDisplay/>
        {
            this.props.toggleSaveModal && <SaveModal />
        }
      </div>
    );
  }
}

export const mapDispatchToProps = (dispatch) => ({
  initialProjects: projects => dispatch(initialProjects(projects)),
  initialPalette: palette => dispatch(initialPalette(palette))
})

export const mapStateToProps = (state) => ({
  toggleSaveModal: state.toggleSaveModal,
  toggleProjectDisplay: state.toggleProjectDisplay
}) 

export default connect(mapStateToProps, mapDispatchToProps)(App);
