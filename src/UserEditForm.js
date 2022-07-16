import React, { useState, useContext } from 'react';
import UserContext from './UserContext';
import JoblyApi from './api';

/**  
 Form to Edit Profile for a logged in user.

 	- Displays a form with inputs to change details of a user's profile (firstName, lastName, email). 
 
 	- Includes a password input to confirm changes. 

*/
const UserEditForm = () => {
	const { currentUser, setCurrentUser } = useContext(UserContext);
	// import currentUser so that we can use the logged in user's info as the default placeholders for the form.
	// import setCurrentUser to update currentUser once the form is submitted

	const INITIAL_STATE = {
		firstName: currentUser.firstName,
		lastName: currentUser.lastName,
		email: currentUser.email,
		username: currentUser.username,
		password: '',
		// leave password empty because the user will enter it themselves to confirm changes at submission
	};

	const [formData, setFormData] = useState(INITIAL_STATE);
	const [formErrors, setFormErrors] = useState([]);

	console.debug(
		'ProfileForm',
		'currentUser=',
		currentUser,
		'formData=',
		formData,
		'formErrors=',
		formErrors
	);

	function handleChange(e) {
		const { name, value } = e.target;

		setFormData((formData) => ({
			...formData,
			[name]: value,
		}));
		setFormErrors([]);
		// empties formErrors since use is making new input
	}

	async function handleSubmit(e) {
		e.preventDefault();

		// create separate variables for profile form data and username so that we can pass it to the API request (saveProfile)
		let profileData = {
			firstName: formData.firstName,
			lastName: formData.lastName,
			email: formData.email,
			password: formData.password,
		};

		let username = formData.username;
		let updatedUser;

		try {
			updatedUser = await JoblyApi.saveProfile(username, profileData);
		} catch (err) {
			setFormErrors(err);
			console.log('action failed. try again!');
			return;
		}

		// sets formData to the new updated user information
		// sets formErrors to empty array to reset
		// set currentUser to be the updated user
		setFormData((formData) => ({ ...formData, password: '' }));
		setFormErrors([]);
		setCurrentUser(updatedUser);
		console.log('SUCCESS!', updatedUser);
	}

	return (
		<div>
			<h2>Profile</h2>
			<form onSubmit={handleSubmit}>
				<label>Username</label>
				<p>{formData.username}</p>
				<label htmlFor="firstName">First Name</label>
				<input
					name="firstName"
					type="text"
					value={formData.firstName}
					onChange={handleChange}
				/>
				<label htmlFor="lastName">Last Name</label>
				<input
					name="lastName"
					type="text"
					value={formData.lastName}
					onChange={handleChange}
				/>
				<label htmlFor="email">Email</label>
				<input
					name="email"
					type="text"
					value={formData.email}
					onChange={handleChange}
				/>
				<label htmlFor="password">Confirm password to make changes: </label>
				<input
					name="password"
					type="password"
					value={formData.password}
					onChange={handleChange}
				/>
				<button>Save Changes</button>
			</form>
		</div>
	);
};

export default UserEditForm;
