import React from 'react';

class Work extends React.Component {
	constructor(props) {
		super(props);
	}

	deleteWork(id) {
		this.props.deleteWork(id);
	}

	render() {
		const { work } = this.props;
		return work.map((index) => (
			<li key={index}>
				<legend>Work Experience</legend>
				<label htmlFor="company"></label>
				<input type="text" id="company" placeholder="Company" />
				<label htmlFor="companyTitle"></label>
				<input type="text" id="companyTitle" placeholder="Title" />
				<label htmlFor="workStart"></label>
				<input type="text" id="workStart" placeholder="Start Date" />
				<label htmlFor="workEnd"></label>
				<input type="text" id="workEnd" placeholder="End Date" />
				<button className='delete' type="button" onClick={this.deleteWork.bind(this, index)}>
					Delete
				</button>
			</li>
		));
	}
}

export default Work;
