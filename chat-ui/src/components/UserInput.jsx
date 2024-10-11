import React, { useState, useContext } from "react";
import { ChatContext } from "../context/ChatContext";
const UserInput = () => {
  const { sendChatMessage } = useContext(ChatContext);
  const [inputedData, setInputedData] = useState("");
  return (
    <div className="w-full pt-4 flex gap-6 justify-center h-20">
      <input
        name="chatInput"
        value={inputedData}
        rows="2"
        onChange={(e) => setInputedData(e.target.value)}
        onKeyDown={(event) => {
          if (event.code === "Enter" && inputedData) {
            sendChatMessage("message", inputedData);
            setInputedData("");
          }
        }}
        type="text"
        placeholder="Chat..."
        className="peer h-full w-full resize-none rounded-md p-3"
      />
      <button
        className="bg-primary max-w-lg text-white w-32 h-full font-bold rounded active:drop-shadow-none drop-shadow-2xl disabled:bg-gray-400 disabled:cursor-not-allowed disabled:opacity-80"
        disabled={!inputedData}
        onClick={() => {
          if (inputedData) {
            sendChatMessage("message", inputedData);
            setInputedData("");
          }
        }}
      >
        Enter
      </button>
    </div>
  );
};

export default UserInput;
