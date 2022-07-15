import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import JoblyAPI from './api';
import JobCardList from './JobCardList';

const CompanyDetail = () => {
	const { handle } = useParams();
	console.log('CompanyDetail', 'handle=', handle);
	const [company, setCompany] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		async function getCompany() {
			let company = await JoblyAPI.getCompany(handle);

			setCompany(company);
			setIsLoading(false);
		}
		getCompany();
	}, [handle]);

	if (isLoading) {
		return <p>Loading &hellip;</p>;
	}

	return (
		<div>
			<h4>{company.name}</h4>
			<p>{company.description}</p>

			<div>
				{/* render component which will show the jobs for this specific company */}
				<JobCardList jobs={company.jobs} />
			</div>
		</div>
	);
};

export default CompanyDetail;
