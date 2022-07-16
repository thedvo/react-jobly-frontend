import React, { useContext } from 'react';
import UserContext from './UserContext';

const UserEditForm = () => {
	const { currentUser } = useContext(UserContext);

	return <p>Edit User</p>;
};

export default UserEditForm;
