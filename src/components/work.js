import React from 'react';

class Work extends React.Component {
	deleteWork(id) {
		this.props.deleteWork(id);
	}

	render() {
		const { work, change } = this.props;
		return work.map((item, index) => (
			<li key={index}>
				<legend>Work Experience</legend>
				<label htmlFor="company"></label>
				<input
					type="text"
					id="company"
					placeholder="Company"
					name="company"
					onChange={(e) => change(e, index)}
				/>
				<label htmlFor="companyTitle"></label>
				<input
					type="text"
					id="companyTitle"
					placeholder="Title"
					name="title"
					onChange={(e) => change(e, index)}
				/>
				<label htmlFor="workStart"></label>
				<input
					type="text"
					id="workStart"
					placeholder="Start Date"
					name="startDate"
					onChange={(e) => change(e, index)}
				/>
				<label htmlFor="workEnd"></label>
				<input
					type="text"
					id="workEnd"
					placeholder="End Date"
					name="endDate"
					onChange={(e) => change(e, index)}
				/>
				<label htmlFor="workDescription"></label>
				<input
					type="text"
					id="workDescription"
					placeholder="Job Responsibilities"
					name="responsibilities"
					onChange={(e) => change(e, index)}
				/>
				{work.length > 1 && (
					<button
						className="delete"
						type="button"
						onClick={this.deleteWork.bind(this, item)}
					>
						Delete
					</button>
				)}
			</li>
		));
	}
}

export default Work;
