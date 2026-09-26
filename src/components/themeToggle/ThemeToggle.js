import React from "react";
import "./ThemeToggle.css";
import { useThemeMode } from "../../themeContext";

/** Switches between the light and dark palettes; choice is remembered. */
export default function ThemeToggle({ theme }) {
  const { mode, toggleMode } = useThemeMode();
  const nextLabel = mode === "dark" ? "light" : "dark";

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggleMode}
      aria-label={`Switch to ${nextLabel} theme`}
      title={`Switch to ${nextLabel} theme`}
      style={{ color: theme.text, borderColor: theme.headerColor }}
    >
      <span aria-hidden="true">{mode === "dark" ? "☀" : "☾"}</span>
    </button>
  );
}
