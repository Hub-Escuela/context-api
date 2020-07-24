import React from 'react';
import UserContext from '../context/UserContext';

function UserAvatar() {
    
    return (
        <UserContext.Consumer>
            {context =>
                (<img
                    className={`user-avatar`}
                    alt={context.user.name}
                    src={context.user.avatar}
                />)
            }
        </UserContext.Consumer>);
}

export default UserAvatar;