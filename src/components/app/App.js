import React, { Component } from 'react';
import { connect } from "react-redux"
import Header from "../header/Header.js"
import ColorPalette from "../colorPalette/ColorPalette.js"
import ProjectDisplay from "../projectDisplay/ProjectDisplay.js"
import SaveModal from "../modal/SaveModal"
import { getProjects } from "../../thunks/getProjects";
import { getPalettes } from "../../thunks/getPalettes";
import { generateInitialColorPalette } from "../../action"

export class App extends Component {

  componentDidMount(){
    this.props.getProjects()
    this.props.getPalettes()
    this.props.generateInitialColorPalette()
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
  getProjects: () => dispatch(getProjects()),
  getPalettes: () => dispatch(getPalettes()),
  generateInitialColorPalette: () => dispatch(generateInitialColorPalette())
})

export const mapStateToProps = (state) => ({
  toggleSaveModal: state.toggleSaveModal,
}) 

export default connect(mapStateToProps, mapDispatchToProps)(App);
