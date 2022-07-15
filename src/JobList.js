import React, { useState, useEffect } from 'react';

import JoblyApi from './api';
import SearchForm from './SearchForm';
import JobCardList from './JobCardList';

/*
Maps through Jobs and for each individual job, render a JobCard component.
*/

const JobList = () => {
	const [jobs, setJobs] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	// on mount, make a request to get all jobs
	useEffect(function getJobsOnMount() {
		makeSearch();
	}, []);

	// function which will be passed as prop to SearchForm component.
	// will be used to update job state
	async function makeSearch(title) {
		let jobs = await JoblyApi.getJobs(title);
		setJobs(jobs);
		setIsLoading(false);
	}

	if (isLoading) {
		return <p>Loading &hellip;</p>;
	}

	return (
		<div>
			<SearchForm makeSearch={makeSearch} />
			<JobCardList jobs={jobs} />
			{/* renders the list which will render the job cards */}
		</div>
	);
};

export default JobList;
