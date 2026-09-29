import React, { useCallback, useEffect, useRef, useState } from "react";
import "./Splash.css";
import { Redirect } from "react-router-dom";
import IsingLattice from "./IsingLattice";
import CollisionEvent from "./CollisionEvent";
import { greeting, settings } from "../../portfolio";

const TOTAL_MS = 4000;
const SIM_MS = 3200; // simulation settles before the screen fades out

const SCENES = {
  collision: {
    Component: CollisionEvent,
    title: "Particle collision, as a detector sees it",
    caption:
      "Charged particles leave the collision vertex and are bent by a magnetic field. High-momentum tracks are nearly straight, low-momentum tracks spiral, and the direction of curvature gives the sign of the charge.",
    legend: [
      { kind: "scale", label: "low → high momentum" },
      { kind: "photon", label: "photon (no charge, no bend)" },
      { kind: "calo", label: "energy absorbed at the rim" },
    ],
  },
  ising: {
    Component: IsingLattice,
    title: "A magnet forming, atom by atom",
    caption:
      "Each square is the spin of one lattice site, updated at random as the system cools. Below the critical temperature, domains of aligned spins grow and a net magnetisation appears.",
    legend: [
      { kind: "up", label: "spin up" },
      { kind: "down", label: "spin down" },
    ],
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
        <div className="splash-top">
          <div
            className={`splash-figure splash-figure--${settings.splashScene}`}
          >
            <Scene theme={theme} durationMs={SIM_MS} still={still} />
          </div>
          <div className="splash-description">
            <p className="splash-figure-title" style={{ color: theme.text }}>
              {scene.title}
            </p>
            <p className="splash-note" style={{ color: theme.secondaryText }}>
              {scene.caption}
            </p>
            <ul className="splash-legend" aria-hidden="true">
              {scene.legend.map((item) => (
                <li key={item.kind} style={{ color: theme.secondaryText }}>
                  <span
                    className={`legend-swatch legend-swatch--${item.kind}`}
                  />
                  {item.label}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="splash-content">
          <h1 className="splash-name" style={{ color: theme.text }}>
            {greeting.title}
          </h1>
          <p className="splash-tagline" style={{ color: theme.secondaryText }}>
            Physicist · Machine-learning engineer
          </p>
        </div>
      </div>
      <span className="splash-skip" style={{ color: theme.secondaryText }}>
        Click to skip
      </span>
    </div>
  );
}
