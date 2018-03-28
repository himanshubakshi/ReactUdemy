import React, { Component } from 'react';
import UserInput from './User/UserInput';
import UserOutput from './User/UserOutput';

import './App.css';

class App extends Component {

  state = {
    username: "Himanshu"
  };

  usernameChangeHandler = (event) => {
      this.setState(
        {
          username: event.target.value
        }
      );
  };

  render() {
    return (
      <div className="App">
          <UserInput  
            usernameChangeHandler = {this.usernameChangeHandler}
            username={this.state.username}
            />
          <br/>
          <hr/>
          <UserOutput 
            username = {this.state.username}
                />
          <UserOutput username={"Bakshi"}/>

      </div>
    );
  }
}

export default App;
