import React from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";

import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
// Font Awesome subset: only brand icons are used (social links).
import "./assets/font-awesome/css/fontawesome.css";
import "./assets/font-awesome/css/brands.css";

// Pages are prerendered at build time (scripts/prerender.mjs) for readers
// that do not run JavaScript; the app replaces that copy.
const prerendered = document.querySelector("[data-prerendered]");
if (prerendered) prerendered.remove();

const root = createRoot(document.getElementById("root"));
root.render(
  <HelmetProvider>
    <App />
  </HelmetProvider>
);

serviceWorker.unregister();
