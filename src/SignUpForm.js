import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const SignUpForm = ({ signup }) => {
	const INITIAL_STATE = {
		username: '',
		password: '',
		firstName: '',
		lastName: '',
		email: '',
	};

	const [formData, setFormData] = useState(INITIAL_STATE);
	const [formErrors, setFormErrors] = useState([]);
	const history = useHistory();

	console.debug(
		'SignupForm',
		'signup=',
		typeof signup,
		'formData=',
		formData,
		'formErrors=',
		formErrors
	);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((formData) => ({ ...formData, [name]: value }));
	};

	async function handleSubmit(e) {
		e.preventDefault();
		let res = await signup(formData);
		if (res.success) {
			history.push('/companies');
		} else {
			setFormErrors(res.errors);
		}
	}

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<label htmlFor="username">Username</label>
				<input
					id="username"
					name="username"
					type="text"
					onChange={handleChange}
					value={formData.username}
					autoComplete="off"
				/>
				<label htmlFor="password">Password</label>
				<input
					id="password"
					name="password"
					type="text"
					onChange={handleChange}
					value={formData.password}
					autoComplete="off"
				/>
				<label htmlFor="firstName">First Name</label>
				<input
					id="firstName"
					name="firstName"
					type="text"
					onChange={handleChange}
					value={formData.firstName}
					autoComplete="off"
				/>
				<label htmlFor="lastName">Last Name</label>
				<input
					id="lastName"
					name="lastName"
					type="text"
					onChange={handleChange}
					value={formData.lastName}
					autoComplete="off"
				/>
				<label htmlFor="email">Email</label>
				<input
					id="email"
					name="email"
					type="text"
					onChange={handleChange}
					value={formData.email}
					autoComplete="off"
				/>
				<button>Submit</button>
			</form>
		</div>
	);
};

export default SignUpForm;
