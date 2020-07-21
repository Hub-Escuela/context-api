import React from 'react';

function UserAvatar(props) {
    return <img
        className={`user-avatar`}
        alt={props.user.name}
        src={props.user.avatar}
    />;
}

export default UserAvatar;