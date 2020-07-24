import React from "react";
import UserAvatar from "./UserAvatar";
import UserContext from "../context/UserContext";

const UserInfo = () => {
  return (
    <UserContext.Consumer>
      {(context) => (
        <div className="user-stats">
          <div>
            <UserAvatar />
          </div>
          <div className="info">
            <div>{context.user.name}</div>
            <div>{context.user.email}</div>
            <div>{context.user.city}</div>
          </div>
          <input
            onChange={(event) => context.handleChange(event, "@gmail.com")}
          ></input>
        </div>
      )}
    </UserContext.Consumer>
  );
};

export default UserInfo;
