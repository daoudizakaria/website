/**
 * Drop-in replacement for the `react-reveal` animations this site used
 * (`Fade` with direction/duration/distance, `Flip` with left/duration).
 * Elements start hidden and animate in the first time they enter the
 * viewport, matching react-reveal's behavior. No dependencies.
 */
import React, { useEffect, useRef, useState } from "react";

function useInView() {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    // Content already in the initial viewport reveals immediately —
    // synchronous check so it works even before the first paint (and in
    // backgrounded pages, where IntersectionObserver callbacks are paused).
    const rect = el.getBoundingClientRect();
    const viewportH =
      window.innerHeight || document.documentElement.clientHeight || 0;
    if (rect.top < viewportH && rect.bottom > 0) {
      setInView(true);
      return undefined;
    }
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return undefined;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return [ref, inView];
}

const DIRECTION_OFFSETS = {
  bottom: [0, 1],
  top: [0, -1],
  left: [-1, 0],
  right: [1, 0],
};

export function Fade({
  children,
  duration = 1000,
  distance = "20px",
  bottom,
  top,
  left,
  right,
  className,
}) {
  const [ref, inView] = useInView();
  const direction =
    (bottom && "bottom") ||
    (top && "top") ||
    (left && "left") ||
    (right && "right") ||
    null;
  let hiddenTransform = "none";
  if (direction) {
    let [x, y] = DIRECTION_OFFSETS[direction];
    const px = parseFloat(distance) || 20;
    // A horizontal start offset sticks out past the viewport edge until the
    // element reveals, which shows up as a horizontal scrollbar on phones.
    // Slide such elements up instead on narrow screens.
    if (x !== 0 && typeof window !== "undefined" && window.innerWidth <= 768) {
      x = 0;
      y = 1;
    }
    hiddenTransform = `translate3d(${x * px}px, ${y * px}px, 0)`;
  }
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "none" : hiddenTransform,
        transition: `opacity ${duration}ms ease-out, transform ${duration}ms ease-out`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}

export function Flip({ children, duration = 1000 }) {
  const [ref, inView] = useInView();
  return (
    <div style={{ perspective: "1000px" }}>
      <div
        ref={ref}
        style={{
          opacity: inView ? 1 : 0,
          transform: inView ? "none" : "rotateY(80deg)",
          transition: `opacity ${duration}ms ease-out, transform ${duration}ms ease-out`,
          transformStyle: "preserve-3d",
          willChange: "opacity, transform",
        }}
      >
        {children}
      </div>
    </div>
  );
}
