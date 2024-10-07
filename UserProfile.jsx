// src/components/users/UserProfile.jsx

import React from 'react';
import Avatar from './Avatar';

const UserProfile = ({ name, email, bio, avatarUrl }) => {
  return (
    <div className="user-profile">
      <Avatar src={avatarUrl} alt={`${name}'s avatar`} />
      <div className="user-details">
        <h2 className="user-name">{name}</h2>
        <p className="user-email">{email}</p>
        <p className="user-bio">{bio}</p>
      </div>
    </div>
  );
};

export default UserProfile;
