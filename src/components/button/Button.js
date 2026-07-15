import React from "react";
import "./Button.css";

const onMouseEnter = (event, color, bgColor) => {
  const el = event.target;
  el.style.color = color;
  el.style.backgroundColor = bgColor;
};

const onMouseOut = (event, color, bgColor) => {
  const el = event.target;
  el.style.color = color;
  el.style.backgroundColor = bgColor;
};

/** High-contrast label on light button surfaces (never white-on-white on hover). */
const BUTTON_TEXT = "#04101A";

export default function Button({ text, className, href, newTab, theme }) {
  return (
    <div className={className}>
      <a
        className="main-button"
        href={href}
        target={newTab && "_blank"}
        style={{
          color: BUTTON_TEXT,
          backgroundColor: theme.text,
          border: `solid 1px ${theme.text}`,
        }}
        onMouseEnter={(event) => onMouseEnter(event, BUTTON_TEXT, "#FFFFFF")}
        onMouseOut={(event) => onMouseOut(event, BUTTON_TEXT, theme.text)}
      >
        {text}
      </a>
    </div>
  );
}
