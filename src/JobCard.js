import React from 'react';

/* 
Card contains (title, salary, equity)
*/

const JobCard = ({ id, title, salary, equity, companyName }) => {
	return (
		<div>
			<h4>{title}</h4>
			<p>{companyName}</p>
			<p>Salary: {salary}</p>
			<p>Equity: {equity}</p>
		</div>
	);
};

export default JobCard;
