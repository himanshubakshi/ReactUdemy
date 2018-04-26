import React, { Component } from 'react';
import './App.css';

class App extends Component {
  
  state = {
    textLength: 0
  };

  onTextChangeListener = (event) => {
      let textLength = event.target.value.length;

      this.setState({
        textLength: textLength
      });
  }



  render() {
    return (
      <div className="App">
       Assignment 2

        <br/>
        <div>

          <input type="text" 
                  onChange={this.onTextChangeListener}
                  />
          <p>Text Length: {this.state.textLength}</p>

        </div>
      </div>
    );
  }
}

export default App;
