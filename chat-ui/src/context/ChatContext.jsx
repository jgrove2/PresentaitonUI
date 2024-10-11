import React, { useState, createContext, useEffect, useCallback } from "react";
import useWebSocket, { ReadyState } from "react-use-websocket";
import { v4 as uuidv4 } from "uuid";
import uniqolor from "uniqolor";

const ChatContext = createContext();

const ChatContextProvider = ({ children }) => {
  const [chatData, setChatData] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [connected, setConnected] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    user: "Anonymous",
    id: uuidv4(),
  });
  const { sendMessage, lastMessage, readyState } = useWebSocket(
    "ws://192.168.5.70:5001/ws",
    {},
    connected
  );

  const getUserColorById = async (id) => {
    try {
      const response = await fetch(`http://192.168.5.70:5001/userColor/${id}`);
      if (!response.ok) {
        return "#f15cff";
      } else {
        const json = await response.json();
        return json.color;
      }
    } catch (err) {
      return "#f15cff";
    }
  };

  const sendChatMessage = (type, userData) => {
    sendMessage(
      JSON.stringify({
        user: JSON.stringify({
          name: currentUser.name,
          id: currentUser.id,
          color: currentUser.color,
        }),
        id: uuidv4(),
        type: type,
        message: userData,
      })
    );
  };
  useEffect(() => {
    if (lastMessage) {
      try {
        let parsedMessage = JSON.parse(lastMessage.data);
        parsedMessage.user = JSON.parse(parsedMessage.user);
        setChatData(chatData.concat([parsedMessage]));
      } catch (err) {
        console.log(err);
      }
    }
  }, [lastMessage]);
  const addNewChat = (chat) => {
    setChatData(chatData.concat([chat]));
  };
  const loginUser = async (username) => {
    setChatData([]);
    const userId = uuidv4();
    const color = await getUserColorById(userId);
    setCurrentUser({ name: username, id: userId, color: color });
    setLoggedIn(true);
    setConnected(true);
    sendChatMessage("login", username);
  };
  // const logoutUser = async () => {
  //   sendChatMessage("logout", currentUser.name);
  //   setConnected(false);
  //   setChatData([]);
  //   setLoggedIn(false);
  // };

  return (
    <ChatContext.Provider
      value={{
        loginUser,
        sendChatMessage,
        addNewChat,
        getUserColorById,
        // logoutUser,
        currentUser,
        chatData,
        loggedIn,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export { ChatContextProvider, ChatContext };
