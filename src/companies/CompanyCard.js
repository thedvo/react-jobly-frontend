import React from 'react';
import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './CompanyCard.css';

/*
Card displays (name, description)
*/

const CompanyCard = ({ handle, name, description, logoUrl }) => {
	return (
		<Link className="CompanyCard card" to={`/companies/${handle}`}>
			<div className="card-body">
				<h4 className="card-title">{name}</h4>
				<p>{description}</p>
			</div>
		</Link>
	);
};

export default CompanyCard;
