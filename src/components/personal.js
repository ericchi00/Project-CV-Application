import React from 'react';

class Personal extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<fieldset>
				<legend>Personal Information</legend>
				<label htmlFor="name"></label>
				<input type="text" id="name" placeholder="Full Name" />
				<label htmlFor="phone"></label>
				<input type="tel" id="phone" placeholder="Phone Number" />
				<label htmlFor="email"></label>
				<input type="email" id="last" placeholder="Email" />
			</fieldset>
		);
	}
}

export default Personal;
