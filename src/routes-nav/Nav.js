import React, { useContext } from 'react';
import { NavLink, Link } from 'react-router-dom';
import UserContext from '../UserContext';

function Nav({ logout }) {
	const { currentUser } = useContext(UserContext);

	console.debug('Navigation', 'currentUser=', currentUser);

	function loggedInNav() {
		return (
			<ul>
				<li>
					<NavLink exact to="/companies">
						Companies
					</NavLink>
				</li>
				<li>
					<NavLink exact to="/jobs">
						Jobs
					</NavLink>
				</li>
				<li>
					<NavLink exact to="/profile">
						Profile
					</NavLink>
				</li>
				<li>
					<Link to="/" onClick={logout}>
						Logout {currentUser.first_name || currentUser.username}
					</Link>
				</li>
			</ul>
		);
	}

	function loggedOutNav() {
		return (
			<ul>
				<li>
					<NavLink exact to="/login">
						Login
					</NavLink>
				</li>
				<li>
					<NavLink exact to="/signup">
						Sign Up
					</NavLink>
				</li>
			</ul>
		);
	}

	return (
		<nav>
			<NavLink exact to="/">
				Jobly
			</NavLink>
			{currentUser ? loggedInNav() : loggedOutNav()}
		</nav>
	);
}

export default Nav;
