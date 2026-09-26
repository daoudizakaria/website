import { createContext, useContext } from "react";

/** Theme mode ("dark" | "light") plus a toggle, provided by App. */
export const ThemeModeContext = createContext({
  mode: "dark",
  toggleMode: () => {},
});

export const useThemeMode = () => useContext(ThemeModeContext);
