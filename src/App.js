import React, { useCallback, useEffect, useMemo, useState } from "react";
import "./App.css";
import Main from "./containers/Main";
import { ThemeProvider } from "styled-components";
import { blueTheme, lightTheme } from "./theme";
import { ThemeModeContext } from "./themeContext";
import { GlobalStyles } from "./global";

const STORAGE_KEY = "preferred-theme";

/** Saved choice first, then the OS preference, else the dark original. */
function initialMode() {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === "light" || saved === "dark") return saved;
    if (window.matchMedia("(prefers-color-scheme: light)").matches) {
      return "light";
    }
  } catch (e) {
    /* private mode / blocked storage — fall through */
  }
  return "dark";
}

function App() {
  const [mode, setMode] = useState(initialMode);

  // The CSS token layer keys off this attribute.
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", mode);
    try {
      window.localStorage.setItem(STORAGE_KEY, mode);
    } catch (e) {
      /* ignore */
    }
  }, [mode]);

  const toggleMode = useCallback(
    () => setMode((m) => (m === "dark" ? "light" : "dark")),
    []
  );
  const theme = mode === "light" ? lightTheme : blueTheme;
  const ctx = useMemo(() => ({ mode, toggleMode }), [mode, toggleMode]);

  return (
    <ThemeModeContext.Provider value={ctx}>
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyles />
          <div>
            <Main theme={theme} />
          </div>
        </>
      </ThemeProvider>
    </ThemeModeContext.Provider>
  );
}

export default App;
