import React from 'react';
import UserContext from '../context/UserContext';

function UserAvatar() {
    return (
        <UserContext.Consumer>
            {user =>
                (<img
                    className={`user-avatar`}
                    alt={user.name}
                    src={user.avatar}
                />)
            }
        </UserContext.Consumer>);
}

export default UserAvatar;