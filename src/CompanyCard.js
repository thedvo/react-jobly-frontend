import React from 'react';
import { Link } from 'react-router-dom';

/*
Card displays (name, description)
*/

const CompanyCard = ({ handle, name, description }) => {
	return (
		<Link to={`/companies/${handle}`}>
			<div>
				<h4>{name}</h4>
				<p>{description}</p>
			</div>
		</Link>
	);
};

export default CompanyCard;
