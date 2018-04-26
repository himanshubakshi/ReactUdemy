import React from 'react';

import './CharComponent.css'

const CharComponent = (props) => {
	return(
		<div className="charComponent" onClick={(event) => props.charClickHandler(props.indexOfChar)}>
			<p>{props.charValue}</p>
		</div>
		);
}

export default CharComponent;