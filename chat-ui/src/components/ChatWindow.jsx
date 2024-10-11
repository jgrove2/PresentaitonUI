import React, { useContext, useEffect } from "react";
import UserInput from "./UserInput";
import Chat from "./Chat";
import Title from "./Title";
// import { ChatContext } from "../context/ChatContext";
const ChatWindow = () => {
  // const { logout } = useContext(ChatContext);
  return (
    <div className="rounded-lg bg-purple-200 pt-6 pb-6 pl-8 pr-8 w-full md:w-3/4 md:max-w-3xl h-full md:h-5/6 drop-shadow">
      {/* <div
        className="absolute left-[calc(100%-5rem)] underline cursor-pointer"
        onClick={() => {
          logout();
        }}
      >
        Logout
      </div> */}
      <Title />
      <Chat />
      <UserInput />
    </div>
  );
};
export default ChatWindow;
