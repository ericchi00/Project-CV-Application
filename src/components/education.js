import React from 'react';

class Education extends React.Component {
	constructor(props) {
		super(props);
	}

	deleteEducation(index) {
		this.props.deleteEducation(index);
	}

	render() {
		const { education } = this.props;
		return education.map((index) => (
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
				<button className='delete' type="button" onClick={this.deleteEducation.bind(this, index)}>
					Delete
				</button>
			</li>
		));
	}
}

export default Education;
