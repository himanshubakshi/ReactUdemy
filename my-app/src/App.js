import React, { Component } from 'react';
import './App.css';

// any name can be given here, it is an alias. It's the default export from the file
import Person from './Person/Person';

class App extends Component {
  render() {
    
    return (
      // class can't be used for css because it's used in js, to define the class
      // we need to use react provided keywords
      <div className="App">
          <h1>Hi, I am a react app!</h1>

          <p> The app works</p>

          <br/>

          <hr/>
          <Person name={"Himanshu Bakshi"} age={29} />
          <hr/>
          <Person name={"John Doe"} age={99} />     
          <hr/>
          <Person name={"The Rock"} age={35} />
          <hr/>
          
      </div>
      );


    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I too am a react app.'), React.createElement('h1', null, 'Hi, Am i the next child of div? I sure am.'));

  }
}

export default App;
