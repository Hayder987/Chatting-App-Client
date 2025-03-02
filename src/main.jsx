import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import AuthProvider from "./context/AuthProvider.jsx";
import { ScoketContextProvider } from "./context/SocketContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ScoketContextProvider>
          <App />
        </ScoketContextProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
