import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import UserContext from './UserContext';

const Home = () => {
	const { currentUser } = useContext(UserContext);

	console.debug('Homepage', 'currentUser=', currentUser);
	return (
		<div>
			<h1>Jobly</h1>
			<p>All the jobs in one, convenient place. </p>
			{currentUser ? (
				<h3>Welcome Back, {currentUser.first_name || currentUser.username}</h3>
			) : (
				<p>
					<Link to="/login">Login</Link>
					<Link to="/signup">Signup</Link>
				</p>
			)}
		</div>
	);
};

export default Home;
