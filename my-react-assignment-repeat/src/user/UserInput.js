import React, {Component} from 'react';

const UserInput = (props) => {

	return (
			<div>
				<input type='text' 
						onChange={props.updateUserNameHandler} 
						value={props.userName}/>
			</div>
			);
};

export default UserInput;
