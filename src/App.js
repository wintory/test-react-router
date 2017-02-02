import React, { Component } from 'react';
import './css/App.css';
import Nav from './Component/Nav'
import Menu from './Component/Menu'


export default class App extends Component {


  render() {
    console.log(this.props.children);

    return (
      <div>
        <Nav />
      <div className="App">
        <div className="App-header">
          <Menu />
        </div>
        {this.props.children}
      </div>
    </div>
    );
  }
}
