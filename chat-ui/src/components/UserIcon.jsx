import React from "react";

const UserIcon = ({ isCurrentUser, userColor }) => {
  const circleStyles = `rounded-full h-10 w-10`;
  const padding = `pt-10 ${isCurrentUser ? "pl-4" : "pr-4"}`;
  return (
    <div className={padding}>
      <div
        className={circleStyles}
        style={{ backgroundColor: userColor }}
      ></div>
    </div>
  );
};

export default UserIcon;
