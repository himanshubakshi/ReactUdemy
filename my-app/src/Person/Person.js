import React from 'react';

import './Person.css';

// stateless component
// use wherever possible, 
// can't modify app state
// only few selected components (a.k.a containers??**) should modify state

// ES6 equivalent of a function, arrow function
// this always points to the default context
const person = (props) => {
    return(
        <div className="Person">
            <p>I'm a person!</p>
            <p onClick={props.click}>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>My son is {Math.floor(Math.random() * 20)} years old</p>

            <p>{props.children}</p>

            <input type="text" onChange={props.changed} value={props.name} />

        </div>
    );
};

// {} inside html (read jsx defined html in the retuen statement) can execute one line statements, function calls. 
// We can't create classes and do other complex stuff...}

export default person;


