import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ChatContextProvider } from "./context/ChatContext.jsx";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ChatContextProvider>
      <App />
    </ChatContextProvider>
  </StrictMode>
);
