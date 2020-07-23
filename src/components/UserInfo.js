import React from "react";
import UserAvatar from "./UserAvatar";
import UserContext from "../context/UserContext";

const UserInfo = () => {
  return (
    <UserContext.Consumer>
      {(user) => (
        <div className="user-stats">
          <div>
            <UserAvatar />
          </div>
          <div className="info">
            <div>{user.name}</div>
            <div>{user.email}</div>
            <div>{user.city}</div>
          </div>
          <input
            onChange={(event) => user.handleChange(event, "@gmail.com")}
          ></input>
        </div>
      )}
    </UserContext.Consumer>
  );
};

export default UserInfo;
