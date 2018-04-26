import React, { Component } from 'react';
import ValidationComponent from './Components/ValidationComponent'
import CharComponent       from './Components/CharComponent'
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

  charClickHandler = (event, indexOfChar) => {

      console.log(indexOfChar);

      const enteredText = this.state.text;

      let newValue = enteredText.split('').map((value, index) => { 
        return  (index != indexOfChar) ? value : null
      }).join('');


      console.log(newValue);

      this.setState({
        text: newValue,
        textLength: newValue.length
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
                                        charClickHandler={(event, indexOfChar) => this.charClickHandler(event, indexOfChar)}/>
              })}


             
          </div>
      </div>
    );
  }
}

export default App;
