import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const LoginForm = ({ login }) => {
	const INITIAL_STATE = {
		username: 'danvo',
		password: 'hello',
	};

	const [formData, setFormData] = useState(INITIAL_STATE);
	const [formErrors, setFormErrors] = useState([]);
	const history = useHistory();

	console.debug(
		'LoginForm',
		'login=',
		typeof login,
		'formData=',
		formData,
		'formErrors',
		formErrors
	);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((formData) => ({ ...formData, [name]: value }));
	};

	async function handleSubmit(e) {
		e.preventDefault();
		let res = await login(formData);
		if (res.success) {
			history.push('/companies');
		} else {
			setFormErrors(res.errors);
		}
	}

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<label htmlFor="name">Username</label>
				<input
					id="username"
					name="username"
					type="text"
					onChange={handleChange}
					value={formData.username}
					required
				/>
				<label htmlFor="password">Password</label>
				<input
					id="password"
					name="password"
					type="text"
					onChange={handleChange}
					value={formData.password}
					required
				/>
				<button>Submit</button>
			</form>
		</div>
	);
};

export default LoginForm;
