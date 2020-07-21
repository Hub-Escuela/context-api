import React from 'react';
import UserAvatar from './UserAvatar';
import Sidebar from './Sidebar';

function Layout(props) {
  return <div>
      <nav>
          <UserAvatar />
      </nav>
      <div className="body">
          <Sidebar />
          {props.children}
      </div>
  </div>;
}

export default Layout;