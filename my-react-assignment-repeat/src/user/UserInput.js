import React, {Component} from 'react';

const UserInput = (props) => {

	const inputStyle = {
		border: '2px solid red'

	};

	return (
			<div>
				<input type='text' 
						style={inputStyle}
						onChange={props.updateUserNameHandler} 
						value={props.userName}/>
			</div>
			);
};

export default UserInput;
