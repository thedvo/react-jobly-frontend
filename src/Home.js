import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import UserContext from './UserContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';

const Home = () => {
	const { currentUser } = useContext(UserContext);
	console.debug('Homepage', 'currentUser=', currentUser);

	return (
		<div className="Home">
			<div className="container text-center">
				<h1 className="mb-4 fw-bold">Jobly</h1>
				<p className="lead">All the jobs in one, convenient place. </p>
				{currentUser ? (
					<h3>
						Welcome Back, {currentUser.firstName || currentUser.username}!
					</h3>
				) : (
					<p>
						<Link to="/login" className="btn btn-primary fw-bold me-3">
							Login
						</Link>
						<Link to="/signup" className="btn btn-primary fw-bold">
							Signup
						</Link>
					</p>
				)}
			</div>
		</div>
	);
};

export default Home;
