import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Label, Input, Button } from 'reactstrap';

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
			<Form onSubmit={handleSubmit} style={{ display: 'flex' }}>
				<Label htmlFor="name"></Label>
				<Input
					id="name"
					name="name"
					type="text"
					style={{ height: '3em' }}
					placeholder="Enter search term..."
					onChange={handleChange}
					value={formData}
					autoComplete="off"
				/>
				<Button className="btn btn-lg" color="primary">
					Submit
				</Button>
			</Form>
		</div>
	);
};

export default SearchForm;
