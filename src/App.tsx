import React from 'react';
import { useTranslation } from 'react-i18next';
import MainPage from "./pages/MainPage";
import {CssBaseline, ThemeProvider, useTheme} from "@mui/material";
import AppTheme from "./theme"

const App: React.FC = () => {
  const { t } = useTranslation();

  return (
      <>
          <ThemeProvider theme={AppTheme}>
              <CssBaseline />
              <MainPage />
          </ThemeProvider>
      </>
      );
};

export default App;
