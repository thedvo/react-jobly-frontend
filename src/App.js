import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

import JoblyApi from './api';
import Nav from './Nav';
import Routes from './Routes';
import jwt from 'jsonwebtoken';
import UserContext from './UserContext';
import useLocalStorage from './hooks/useLocalStorage';

/**
 - App component (top of hierarchy) renders Nav and Routes components
 - declares state which will be passed down to child props (token, currentUser)

 Functions to be passed as props: 
 --> signup() [passed to Routes --> SignUpForm component] 
 --> login()  [passed to Routes --> LoginForm component]
 --> logout() [passed to Nav]

Use useEffect to call the backend to get information on the newly-logged-in-user and stire it in currentUser state whenever the state of token changes. 

 */

// Key name for storing token in localStorage for "remember me" re-login
export const TOKEN_STORAGE_ID = 'jobly-token';

function App() {
	const [token, setToken] = useLocalStorage(null);
	const [currentUser, setCurrentUser] = useState(null);
	const [isLoading, setIsLoading] = useState(TOKEN_STORAGE_ID);
	// const [isLoggedIn, setIsLoggedIn] = useState(false);

	console.log(
		'App',
		'isLoading=',
		isLoading,
		'currentUser=',
		currentUser,
		'token=',
		token
	);

	useEffect(
		function loadInfo() {
			console.debug('App useEffect loadUserInfo', 'token=', token);

			async function getCurrentUser() {
				if (token) {
					try {
						let { username } = jwt.decode(token);

						// place token on API class so it ca be used to call the API
						JoblyApi.token = token;
						let currentUser = await JoblyApi.getCurrentUser(username);
						setCurrentUser(currentUser);
					} catch (err) {
						console.error(err);
						console.error('App loadUserInfo: problem loading', err);
						setCurrentUser(null);
					}
				}
				setIsLoading(false);
			}
			setIsLoading(true);
			getCurrentUser();
		},
		[token]
	);

	// handles signup
	async function signup(data) {
		try {
			let token = await JoblyApi.signup(data);
			setToken(token);
			// setIsLoggedIn(true);
			return { success: true };
		} catch (err) {
			console.error('signup failed', err);
			return { success: false, err };
		}
	}

	// handles login
	async function login(data) {
		try {
			let token = await JoblyApi.login(data);
			setToken(token);
			// setIsLoggedIn(true);
			return { success: true };
		} catch (err) {
			console.error('login failed', err);
			return { success: false, err };
		}
	}

	// handles user logout
	async function logout() {
		setCurrentUser(null);
		setToken(null);
		// setIsLoggedIn(false);
	}

	if (isLoading) {
		return <p>Loading &hellip;</p>;
	}

	return (
		<div className="App">
			<BrowserRouter>
				<UserContext.Provider value={{ currentUser, setCurrentUser }}>
					<div>
						<Nav logout={logout} />
						{/* isLoggedIn={isLoggedIn} */}
						<Routes login={login} signup={signup} />
					</div>
				</UserContext.Provider>
			</BrowserRouter>
		</div>
	);
}

export default App;
