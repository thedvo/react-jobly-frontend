import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

// import components from other files so routes can render
import Home from './Home';
import CompanyList from './CompanyList';
import CompanyDetail from './CompanyDetail';
import JobList from './JobList';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';
import UserEditForm from './UserEditForm';
import NotFound from './NotFound';

const Routes = ({ login, signup }) => {
	console.debug(
		'Routes',
		`login=${typeof login}`,
		`register=${typeof register}`
	);

	return (
		<Switch>
			{/* Home */}
			<Route exact path="/">
				<Home />
			</Route>

			{/* Shows list of Companies */}
			<Route exact path="/companies">
				<CompanyList />
			</Route>

			{/* Individual Company */}
			<Route path="/companies/:handle">
				<CompanyDetail />
			</Route>

			{/* Shows list of Jobs */}
			<Route exact path="/jobs">
				<JobList />
			</Route>

			{/* Displays User Login Form */}
			<Route exact path="/login">
				<LoginForm login={login} />
			</Route>

			{/* Displays Sign Up Form */}
			<Route exact path="/signup">
				<SignUpForm signup={signup} />
			</Route>

			{/* Displays Edit Profile Form */}
			<Route exact path="/profile">
				<UserEditForm />
			</Route>

			{/* Invalid URL leads user to error page */}
			<Route>
				<NotFound />
			</Route>

			{/* Redirects to home if user unauthorized */}
			<Redirect to="/" />
		</Switch>
	);
};

export default Routes;
