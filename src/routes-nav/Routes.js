import React from 'react';
import { Route, Switch } from 'react-router-dom';

// import components from other files so routes can render
import Home from '../Home';
import CompanyList from '../Companies/CompanyList';
import CompanyDetail from '../Companies/CompanyDetail';
import JobList from '../Jobs/JobList';
import LoginForm from '../Forms/LoginForm';
import SignUpForm from '../Forms/SignUpForm';
import UserEditForm from '../Forms/UserEditForm';
import NotFound from '../routes-nav/NotFound';
import ProtectedRoute from '../routes-nav/ProtectedRoute';

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
			<ProtectedRoute exact path="/companies">
				<CompanyList />
			</ProtectedRoute>

			{/* Individual Company */}
			<ProtectedRoute path="/companies/:handle">
				<CompanyDetail />
			</ProtectedRoute>

			{/* Shows list of Jobs */}
			<ProtectedRoute exact path="/jobs">
				<JobList />
			</ProtectedRoute>

			{/* Displays User Login Form */}
			<Route exact path="/login">
				<LoginForm login={login} />
			</Route>

			{/* Displays Sign Up Form */}
			<Route exact path="/signup">
				<SignUpForm signup={signup} />
			</Route>

			{/* Displays Edit Profile Form */}
			<ProtectedRoute exact path="/profile">
				<UserEditForm />
			</ProtectedRoute>

			{/* Invalid URL leads user to error page */}
			<Route>
				<NotFound />
			</Route>
		</Switch>
	);
};

export default Routes;
