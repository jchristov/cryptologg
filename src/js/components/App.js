// ----------------------------------------------
// Imports
// ----------------------------------------------
import React, { Component } from 'react';
import Header from './Header';
import Mast from './Mast';
import Crypto from './Crypto';
import Log from './Log';

// ----------------------------------------------
// App
// ----------------------------------------------
class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Mast />
        <Crypto />
        <Log />
      </div>
    );
  }
}

// ----------------------------------------------
// Exports
// ----------------------------------------------
export default App;