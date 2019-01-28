import React from 'react';
import {Component} from 'react';




class LoadingIcon extends Component {
	render() {

		return (
			<div className="spinner">
			  <div className="double-bounce1"></div>
			  <div className="double-bounce2"></div>
			</div>
		);
	}
}

export default LoadingIcon;
