import React from 'react';
import JobCard from '../Jobs/JobCard';

// this component maps out the jobs into a list of cards
const JobCardList = ({ jobs }) => {
	console.log('JobCardList', 'jobs=', jobs);

	return (
		<div>
			{jobs.map((job) => (
				<JobCard
					key={job.id}
					id={job.id}
					title={job.title}
					companyName={job.companyName}
					salary={job.salary}
					equity={job.equity}
				/>
			))}
		</div>
	);
};

export default JobCardList;
