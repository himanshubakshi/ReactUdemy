import React, { Component } from 'react';
import './App.css';

import UserInput from './user/UserInput';
import UserOutput from './user/UserOutput';

class App extends Component {

  state = {
        userName: "Himanshu"
      };

  updateUserNameHandler = (event) => {
    this.setState(
      {
          userName: event.target.value
      }
    );
  }

  render() {
    return (
      <div className="App">
          
        <p>Welcome to react assignment</p>

        <UserInput updateUserNameHandler={this.updateUserNameHandler}
                    userName={this.state.userName}/>
       
        <hr/>
       
        <UserOutput userName={this.state.userName} />

        <UserOutput userName={this.state.userName} />
      </div>
    );
  }
}

export default App;
