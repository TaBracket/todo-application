import React, { createContext } from "react";
import { createAppTheme } from "./../mui/theme";
export const MuiCtx = createContext();

export default function MuiCtxProvider({ children }) {
  const [themeMode, setThemeMode] = React.useState("light");
  function changeThemeHandler() {
    setThemeMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  }
  const theme = createAppTheme(themeMode);
  return (
    <MuiCtx.Provider
      value={{
        theme,
        themeMode,
        setThemeMode,
        changeThemeHandler,
      }}
    >
      {children}
    </MuiCtx.Provider>
  );
}
