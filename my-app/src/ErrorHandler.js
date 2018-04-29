import React from 'react';

class ErrorHandler extends React.Component{

	state = {
		hasError: false,
		errorMessage: ""
	}

	componentDidCatch(error, info){

		this.setState({
			hasError: true,
			errorMessage: error
		});

		// log error to service
	}

	render(){

		if(this.state.hasError){

		return(
			<div>
				<p>{this.state.errorMessage}</p>
			</div>
			);
		}

		return this.props.children;

	}
}

export default ErrorHandler;