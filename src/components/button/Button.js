import React from "react";
import "./Button.css";

/** High-contrast label on soft light-blue button surfaces. */
const BUTTON_TEXT = "#04101A";
const BUTTON_BORDER = "rgba(147, 197, 253, 0.55)";

export default function Button({ text, className, href, newTab }) {
  return (
    <div className={className}>
      <a
        className="main-button"
        href={href}
        target={newTab && "_blank"}
        style={{
          color: BUTTON_TEXT,
          border: `solid 1px ${BUTTON_BORDER}`,
        }}
      >
        {text}
      </a>
    </div>
  );
}
