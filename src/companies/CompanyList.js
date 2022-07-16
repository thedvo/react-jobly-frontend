import React, { useState, useEffect } from 'react';

import JoblyAPI from '../api';
import SearchForm from '../Forms/SearchForm';
import CompanyCard from '../Companies/CompanyCard';

const CompanyList = () => {
	const [companies, setCompanies] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	// on mount, run makeSearch() to set the companies list
	useEffect(function getCompaniesOnMount() {
		makeSearch();
	}, []);

	async function makeSearch(name) {
		let companies = await JoblyAPI.getCompanies(name);
		setCompanies(companies);
		setIsLoading(false);
	}

	// will show 'Loading...' as API request is finishing
	if (isLoading) {
		return <p>Loading &hellip;</p>;
	}

	return (
		<div>
			<SearchForm makeSearch={makeSearch} />

			{/* map out individual company components */}
			<div>
				{companies.map((c) => (
					<CompanyCard
						key={c.handle}
						handle={c.handle}
						name={c.name}
						description={c.description}
						logoUrl={c.logoUrl}
					/>
				))}
			</div>
		</div>
	);
};

export default CompanyList;
