import React from "react";
import { Outlet } from "react-router-dom";
import { Stack } from "@mui/material";
import { useTheme } from "@emotion/react";
export default function HomeLayout() {
  const theme = useTheme();
  return (
    <Stack
      sx={{
        flexDirection: "column",
        width: "100%",
        bgcolor: theme.palette.primary.main,
      }}
    >
      <h1>HomeLayout</h1>
      <Outlet />
    </Stack>
  );
}
