import React from 'react';
import UserAvatar from './UserAvatar';

function UserInfo(props) {
    return <div className="user-stats">
        <div>
            <UserAvatar user={props.user} />
        </div>
        <div className="info">
            <div>{props.user.name}</div>
            <div>{props.user.email}</div>
            <div>{props.user.city}</div>
        </div>
    </div>;
}

export default UserInfo;