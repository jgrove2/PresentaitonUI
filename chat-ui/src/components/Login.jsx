import React, { useContext, useState } from "react";
import { ChatContext } from "../context/ChatContext";

const Login = () => {
  const { loginUser } = useContext(ChatContext);
  const [tempUsername, setTempUsername] = useState("");
  return (
    <div
      className="rounded-4xl bg-purple-200 pt-6 pb-6 pl-8 pr-8 
        h-full lg:h-5/6 w-full lg:w-2/4 
         drop-shadow"
    >
      <h1 className="w-full text-center text-4xl">Login</h1>
      <div className="m-auto w-3/4">
        <br />
        <input
          className="h-12 p-1 rounded w-full"
          type="text"
          name="userName"
          placeholder="Username"
          onChange={(e) => setTempUsername(e.target.value)}
          value={tempUsername}
          onKeyDown={async (event) => {
            if (event.code === "Enter" && tempUsername) {
              await loginUser(tempUsername);
            }
          }}
        />
        <br />
        <button
          className="bg-primary text-white p-4 mt-4 rounded-lg w-full active:drop-shadow-none drop-shadow-xl disabled:bg-gray-400 disabled:cursor-not-allowed disabled:opacity-80"
          disabled={!tempUsername}
          onClick={async () => {
            if (tempUsername) await loginUser(tempUsername);
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export { Login };
