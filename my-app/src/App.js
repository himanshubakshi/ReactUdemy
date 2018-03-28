import React, { Component } from 'react';
import './App.css';

// any name can be given here, it is an alias. It's the default export from the file
import Person from './Person/Person';

class App extends Component {

  state = {
      persons: [
        {name: "Himanshu Bakshi", age: 29},
        {name: "Batman", age: 33},
        {name: "Stone Cold Steve Austin", age: 40}
      ]
  };

 switchNameHandler = (newName) => {
    console.log(this.state);
    console.log('Trying to modify state');

    // DON'T do this. React wouldn't recognize this as a change of state
    //this.state.persons[0].name = "I forgot my name!!!!";

    // old state merged with the new one
    this.setState(
      {
        persons: [
          {name: newName, age: 29},
          {name: "Batman", age: 33},
          {name: "Stone Cold Steve Austin", age: 27}
        ]
      }
    );
    console.log(this.state);
  }

  nameChangeHandler = (event) => {
      this.setState(
        {
          persons: [
            {name: "Himanshu Bakshi", age: 29},
            {name: event.target.value, age: 33},
            {name: "Stone Cold Steve Austin", age: 27}
          ]
        }
    );
  }

  render() {
    const style = {
        backgroundColor: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer'
    }

    return (
      // class can't be used for css because it's used in js, to define the class
      // we need to use react provided keywords
      <div className="App">
          <h1>Hi, I am a react app!</h1>

          <p> The app works</p>

          <br/>

          <button 
              style={style}
              onClick={() => this.switchNameHandler("Name from button handler")}>Switch Name</button>

          <hr/>
          <Person name={this.state.persons[0].name} 
                  age={this.state.persons[0].age} 
                  externalOnClickHandler={this.switchNameHandler.bind(this, "New Name 1")}
                 >
              <ul>
                  <li>I love reading</li>
                  <li>I love writing</li>
                  <li>I love mountain climbing</li>                  
              </ul>
          </Person>
          <Person name={this.state.persons[1].name} 
                  age={this.state.persons[1].age} 
                  externalOnClickHandler={this.switchNameHandler.bind(this, "New Name 2")}
                  nameChangeHandler = {this.nameChangeHandler}/>
          <Person name={this.state.persons[2].name} 
                  age={this.state.persons[2].age} 
                  externalOnClickHandler={this.switchNameHandler.bind(this, "New Name 3")}/>
          <hr/>
          
      </div>
      );


    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I too am a react app.'), React.createElement('h1', null, 'Hi, Am i the next child of div? I sure am.'));

  }
}

// changes to state and state bound props would be reflected by react

// onClick has C in Caps. As opposed to the js onclick

export default App;
