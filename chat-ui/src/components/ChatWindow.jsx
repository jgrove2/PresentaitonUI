import React, { useContext, useEffect } from "react";
import UserInput from "./UserInput";
import Chat from "./Chat";
import Title from "./Title";
import { ChatContext } from "../context/ChatContext";
const ChatWindow = () => {
  const { loginUser } = useContext(ChatContext);
  useEffect(() => {
    loginUser("jgrove");
  }, []);
  return (
    <div className="rounded-lg bg-purple-200 pt-6 pb-6 pl-8 pr-8 h-5/6 w-3/4 max-w-3xl drop-shadow">
      <Title />
      <Chat />
      <UserInput />
    </div>
  );
};
export default ChatWindow;
