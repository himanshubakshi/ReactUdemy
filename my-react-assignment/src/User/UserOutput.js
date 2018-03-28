import React from 'react';

const UserOutput = (props) => {
    return(
        <div>
            <p>Output Component</p>

            <p>Username: {props.username}</p>

            <p>Para 2</p>
        </div> 
    );
};

export default UserOutput;