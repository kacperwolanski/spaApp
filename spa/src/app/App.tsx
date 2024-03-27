import { ThemeProvider } from "@mui/material";
import React from "react";

import AppContent from "./AppContent";
import { theme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
