import React, { useEffect } from "react";

const ChatBlip = ({ message, isCurrentUser }) => {
  const customClass = `w-2/4 mb-4 w-max-xs ${
    isCurrentUser ? "rounded-tr-none" : "rounded-tl-none"
  } rounded bg-background p-2 drop-shadow`;
  return (
    <div className={customClass}>
      <p>{message.message}</p>
    </div>
  );
};

export default ChatBlip;
