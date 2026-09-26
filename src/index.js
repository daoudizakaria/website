import React from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";

import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
// Font Awesome subset: only brand icons are used (social links).
import "./assets/font-awesome/css/fontawesome.css";
import "./assets/font-awesome/css/brands.css";

const root = createRoot(document.getElementById("root"));
root.render(
  <HelmetProvider>
    <App />
  </HelmetProvider>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
