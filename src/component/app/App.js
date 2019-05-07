import React from 'react';
import Header from "../header/Header.js"
import ColorPalette from "../colorPalette/ColorPalette.js"
import ProjectDisplay from "../projectDisplay/ProjectDisplay.js"
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <ColorPalette />
      <ProjectDisplay />
    </div>
  );
}

export default App;
