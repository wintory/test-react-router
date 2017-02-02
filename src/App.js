import React, { Component } from 'react';
import './css/App.css';
import Nav from './Component/Nav'
import Menu from './Component/Menu'

class App extends Component {


  render() {
    return (
      <div>
        <Nav />
      <div className="App">
        <div className="App-header">
          <Menu />
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      {this.props.children}
      </div>
    </div>
    );
  }
}

export default App;
