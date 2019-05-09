import React from 'react';
import { connect } from "react-redux"
import Header from "../header/Header.js"
import ColorPalette from "../colorPalette/ColorPalette.js"
import ProjectDisplay from "../projectDisplay/ProjectDisplay.js"
import SaveModal from "../modal/saveModal"

export function App(props) {
  return (
    <div className="App">
      <Header/>
      <ColorPalette/>
      <ProjectDisplay/>
      {
          props.toggleSaveModal && <SaveModal />
      }
    </div>
  );
}

export const mapStateToProps = (state) => ({
  toggleSaveModal: state.toggleSaveModal
}) 

export default connect(mapStateToProps)(App);
