import React, { Component } from 'react';
import ErrorHandler from './ErrorHandler'

import classes from './App.css';

// any name can be given here, it is an alias. It's the default export from the file
import Person from './Person/Person';

class App extends Component {

  state = {
      persons: [
        {id:"123", name: "Himanshu Bakshi", age: 29},
        {id:"2344", name: "Batman", age: 33},
        {id:"3456y", name: "Stone Cold Steve Austin", age: 40}
      ],
      showPersons: false
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

  nameChangedHandler = (event, id) => {
      
      const personIndex = this.state.persons.findIndex((p) => {
        return p.id === id;
      });

      // make copy of the state object (specific person) 
      const person = {
        ...this.state.persons[personIndex]
      }

      person.name = event.target.value;
      //const person = Object.assign({}, this.state.persons[personIndex]);
      const persons = [...this.state.persons];


      persons[personIndex] = person;
      
      this.setState(
        {
          persons: persons
        }
    );
  } 

  togglePersonsHandler = () => {

      const doesShow = this.state.showPersons;
      this.setState({
        showPersons: !doesShow
      });
  }

  deletePersonHandler = (personIndex)=> {


      //const persons = this.state.persons.slice();

      // update state immutably
      // create a copy, then modify stuff 

      const persons = [...this.state.persons];

      persons.splice(personIndex, 1);

      this.setState({persons: persons});
  }

  render() {

    let persons = null;

    let btnClass = '';


    if(this.state.showPersons){

        persons = (
          <div>

              {this.state.persons.map((person, index) => {
                  return (

                          <ErrorHandler key={person.id}>
                              <Person name={person.name}
                                      age={person.age} 
                                      click={() => this.deletePersonHandler(index)}
                                      changed={(event) => this.nameChangedHandler(event, person.id)}
                                      />

                          </ErrorHandler>
                          )
              })}
          </div> 
          );
  
          btnClass = classes.Red;
    }

    const assignedClasses = [];

    if(this.state.persons.length < 3)
    {
      assignedClasses.push(classes.red);
    }

    if(this.state.persons.length <= 1)
    {
        assignedClasses.push(classes.bold);
    }

    return (
      // class can't be used for css because it's used in js, to define the class
      // we need to use react provided keywords
     
      <div className={classes.App}>
          <h1>Hi, I am a react app!</h1>

          <p className={assignedClasses.join(' ')}> The app works</p>

          <br/>

          <button 
              onClick={this.togglePersonsHandler}
              className={btnClass}>Switch Name</button>

          <hr/>

          {persons}
              
          
          <hr/>
          
      </div>

      );


    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I too am a react app.'), React.createElement('h1', null, 'Hi, Am i the next child of div? I sure am.'));

  }
}

// changes to state and state bound props would be reflected by react

// onClick has C in Caps. As opposed to the js onclick

export default App;
