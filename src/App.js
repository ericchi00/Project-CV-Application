import React, { useState } from 'react';
import Education from './components/Education';
import Personal from './components/Personal';
import Work from './components/Work';
import Viewer from './components/Viewer';
import './styles/app.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const App = () => {
	const [personal, setPersonal] = useState({
		name: '',
		phone: '',
		email: '',
	});
	const [work, setWork] = useState([
		{
			id: Date.now(),
			company: '',
			title: '',
			startDate: '',
			endDate: '',
			responsibilities: '',
		},
	]);
	const [education, setEducation] = useState([
		{
			id: Date.now(),
			university: '',
			degree: '',
			study: '',
			startDate: '',
			endDate: '',
		},
	]);
	const addWork = () => {
		setWork((prevState) => {
			const newWork = {
				id: Date.now(),
				company: '',
				title: '',
				startDate: '',
				endDate: '',
				responsibilities: '',
			};
			return [...prevState, newWork];
		});
	};
	const addEducation = () => {
		setEducation((prevState) => {
			const newEducation = {
				id: Date.now(),
				university: '',
				degree: '',
				study: '',
				startDate: '',
				endDate: '',
			};
			return [...prevState, newEducation];
		});
	};
	const deleteWork = (id) => {
		setWork((work) => work.filter((index) => index !== id));
	};
	const deleteEducation = (id) => {
		setEducation((education) => education.filter((index) => index !== id));
	};
	const handlePersonal = (e) => {
		const { name, value } = e.target;
		setPersonal((prevState) => {
			let newPersonal = { ...prevState, [name]: value };
			return newPersonal;
		});
	};
	const handleEducation = (e, index) => {
		const { name, value } = e.target;

		setEducation((prevState) => {
			return [
				...prevState.slice(0, index),
				{
					...prevState[index],
					[name]: value,
				},
				...prevState.slice(index + 1),
			];
		});
	};
	const handleWork = (e, index) => {
		const { name, value } = e.target;
		setWork((prevState) => {
			return [
				...prevState.slice(0, index),
				{
					...prevState[index],
					[name]: value,
				},
				...prevState.slice(index + 1),
			];
		});
	};
	return (
		<div className="app">
			<div className="formWrapper">
				<Form>
					<legend>CV Builder</legend>
					<fieldset>
						<Personal change={handlePersonal} />
					</fieldset>
					<fieldset>
						<ul className="list-group">
							<Work work={work} deleteWork={deleteWork} change={handleWork} />
							<Button
								className="addWork"
								type="button"
								onClick={addWork}
								variant="success"
							>
								Add Work
							</Button>
						</ul>
					</fieldset>
					<fieldset>
						<ul className="list-group">
							<Education
								education={education}
								deleteEducation={deleteEducation}
								change={handleEducation}
							/>
							<Button
								className="addSchool"
								type="button"
								onClick={addEducation}
								variant="success"
							>
								Add School
							</Button>
						</ul>
					</fieldset>
				</Form>
			</div>
			<Viewer personal={personal} work={work} education={education} />
		</div>
	);
};

// class App extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			work: [
// 				{
// 					company: '',
// 					title: '',
// 					startDate: '',
// 					endDate: '',
// 					responsibilities: '',
// 				},
// 			],
// 			education: [
// 				{
// 					university: '',
// 					degree: '',
// 					study: '',
// 					startDate: '',
// 					endDate: '',
// 				},
// 			],
// 			personal: { name: '', phone: '', email: '' },
// 		};
// 		this.addWork = this.addWork.bind(this);
// 		this.deleteWork = this.deleteWork.bind(this);
// 		this.addEducation = this.addEducation.bind(this);
// 		this.deleteEducation = this.deleteEducation.bind(this);
// 		this.handlePersonal = this.handlePersonal.bind(this);
// 		this.handleEducation = this.handleEducation.bind(this);
// 		this.handleWork = this.handleWork.bind(this);
// 	}

// 	addWork() {
// 		this.setState((prevState) => ({
// 			work: [
// 				...prevState.work,
// 				{
// 					id: Date.now(),
// 					company: '',
// 					title: '',
// 					startDate: '',
// 					endDate: '',
// 					responsibilities: '',
// 				},
// 			],
// 		}));
// 	}

// 	deleteWork(id) {
// 		this.setState((prevState) => ({
// 			work: prevState.work.filter((index) => index !== id),
// 		}));
// 	}

// 	addEducation() {
// 		this.setState((prevState) => ({
// 			education: [
// 				...prevState.education,
// 				{
// 					id: Date.now(),
// 					university: '',
// 					degree: '',
// 					study: '',
// 					startDate: '',
// 					endDate: '',
// 				},
// 			],
// 		}));
// 	}

// 	deleteEducation(id) {
// 		this.setState((prevState) => ({
// 			education: prevState.education.filter((index) => index !== id),
// 		}));
// 	}

// 	handlePersonal(e) {
// 		const { name, value } = e.target;
// 		this.setState((prevState) => ({
// 			...prevState,
// 			personal: {
// 				...prevState.personal,
// 				[name]: value,
// 			},
// 		}));
// 	}

// 	handleEducation(e, index) {
// 		const { name, value } = e.target;
// 		this.setState((prevState) => ({
// 			...prevState,
// 			education: [
// 				...prevState.education.slice(0, index),
// 				{
// 					...prevState.education[index],
// 					[name]: value,
// 				},
// 				...prevState.education.slice(index + 1),
// 			],
// 		}));
// 	}

// 	handleWork(e, index) {
// 		const { name, value } = e.target;
// 		this.setState((prevState) => ({
// 			...prevState,
// 			work: [
// 				...prevState.work.slice(0, index),
// 				{
// 					...prevState.work[index],
// 					[name]: value,
// 				},
// 				...prevState.work.slice(index + 1),
// 			],
// 		}));
// 	}

// 	render() {
// 		return (
// 			<div className="app">
// 				<div className="formWrapper">
// 					<Form>
// 						<legend>CV Builder</legend>
// 						<fieldset>
// 							<Personal change={this.handlePersonal} />
// 						</fieldset>
// 						<fieldset>
// 							<ul className="list-group">
// 								<Work
// 									work={this.state.work}
// 									deleteWork={this.deleteWork}
// 									change={this.handleWork}
// 								/>
// 								<Button
// 									className="addWork"
// 									type="button"
// 									onClick={this.addWork}
// 									variant="success"
// 								>
// 									Add Work
// 								</Button>
// 							</ul>
// 						</fieldset>
// 						<fieldset>
// 							<ul className="list-group">
// 								<Education
// 									education={this.state.education}
// 									deleteEducation={this.deleteEducation}
// 									change={this.handleEducation}
// 								/>
// 								<Button
// 									className="addSchool"
// 									type="button"
// 									onClick={this.addEducation}
// 									variant="success"
// 								>
// 									Add School
// 								</Button>
// 							</ul>
// 						</fieldset>
// 					</Form>
// 				</div>
// 				<Viewer data={this.state} />
// 			</div>
// 		);
// 	}
// }

export default App;
