import React from 'react';
import UserAvatar from './UserAvatar';
import UserContext from '../context/UserContext';

class UserInfo extends React.Component {

    render() {
        return (
            <UserContext.Consumer>
                {user =>
                    <div className="user-stats">
                        <div>
                            <UserAvatar />
                        </div>
                        <div className="info">
                            <div>{user.name}</div>
                            <div>{user.email}</div>
                            <div>{user.city}</div>
                        </div>
                    </div>
                }
            </UserContext.Consumer>);
    }
}

export default UserInfo;