import React from 'react';

class Education extends React.Component {
	deleteEducation(index) {
		this.props.deleteEducation(index);
	}

	render() {
		const { education, change } = this.props;
		return education.map((item, index) => (
			<li key={index}>
				<legend>Education</legend>
				<label htmlFor="school"></label>
				<input
					type="text"
					id="school"
					placeholder="University"
					onChange={(e) => change(e, index)}
				/>
				<label htmlFor="degree"></label>
				<input
					type="text"
					id="degree"
					placeholder="Degree"
					onChange={(e) => change(e, index)}
				/>
				<label htmlFor="schoolStart"></label>
				<input
					type="text"
					id="study"
					placeholder="School of Study"
					onChange={(e) => change(e, index)}
				/>
				<label htmlFor="study"></label>
				<input
					type="text"
					id="schoolStart"
					placeholder="Start Date"
					onChange={(e) => change(e, index)}
				/>
				<label htmlFor="schoolEnd"></label>
				<input
					type="text"
					id="schoolEnd"
					placeholder="End Date"
					onChange={(e) => change(e, index)}
				/>
				{education.length > 1 && (
					<button
						className="delete"
						type="button"
						onClick={this.deleteEducation.bind(this, item)}
					>
						Delete
					</button>
				)}
			</li>
		));
	}
}

export default Education;
