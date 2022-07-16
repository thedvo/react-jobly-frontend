import React, { useState } from 'react';

const SearchForm = ({ makeSearch }) => {
	const [formData, setFormData] = useState('');

	const handleChange = (e) => {
		setFormData(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		makeSearch(formData.trim());
	};

	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor="name"></label>
			<input
				id="name"
				name="name"
				type="text"
				placeholder="Enter search term..."
				onChange={handleChange}
				value={formData}
				autoComplete="off"
			/>
			<button>Submit</button>
		</form>
	);
};

export default SearchForm;
