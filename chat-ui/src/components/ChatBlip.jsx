import React, { useEffect } from "react";
import UserIcon from "./UserIcon";

const ChatBlip = ({ message, isCurrentUser, previousUserName }) => {
  const customClass = `w-3/6 ${
    previousUserName === message.user.name
      ? !isCurrentUser
        ? "ml-14 mt-2"
        : "mr-14 mt-2"
      : "mt-4"
  } w-max-xs ${isCurrentUser ? "rounded-tr-none" : "rounded-tl-none"}`;
  const classUserName = `font-semibold ${
    isCurrentUser ? "text-right" : "text-left"
  }`;
  const shiftOverIfNoIcon = `rounded bg-background p-2 drop-shadow`;
  return (
    <>
      {!isCurrentUser && previousUserName !== message.user.name && (
        <UserIcon
          isCurrentUser={isCurrentUser}
          userColor={message.user.color}
        />
      )}
      <div className={customClass}>
        {previousUserName !== message.user.name && (
          <p className={classUserName}>{message.user.name}</p>
        )}
        <div className={shiftOverIfNoIcon}>
          <div className="w-full">
            <p>{message.message}</p>
          </div>
        </div>
      </div>
      {isCurrentUser && previousUserName !== message.user.name && (
        <UserIcon
          isCurrentUser={isCurrentUser}
          userColor={message.user.color}
        />
      )}
    </>
  );
};
export default ChatBlip;
