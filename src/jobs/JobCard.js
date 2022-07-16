import React, { useContext, useState, useEffect } from 'react';
import UserContext from '../UserContext';

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
		<div>
			<h4>{title}</h4>
			<p>{companyName}</p>
			<p>Salary: {salary}</p>
			<p>Equity: {equity}</p>
			{/* disable the button if the user has already applied */}
			<button onClick={handleApply} disabled={applied}>
				{applied ? 'Applied' : 'Apply'}
			</button>
		</div>
	);
};

export default JobCard;
