import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import MuiCtxProvider from "./services/contexts/MuiCtx.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <MuiCtxProvider>
        <App />
      </MuiCtxProvider>
    </BrowserRouter>
  </StrictMode>
);
