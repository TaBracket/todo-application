import React from "react";
import { Button, Stack } from "@mui/material";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import AppRoutes from "./services/routes/AppRoutes";
import { MuiCtx } from "./services/contexts/MuiCtx";
function App() {
  const muiContext = React.useContext(MuiCtx);
  const theme = muiContext.theme;

  return (
    <Stack sx={{ width: "100vw" }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppRoutes />
        <Button
          variant="contained"
          onClick={() => {
            muiContext.changeThemeHandler();
          }}
        >
          Toggle Dark/Light Mode
        </Button>
      </ThemeProvider>
    </Stack>
  );
}

export default App;
