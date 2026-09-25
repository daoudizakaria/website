import React from "react";
import "./Footer.css";
import { Fade } from "../reveal/Reveal";

export default function Footer(props) {
  return (
    <div className="footer-div">
      <Fade>
        <footer
          className="site-footer"
          style={{ color: props.theme.secondaryText }}
        >
          <p className="footer-copyright">© 2026 Zakaria Daoudi</p>
          <p className="footer-domains">
            Computational Physics • Research • Software
          </p>
          <p className="footer-tagline">
            Designed for research, education, and scientific communication.
          </p>
        </footer>
      </Fade>
    </div>
  );
}
