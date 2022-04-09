import React from 'react';
import uniqid from 'uniqid';
import '../styles/viewer.css';

class Viewer extends React.Component {
	render() {
		const { work, education } = this.props.data;
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
										{item.responsibilities ||
											'Cupidatat sunt anim incididunt nisi labore sunt nulla Lorem elit irure. Aliquip quis excepteur et nostrud enim irure nostrud officia. Et deserunt et aliquip voluptate elit cupidatat. Adipisicing enim minim do anim eiusmod est. Irure laboris anim voluptate proident. Cillum reprehenderit est magna minim. Nostrud ex aute laborum ea irure amet ea ipsum ut non minim anim nisi.'}
									</div>
								</li>
							);
						})}
					</ul>

					<div className="education">
						<h3>Education</h3>
						<ul>
							{education.map((item) => {
								return (
									<li key={uniqid()}>
										<h4>
											{`${item.study}` || 'Computer Science'}&nbsp;
											{item.degree || 'B.S.'}
										</h4>
										<div className="schoolHeading">
											{item.university || 'Harvard University'}&nbsp;
											<span className="year">
												{item.startDate || '2028'}|{item.endDate || '2030'}
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
			</div>
		);
	}
}

export default Viewer;
