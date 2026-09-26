import React, { useCallback, useEffect, useRef, useState } from "react";
import "./Splash.css";
import { Redirect } from "react-router-dom";
import IsingLattice from "./IsingLattice";
import CollisionEvent from "./CollisionEvent";
import { greeting, settings } from "../../portfolio";

const TOTAL_MS = 3200;
const COOL_MS = 2600;

const SCENES = {
  collision: {
    Component: CollisionEvent,
    caption:
      "Charged tracks bending in a magnetic field — radius set by momentum, direction by charge",
  },
  ising: {
    Component: IsingLattice,
    caption: "2D Ising model cooling through its critical temperature",
  },
};

const prefersReducedMotion = () => {
  try {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  } catch (e) {
    return false;
  }
};

/**
 * Splash: a 2D Ising lattice starts hot and disordered, cools through the
 * critical temperature into domains, and the name settles on top of it.
 * Click, tap or press any key to skip.
 */
export default function Splash(props) {
  const [done, setDone] = useState(false);
  const still = useRef(prefersReducedMotion()).current;
  const theme = props.theme;
  const scene = SCENES[settings.splashScene] || SCENES.collision;
  const Scene = scene.Component;

  const finish = useCallback(() => setDone(true), []);

  useEffect(() => {
    const id = setTimeout(finish, still ? 900 : TOTAL_MS);
    window.addEventListener("keydown", finish);
    return () => {
      clearTimeout(id);
      window.removeEventListener("keydown", finish);
    };
  }, [finish, still]);

  if (done) return <Redirect to="/home" />;

  return (
    <div
      className={`splash-screen${still ? " is-still" : ""}`}
      style={{ backgroundColor: theme.body }}
      onClick={finish}
      role="button"
      tabIndex={0}
      aria-label="Skip intro"
    >
      <div className="splash-stage">
        <div className={`splash-figure splash-figure--${settings.splashScene}`}>
          <Scene theme={theme} durationMs={COOL_MS} still={still} />
        </div>
        <div className="splash-content">
          <h1 className="splash-name" style={{ color: theme.text }}>
            {greeting.title}
          </h1>
          <p className="splash-tagline" style={{ color: theme.secondaryText }}>
            Physicist · Data Scientist · Scientific Writer
          </p>
          <p className="splash-note" style={{ color: theme.secondaryText }}>
            {scene.caption}
          </p>
        </div>
      </div>
      <span className="splash-skip" style={{ color: theme.secondaryText }}>
        click to skip
      </span>
    </div>
  );
}
