import { cleanup, fireEvent, render } from '@testing-library/react';
import React from 'react';
import App from '../App';
import Education from '../components/Education';

afterEach(cleanup);

test('Check if delete education actually removes it', () => {
	render(<App />);
	const addEducation = document.querySelector('.addSchool');
	fireEvent.click(addEducation);
	fireEvent.click(addEducation);

	const deleteButton = document.querySelectorAll('.delete');
	for (let i = 0; i < deleteButton.length; i += 1) {
		fireEvent.click(deleteButton[i]);
    }
    
    // there is always at least 2 li items
	const list = document.querySelectorAll('li');
	expect(list.length).toBe(2);
});
