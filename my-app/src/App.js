import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    
    //return (
      // <div className="App">
      //     <h1>Hi, i am a react app.</h1>
      // </div>
      //);


     //return React.createElement('div', null, 'h1','Hi, i too am a react app.');

    //  return React.createElement('div', null, React.createElement('h1', null, 'Hi, I too am a react app.'), React.createElement('h1', null, 'Hi, Am i the next child of div? I sure am.'));
     return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I too am a react app.'), React.createElement('h1', null, 'Hi, Am i the next child of div? I sure am.'));

  }
}

export default App;
