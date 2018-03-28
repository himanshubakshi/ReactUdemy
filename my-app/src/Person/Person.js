import React from 'react';

// ES6 equivalent of a function, arrow function
// this always points to the default context
const person = (props) => {
    return(
        <div>
            <p>I'm a person!</p>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>My son is {Math.floor(Math.random() * 20)} years old</p>

            <p>{props.children}</p>


        </div>
    );
};

// {} inside html (read jsx defined html in the retuen statement) can execute one line statements, function calls. 
// We can't create classes and do other complex stuff...}

export default person;


