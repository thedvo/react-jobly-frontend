import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

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
		<div className="SearchForm mb-4">
			<form className="form-inline" onSubmit={handleSubmit}>
				<label htmlFor="name"></label>
				<input
					className="form-control form-control-lg flex-grow-1"
					id="name"
					name="name"
					type="text"
					placeholder="Enter search term..."
					onChange={handleChange}
					value={formData}
					autoComplete="off"
				/>
				<button className="btn btn-lg btn-primary">Submit</button>
			</form>
		</div>
	);
};

export default SearchForm;
