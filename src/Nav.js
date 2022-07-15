import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
	return (
		<nav>
			<NavLink exact to="/">
				Jobly
			</NavLink>
			<NavLink exact to="/companies">
				Companies
			</NavLink>
			<NavLink exact to="/jobs">
				Jobs
			</NavLink>
			<NavLink exact to="/profile">
				Profile
			</NavLink>
			<NavLink exact to="/login">
				Login
			</NavLink>
			<NavLink exact to="/signup">
				Sign Up
			</NavLink>
		</nav>
	);
};

export default Nav;
