import React, { Component } from 'react';
import UserInput from './User/UserInput';
import UserOutput from './User/UserOutput';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <UserInput />
          <br/>
          <hr/>
          <UserOutput />
      </div>
    );
  }
}

export default App;
