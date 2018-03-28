import React from 'react';

// ES6 equivalent of a function, arrow function
// this always points to the default context
const person = (props) => {
    return(
        <div>
            <p>I'm a person!</p>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
        </div>
    );
};

export default person;


