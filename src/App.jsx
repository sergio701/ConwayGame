import React, { Component } from 'react';
import ConwayGame from './containers/conwayGame/conwayGame';
//# Remove unnecessary css
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <ConwayGame />
      </div>
    );
  }
}

export default App;
