import React, { useContext, useEffect, useRef } from "react";
import ChatBlip from "./ChatBlip";
import { ChatContext } from "../context/ChatContext";

const Chat = () => {
  const { currentUser, chatData } = useContext(ChatContext);
  const bottomRef = useRef(null);
  useEffect(() => {
    if (bottomRef && bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
    console.log(chatData);
  }, [chatData]);
  return (
    <div className="p-4 h-[calc(100%-10rem)] w-auto bg-white rounded-md ">
      {chatData.map((message) => {
        if (currentUser.user === message.user) {
          return (
            <div key={message.id} className="flex justify-end">
              <ChatBlip message={message} isCurrentUser={true} />
            </div>
          );
        } else {
          return (
            <div key={message.id} className="flex justify-start">
              <ChatBlip message={message} isCurrentUser={false} />
            </div>
          );
        }
      })}
      <div ref={bottomRef}></div>
    </div>
  );
};

export default Chat;
