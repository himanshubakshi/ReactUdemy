import React from 'react';

const ValidationComponent = (props) => {

	return(
		<div>

			{ props.textLength > 0 ? 
				<div>
					<p>{props.textLength > 5 ? "Text Long Enough" : "Text too short"}</p>
				</div>
				: <p></p>
			}
		</div>
		);
}

export default ValidationComponent;