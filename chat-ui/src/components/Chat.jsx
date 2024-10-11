import React, { useContext, useEffect, useRef, useState } from "react";
import ChatBlip from "./ChatBlip";
import { ChatContext } from "../context/ChatContext";
import NewUserNotification from "./NewUserNotification";
import UserLeftNotification from "./UserLeftNotification";

const Chat = () => {
  const { currentUser, chatData } = useContext(ChatContext);
  const bottomRef = useRef(null);
  const [pins, setPins] = useState(<></>);
  useEffect(() => {
    if (bottomRef && bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [chatData]);
  useEffect(() => {
    let tempUser = "";
    let tempUser2 = "";
    setPins(
      <>
        {chatData.map((message) => {
          tempUser = tempUser2;
          tempUser2 = message.user.name;
          if (message.type === "login") {
            return (
              <NewUserNotification
                key={message.id}
                userName={message.message}
              />
            );
          } else if (message.type === "logout") {
            return (
              <UserLeftNotification
                key={message.id}
                userName={message.message}
              />
            );
          }
          if (currentUser.name === message.user.name) {
            return (
              <div key={message.id} className="flex justify-end">
                <ChatBlip
                  message={message}
                  isCurrentUser={true}
                  previousUserName={tempUser}
                />
              </div>
            );
          } else {
            return (
              <div key={message.id} className="flex justify-start">
                <ChatBlip
                  message={message}
                  isCurrentUser={false}
                  previousUserName={tempUser}
                />
              </div>
            );
          }
        })}
      </>
    );
  }, [chatData]);
  return (
    <div className="p-4 h-[calc(100%-10rem)] w-auto overflow-auto bg-white rounded-md ">
      {pins}
      <div ref={bottomRef}></div>
    </div>
  );
};

export default Chat;
