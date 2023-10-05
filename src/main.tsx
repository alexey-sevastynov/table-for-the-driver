import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import App from "./App.tsx";

import { ThemeProvider } from "styled-components";
import theme from "./styles/theme.ts";
import ResetStyles from "./styles/resets.ts";
import store from "./redux/store.ts";

import { createClient } from "@supabase/supabase-js";
import { SessionContextProvider } from "@supabase/auth-helpers-react";

const supabase = createClient(
  "https://kbfmddqwhnjwoqimkupd.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtiZm1kZHF3aG5qd29xaW1rdXBkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY1MDUzMTMsImV4cCI6MjAxMjA4MTMxM30.uLw6UkRQYkYCefeXHfMqNuLuPkPsurXSJFCRK91D81k"
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ResetStyles />
      <BrowserRouter>
        <Provider store={store}>
          <SessionContextProvider supabaseClient={supabase}>
            <App />
          </SessionContextProvider>
        </Provider>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
