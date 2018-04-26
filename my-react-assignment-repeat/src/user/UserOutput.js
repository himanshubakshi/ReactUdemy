import React, {Component} from "react";

import './UserOutput.css'

const UserOutput = (props) => {
		return (
			<div className="UserOutput">
				<p>
					Username: {props.userName}
				</p>

				<p>
					Output para 2
				</p>


			</div>
			);
	
};

export default UserOutput;

