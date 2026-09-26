import React from "react";
import "./ThemeToggle.css";
import { useThemeMode } from "../../themeContext";

/**
 * Light/dark switch. Labelled with the mode it switches *to*, so it reads as
 * an action rather than a status icon, and lives in the header bar itself
 * rather than inside the collapsible menu.
 */
export default function ThemeToggle({ theme }) {
  const { mode, toggleMode } = useThemeMode();
  const target = mode === "dark" ? "light" : "dark";

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggleMode}
      aria-label={`Switch to ${target} theme`}
      title={`Switch to ${target} theme`}
      style={{ color: theme.text }}
    >
      <span className="theme-toggle-icon" aria-hidden="true">
        {mode === "dark" ? "☀" : "☾"}
      </span>
      <span className="theme-toggle-label">
        {target === "light" ? "Light" : "Dark"}
      </span>
    </button>
  );
}
