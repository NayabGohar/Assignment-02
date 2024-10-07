// src/components/users/UserList.jsx

import React from 'react';
import UserProfile from './UserProfile';

const UserList = ({ users }) => {
  return (
    <div className="user-list">
      {users.map((user) => (
        <UserProfile
          key={user.id}
          name={user.name}
          email={user.email}
          bio={user.bio}
          avatarUrl={user.avatarUrl}
        />
      ))}
    </div>
  );
};

export default UserList;
