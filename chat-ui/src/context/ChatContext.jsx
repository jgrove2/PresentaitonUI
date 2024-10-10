import React, { useState, createContext, useEffect } from "react";

const ChatContext = createContext();

const ChatContextProvider = ({ children }) => {
  const [userData, setUserData] = useState("");
  const [chatData, setChatData] = useState([]);
  const [currentUser, setCurrentUser] = useState({ user: undefined });
  const sendUserData = (userData) => {
    setUserData(userData);
    addNewChat({
      user: currentUser.user,
      id: chatData.length,
      message: userData,
    });
  };
  const addNewChat = (chat) => {
    setChatData(chatData.concat([chat]));
  };
  const loginUser = (username) => {
    setCurrentUser({ user: currentUser });
  };
  return (
    <ChatContext.Provider
      value={{ loginUser, sendUserData, addNewChat, currentUser, chatData }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export { ChatContextProvider, ChatContext };
