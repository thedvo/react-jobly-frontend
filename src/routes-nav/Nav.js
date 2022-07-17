import React, { useContext } from 'react';
import { NavLink, Link } from 'react-router-dom';
import UserContext from '../UserContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Nav.css';

function Nav({ logout }) {
	const { currentUser } = useContext(UserContext);

	console.debug('Navigation', 'currentUser=', currentUser);

	function loggedInNav() {
		return (
			<ul className="navbar-nav ms-auto">
				<li className="nav-item me-4">
					<NavLink className="nav-link" exact to="/companies">
						Companies
					</NavLink>
				</li>
				<li className="nav-item me-4">
					<NavLink className="nav-link" exact to="/jobs">
						Jobs
					</NavLink>
				</li>
				<li className="nav-item me-4">
					<NavLink className="nav-link" exact to="/profile">
						Profile
					</NavLink>
				</li>
				<li className="nav-item">
					<Link className="nav-link" to="/" onClick={logout}>
						Logout {currentUser.firstName || currentUser.username}
					</Link>
				</li>
			</ul>
		);
	}

	function loggedOutNav() {
		return (
			<ul ul className="navbar-nav ms-auto">
				<li className="nav-item mr-4">
					<NavLink className="nav-link" exact to="/login">
						Login
					</NavLink>
				</li>
				<li className="nav-item me-4">
					<NavLink className="nav-link" exact to="/signup">
						Sign Up
					</NavLink>
				</li>
			</ul>
		);
	}

	return (
		<nav className="Navigation navbar navbar-expand-lg mb-4">
			<div class="container-fluid">
				<NavLink className="navbar-brand" exact to="/">
					Jobly
				</NavLink>
				{currentUser ? loggedInNav() : loggedOutNav()}
			</div>
		</nav>
	);
}

export default Nav;
