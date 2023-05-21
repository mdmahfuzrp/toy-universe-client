import React from 'react';
import useTitle from '../../hooks/useTitle';

const Profile = () => {
    // Set Title
    useTitle('Profile')
    return (
        <div>
            <h1>This is profile page</h1>
        </div>
    );
};

export default Profile;