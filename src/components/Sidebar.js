import React from 'react';
import UserInfo from './UserInfo';

function Sidebar(props) {
  return <UserInfo user={props.user}/>;
}

export default Sidebar;