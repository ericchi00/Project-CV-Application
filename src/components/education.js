import React from 'react';

class Education extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			item: {
				text: '',
			},
			items: [],
		};
	}
	render() {
		const { education } = this.props;
		return education.map((item, index) => (
			<li key={index}>
				<legend>Education</legend>
				<label htmlFor="school"></label>
				<input type="text" id="school" placeholder="University" />
				<label htmlFor="degree"></label>
				<input type="text" id="degree" placeholder="Degree" />
				<label htmlFor="schoolStart"></label>
				<input type="text" id="study" placeholder="School of Study" />
				<label htmlFor="study"></label>
				<input type="text" id="schoolStart" placeholder="Start Date" />
				<label htmlFor="schoolEnd"></label>
				<input type="text" id="schoolEnd" placeholder="End Date" />
				<button type="button">Delete Work</button>
			</li>
		));
	}
}

export default Education;
