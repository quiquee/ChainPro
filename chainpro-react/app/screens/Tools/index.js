import React from 'react';
import {Component} from 'react';




class Tools extends Component {
	render() {

    const Tools = () => (
      <div className="left-tools">
				<div className="tool-buttons">
        	<input type="button" className="tool-button" value="New Division"/>
        	<input type="button" className="tool-button" value="Manage Division"/>
        	<input type="button" className="tool-button" value="Transaction History"/>
				</div>
		  </div>
    );

		return (
      <Tools/>
		);
	}
}

export default Tools;
