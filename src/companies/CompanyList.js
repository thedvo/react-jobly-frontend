import React, { useState, useEffect } from 'react';

import JoblyAPI from '../api';
import SearchForm from '../forms/SearchForm';
import CompanyCard from './CompanyCard';

import 'bootstrap/dist/css/bootstrap.min.css';

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
		<div className="CompanyList col-md-8 offset-md-2">
			<SearchForm makeSearch={makeSearch} />

			{/* map out individual company components */}
			{companies.length ? (
				<div className="CompanyList-list">
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
			) : (
				<p className="lead">Sorry, no results found.</p>
			)}
		</div>
	);
};

export default CompanyList;
