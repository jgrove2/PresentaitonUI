import React, { useContext, useEffect } from "react";
import ChatWindow from "./components/ChatWindow";
import { ChatContext } from "./context/ChatContext";
import { Login } from "./components/Login";
function App() {
  const { loggedIn } = useContext(ChatContext);
  return (
    <div className="h-dvh w-screen flex justify-center items-center bg-background">
      {loggedIn ? <ChatWindow /> : <Login />}
    </div>
  );
}

export default App;
