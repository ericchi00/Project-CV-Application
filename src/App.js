import React from 'react';
import Education from './components/Education';
import Personal from './components/Personal';
import Work from './components/Work';
import Viewer from './components/Viewer';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			work: [
				{
					id: Date.now(),
					company: '',
					title: '',
					startDate: '',
					endDate: '',
					responsibilities: '',
				},
			],
			education: [
				{
					id: Date.now(),
					university: '',
					degree: '',
					study: '',
					startDate: '',
					endDate: '',
				},
			],
			personal: { name: '', phone: '', email: '' },
		};
		this.addWork = this.addWork.bind(this);
		this.deleteWork = this.deleteWork.bind(this);
		this.addEducation = this.addEducation.bind(this);
		this.deleteEducation = this.deleteEducation.bind(this);
		this.handlePersonal = this.handlePersonal.bind(this);
		this.handleEducation = this.handleEducation.bind(this);
		this.handleWork = this.handleWork.bind(this);
	}

	addWork() {
		this.setState((prevState) => ({
			work: [
				...prevState.work,
				{
					id: Date.now(),
					company: '',
					title: '',
					startDate: '',
					endDate: '',
					responsibilities: '',
				},
			],
		}));
	}

	deleteWork(id) {
		this.setState((prevState) => ({
			work: prevState.work.filter((index) => index !== id),
		}));
	}

	addEducation() {
		this.setState((prevState) => ({
			education: [
				...prevState.education,
				{
					id: Date.now(),
					university: '',
					degree: '',
					study: '',
					startDate: '',
					endDate: '',
				},
			],
		}));
	}

	deleteEducation(id) {
		this.setState((prevState) => ({
			education: prevState.education.filter((index) => index !== id),
		}));
	}

	handlePersonal(e) {
		const { name, value } = e.target;
		this.setState((prevState) => ({
			...prevState,
			personal: {
				...prevState.personal,
				[name]: value,
			},
		}));
	}

	handleEducation(e, index) {
		const { name, value } = e.target;
		this.setState((prevState) => ({
			...prevState,
			education: [
				...prevState.education.slice(0, index),
				{
					...prevState.education[index],
					[name]: value,
				},
				...prevState.education.slice(index + 1),
			],
		}));
	}

	handleWork(e, index) {
		const { name, value } = e.target;
		this.setState((prevState) => ({
			...prevState,
			work: [
				...prevState.work.slice(0, index),
				{
					...prevState.work[index],
					[name]: value,
				},
				...prevState.work.slice(index + 1),
			],
		}));
	}

	render() {
		return (
			<div className="app">
				<div className="formWrapper">
					<form onSubmit={this.onSubmit}>
						<legend>CV Builder</legend>
						<fieldset>
							<Personal change={this.handlePersonal} />
						</fieldset>
						<fieldset>
							<ul>
								<Work
									work={this.state.work}
									deleteWork={this.deleteWork}
									change={this.handleWork}
								/>
								<button
									className="addWork"
									type="button"
									onClick={this.addWork}
								>
									Add Work
								</button>
							</ul>
						</fieldset>
						<fieldset>
							<ul>
								<Education
									education={this.state.education}
									deleteEducation={this.deleteEducation}
									change={this.handleEducation}
								/>
								<button
									className="addSchool"
									type="button"
									onClick={this.addEducation}
								>
									Add School
								</button>
							</ul>
						</fieldset>
						<button type="submit">Submit</button>
					</form>
				</div>
				<Viewer data={this.state} />
			</div>
		);
	}
}

export default App;
