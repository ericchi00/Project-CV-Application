import React from 'react';
import uniqid from 'uniqid';

class Viewer extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		const { work } = this.props.data;
		return (
			<div className="viewer">
				<div className="personal">
					<h1>{this.props.data.personal.name || 'Full Name'}</h1>
					<ul>
						<li>{this.props.data.personal.phone || '123-456-7890'}</li>
						<li>{this.props.data.personal.email || 'test@email.com'}</li>
					</ul>
				</div>
				<div className="work">
					<h3>Work Experience</h3>
					<ul>
						{work.map((item) => {
							return (
								<li key={uniqid()}>
									<h4>{item.title || 'Developer'}</h4>
									<div className="jobHeading">
										{item.company || 'Google'}
										<span className="year">
											{item.startDate || '2015'}-{item.endDate || '2016'}
										</span>
									</div>
									<div className="responsibilities">
										{item.responsibilities}
									</div>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		);
	}
}

export default Viewer;
