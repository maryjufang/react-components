import React, { Component } from 'react';
import NavBar from './components/layout/nav-bar.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar></NavBar>
        <div className="font-mono font-bold text-orange">
          test tailwind css
        </div>
      </div>
    );
  }
}

export default App;
