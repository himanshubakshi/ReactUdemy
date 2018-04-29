import React from 'react';

class ErrorHandler extends React.Component{

	state = {
		hasError: false
	}

	componentDidCatch(error, info){

		this.setState({
			hasError: true
		});

		// log error to service
	}

	render(){

		if(this.state.hasError){

		return(
			<div>
				<p>An error occured in the project</p>
			</div>
			);
		}

		return this.props.children;

	}
}

export default ErrorHandler;