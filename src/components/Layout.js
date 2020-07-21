import React from 'react';
import UserAvatar from './UserAvatar';
import Sidebar from './Sidebar';

function Layout(props) {
  return <div>
      <nav>
          <UserAvatar user={props.user} />
      </nav>
      <div className="body">
          <Sidebar user={props.user}/>
          {props.children}
      </div>
  </div>;
}

export default Layout;