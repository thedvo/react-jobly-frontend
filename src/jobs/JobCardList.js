import React from 'react';
import JobCard from './JobCard';
import 'bootstrap/dist/css/bootstrap.min.css';

// this component maps out the jobs into a list of cards
const JobCardList = ({ jobs }) => {
	console.log('JobCardList', 'jobs=', jobs);

	return (
		<div className="JobCardList">
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
