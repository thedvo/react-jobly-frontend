import React, { useContext, useState, useEffect } from 'react';
import UserContext from '../UserContext';
import './JobCard.css';
import 'bootstrap/dist/css/bootstrap.min.css';

/* 
Card contains (title, salary, equity)
*/

const JobCard = ({ id, title, salary, equity, companyName }) => {
	const { hasAppliedToJob, applyToJob } = useContext(UserContext);
	const [applied, setApplied] = useState();

	useEffect(
		function updateAppliedStatus() {
			setApplied(hasAppliedToJob(id));
		},
		[id, hasAppliedToJob]
	);

	// Apply for the job
	async function handleApply(e) {
		// check if the job has already been applied to. If yes, return.
		if (hasAppliedToJob(id)) return;

		// Otherwise, continue to run applyToJob() which will make the API call
		applyToJob(id);
		setApplied(true);
		console.log('Success! You have applied.');
	}

	return (
		<div className="JobCard card">
			{applied}
			<div className="card-body">
				<h6 className="card-title">{title.toUpperCase()}</h6>
				<p>{companyName}</p>
				{salary && (
					<div>
						<small>Salary: {formatSalary(salary)}</small>
					</div>
				)}
				{equity !== undefined && (
					<div>
						<small>Equity: {equity}</small>
					</div>
				)}
				<button
					onClick={handleApply}
					disabled={applied}
					className="btn btn-danger fw-bold text-uppercase float-end"
				>
					{applied ? 'Applied' : 'Apply'}
				</button>
			</div>
		</div>
	);
};

/** Render integer salary like '$1,250,343' */

function formatSalary(salary) {
	const digitsRev = [];
	const salaryStr = salary.toString();

	for (let i = salaryStr.length - 1; i >= 0; i--) {
		digitsRev.push(salaryStr[i]);
		if (i > 0 && i % 3 === 0) digitsRev.push(',');
	}

	return digitsRev.reverse().join('');
}

export default JobCard;
