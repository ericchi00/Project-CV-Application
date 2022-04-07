import React from 'react';
import Education from './components/Education';
import Personal from './components/Personal';
import Work from './components/Work';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			work: [],
			workCount: 0,
			education: [],
			educationCount: 0,
		};
		this.addWork = this.addWork.bind(this);
		this.addEducation = this.addEducation.bind(this);
	}

	addWork() {
		this.setState({
			workCount: this.state.workCount + 1,
			work: this.state.work.concat(this.state.workCount),
		});
	}

	addEducation() {
		this.setState({
			educationCount: this.state.educationCount + 1,
			education: this.state.education.concat(this.state.educationCount),
		});
	}

	render() {
		return (
			<div>
				<form>
					<fieldset>
						<Personal />
					</fieldset>
					<fieldset>
						<ul>
							<li>
								<legend>Work Experience</legend>
								<label htmlFor="company"></label>
								<input type="text" id="company" placeholder="Company" />
								<label htmlFor="companyTitle"></label>
								<input type="text" id="companyTitle" placeholder="Title" />
								<label htmlFor="workStart"></label>
								<input type="text" id="workStart" placeholder="Start Date" />
								<label htmlFor="workEnd"></label>
								<input type="text" id="workEnd" placeholder="End Date" />
							</li>
							<Work work={this.state.work} />
							<button type="button" onClick={this.addWork}>
								Add Work
							</button>
						</ul>
					</fieldset>
					<fieldset>
						<ul>
							<li>
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
							</li>
							<Education education={this.state.education} />
							<button type="button" onClick={this.addEducation}>
								Add School
							</button>
						</ul>
					</fieldset>
					<button type="reset">Reset</button>
				</form>
			</div>
		);
	}
}

export default App;
