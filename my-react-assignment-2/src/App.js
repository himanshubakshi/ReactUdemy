import React, { Component } from 'react';
import ValidationComponent from './Components/ValidationComponent';
import CharComponent       from './Components/CharComponent';

import './App.css';


class App extends Component {
  
  state = {
    textLength: 0,
    text: ''
  };

  onTextChangeListener = (event) => {
      let textLength = event.target.value.length;

      this.setState({
        textLength: textLength,
        text: event.target.value
      });
  };

  charClickHandler = (indexOfChar) => {

      console.log(indexOfChar);



      let splitArray = this.state.text.split('');      
      splitArray.splice(indexOfChar, 1);
      
      let updatedText = splitArray.join('');
      console.log(updatedText);

      this.setState({
        text: updatedText,
      });
  };


  render() {

    return (
      <div className="App">
         Assignment 2

          <br/>
          <div>

            <input type="text" 
                    onChange={this.onTextChangeListener}
                    value={this.state.text}
                    />
            <p>Text Length: {this.state.textLength}</p>

          </div>

          <div>
              <ValidationComponent textLength={this.state.textLength}/>
          </div>

          <div> 

              {this.state.text.split("").map((value, index) => {
                return  <CharComponent charValue={value}
                                        indexOfChar={index} 
                                        key={index}
                                        charClickHandler={(indexOfChar) => this.charClickHandler(indexOfChar)}/>
              })}
             
          </div>
      </div>
    );
  }
}

export default App;
