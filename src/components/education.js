import React from 'react';
import Button from 'react-bootstrap/Button';

function Education(props) {
	const { education, change, deleteEducation } = props;
	return education.map((item, index) => (
		<li key={item.id}>
			<legend>Education</legend>
			<label htmlFor="school"></label>
			<input
				type="text"
				id="school"
				placeholder="University"
				name="university"
				onChange={(e) => change(e, index)}
			/>
			<label htmlFor="degree"></label>
			<input
				type="text"
				id="degree"
				placeholder="Degree"
				name="degree"
				onChange={(e) => change(e, index)}
			/>
			<label htmlFor="schoolStart"></label>
			<input
				type="text"
				id="study"
				placeholder="School of Study"
				name="study"
				onChange={(e) => change(e, index)}
			/>
			<label htmlFor="study"></label>
			<input
				type="text"
				id="schoolStart"
				placeholder="Start Date"
				name="startDate"
				onChange={(e) => change(e, index)}
			/>
			<label htmlFor="schoolEnd"></label>
			<input
				type="text"
				id="schoolEnd"
				placeholder="End Date"
				name="endDate"
				onChange={(e) => change(e, index)}
			/>
			{education.length > 1 && (
				<Button
					className="delete"
					type="button"
					onClick={() => deleteEducation(item)}
					variant="danger"
				>
					Delete
				</Button>
			)}
		</li>
	));
}

// class Education extends React.Component {
// 	deleteEducation(index) {
// 		this.props.deleteEducation(index);
// 	}

// 	render() {
// 		const { education, change } = this.props;
// 		return education.map((item, index) => (
// 			<li key={index}>
// 				<legend>Education</legend>
// 				<label htmlFor="school"></label>
// 				<input
// 					type="text"
// 					id="school"
// 					placeholder="University"
// 					name="university"
// 					onChange={(e) => change(e, index)}
// 				/>
// 				<label htmlFor="degree"></label>
// 				<input
// 					type="text"
// 					id="degree"
// 					placeholder="Degree"
// 					name="degree"
// 					onChange={(e) => change(e, index)}
// 				/>
// 				<label htmlFor="schoolStart"></label>
// 				<input
// 					type="text"
// 					id="study"
// 					placeholder="School of Study"
// 					name="study"
// 					onChange={(e) => change(e, index)}
// 				/>
// 				<label htmlFor="study"></label>
// 				<input
// 					type="text"
// 					id="schoolStart"
// 					placeholder="Start Date"
// 					name="startDate"
// 					onChange={(e) => change(e, index)}
// 				/>
// 				<label htmlFor="schoolEnd"></label>
// 				<input
// 					type="text"
// 					id="schoolEnd"
// 					placeholder="End Date"
// 					name="endDate"
// 					onChange={(e) => change(e, index)}
// 				/>
// 				{education.length > 1 && (
// 					<Button
// 						className="delete"
// 						type="button"
// 						onClick={this.deleteEducation.bind(this, item)}
// 						variant="danger"
// 					>
// 						Delete
// 					</Button>
// 				)}
// 			</li>
// 		));
// 	}
// }

export default Education;
