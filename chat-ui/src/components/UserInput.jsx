import React, { useState, useContext } from "react";
import { ChatContext } from "../context/ChatContext";
const UserInput = () => {
  const { sendUserData } = useContext(ChatContext);
  const [inputedData, setInputedData] = useState("");
  return (
    <div className="w-full pt-4 flex gap-6 justify-center h-20">
      <textarea
        name="chatInput"
        value={inputedData}
        rows="2"
        onChange={(e) => setInputedData(e.target.value)}
        type="text"
        placeholder="Chat..."
        className="peer h-full w-full resize-none rounded-md p-3"
      />
      <button
        className="bg-primary max-w-lg text-white w-32 h-full rounded"
        onClick={() => {
          sendUserData(inputedData);
          setInputedData("");
        }}
      >
        Enter
      </button>
    </div>
  );
};

export default UserInput;
