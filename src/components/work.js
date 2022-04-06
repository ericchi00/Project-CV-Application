import React from 'react';

class Work extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<fieldset>
				<legend>Work Experience</legend>
				<label htmlFor="company"></label>
				<input type="text" id="company" placeholder="Company" />
				<label htmlFor="companyTitle"></label>
				<input type="text" id="companyTitle" placeholder="Title" />
				<label htmlFor="workStart"></label>
				<input type="text" id="workStart" placeholder="Start Date" />
				<label htmlFor="workEnd"></label>
				<input type="text" id="workEnd" placeholder="End Date" />
			</fieldset>
		);
	}
}

export default Work;
