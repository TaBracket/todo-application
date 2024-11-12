import React from "react";
import { createContext } from "react";

const AuthCtx = createContext();

export default function AuthCtxProvider({ children }) {
  return (
    <AuthCtx.AuthCtxProvider value={1}>{children}</AuthCtx.AuthCtxProvider>
  );
}
