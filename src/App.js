import React from 'react';
import Education from './components/education';
import Personal from './components/personal';
import Work from './components/work';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = '';
	}
	render() {
		return (
			<div>
				<form>
					<Personal />
					<Work />
					<Education />
				</form>
			</div>
		);
	}
}

export default App;
