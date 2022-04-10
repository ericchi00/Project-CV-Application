import React from 'react';

function Personal(props) {
	return (
		<div className="personal">
			<legend>Personal Information</legend>
			<input
				type="text"
				id="name"
				placeholder="Full Name"
				onChange={props.change}
				name="name"
			/>
			<input
				type="tel"
				id="phone"
				placeholder="Phone Number"
				onChange={props.change}
				name="phone"
			/>
			<input
				type="email"
				id="last"
				placeholder="Email"
				onChange={props.change}
				name="email"
			/>
		</div>
	);
}

// class Personal extends React.Component {
// 	render() {
// 		return (
// 			<div className="personal">
// 				<legend>Personal Information</legend>
// 				<input
// 					type="text"
// 					id="name"
// 					placeholder="Full Name"
// 					onChange={this.props.change}
// 					name="name"
// 				/>
// 				<input
// 					type="tel"
// 					id="phone"
// 					placeholder="Phone Number"
// 					onChange={this.props.change}
// 					name="phone"
// 				/>
// 				<input
// 					type="email"
// 					id="last"
// 					placeholder="Email"
// 					onChange={this.props.change}
// 					name="email"
// 				/>
// 			</div>
// 		);
// 	}
// }

export default Personal;
