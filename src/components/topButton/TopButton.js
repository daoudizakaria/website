import React, { useEffect, useRef } from "react";
import "./TopButton.css";

export default function TopButton({ theme }) {
  const buttonRef = useRef(null);

  function GoUpEvent() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  // Show the button once the page is scrolled. A passive listener that
  // checks at most once per frame and touches the DOM only on a change.
  useEffect(() => {
    let shown = null;
    let queued = false;
    const update = () => {
      queued = false;
      const show = window.scrollY > 30;
      if (show !== shown && buttonRef.current) {
        shown = show;
        buttonRef.current.style.visibility = show ? "visible" : "hidden";
      }
    };
    const onScroll = () => {
      if (!queued) {
        queued = true;
        requestAnimationFrame(update);
      }
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onMouseEnter = (color, bgColor) => {
    /* For the button */
    const topButton = document.getElementById("topButton");
    topButton.style.color = color;
    topButton.style.backgroundColor = bgColor;

    /* For arrow icon */
    const arrow = document.getElementById("arrow");
    arrow.style.color = color;
    arrow.style.backgroundColor = bgColor;
  };

  const onMouseLeave = (color, bgColor) => {
    /* For the button */
    const topButton = document.getElementById("topButton");
    topButton.style.color = color;
    topButton.style.backgroundColor = bgColor;

    /* For arrow icon */
    const arrow = document.getElementById("arrow");
    arrow.style.color = color;
    arrow.style.backgroundColor = bgColor;
  };

  return (
    <div
      ref={buttonRef}
      onClick={GoUpEvent}
      id="topButton"
      style={{
        color: theme.body,
        backgroundColor: theme.text,
        border: `solid 1px ${theme.text}`,
      }}
      title="Go up"
      onMouseEnter={() => onMouseEnter(theme.text, theme.body)}
      onMouseLeave={() => onMouseLeave(theme.body, theme.text)}
    >
      <span id="arrow" aria-hidden="true">
        ↑
      </span>
    </div>
  );
}
