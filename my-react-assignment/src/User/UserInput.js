import React from 'react';

const UserInput = (props) => {
    return(
            <div>
                <p>Input Component</p>

                <input 
                    type='text'
                    onChange={props.usernameChangeHandler} 
                    value={props.username}/>
            </div>   
        );
    
};

export default UserInput;