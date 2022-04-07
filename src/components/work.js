import React from 'react';

class Work extends React.Component {
	constructor(props) {
		super(props);
		this.removeWork = this.removeWork.bind(this);
	}

	removeWork() {}

	render() {
		const { work } = this.props;
		return work.map((item, index) => (
			<li key={index}>
				<div className="work">
					<legend>Work Experience</legend>
					<label htmlFor="company"></label>
					<input type="text" id="company" placeholder="Company" />
					<label htmlFor="companyTitle"></label>
					<input type="text" id="companyTitle" placeholder="Title" />
					<label htmlFor="workStart"></label>
					<input type="text" id="workStart" placeholder="Start Date" />
					<label htmlFor="workEnd"></label>
					<input type="text" id="workEnd" placeholder="End Date" />
					<button type="button">Delete Work</button>
				</div>
			</li>
		));
	}
}

export default Work;
