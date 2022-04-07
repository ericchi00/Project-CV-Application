import { cleanup, fireEvent, render } from '@testing-library/react';
import React from 'react';
import App from '../App';

afterEach(cleanup);
test('Add work & Add education are actually adding items to list', () => {
	render(<App />);
	const addWork = document.querySelector('.addWork');
	const addEducation = document.querySelector('.addSchool');

	fireEvent.click(addWork);
	fireEvent.click(addEducation);

	const workList = document.querySelectorAll('li');
	expect(workList.length).toEqual(4);
});
