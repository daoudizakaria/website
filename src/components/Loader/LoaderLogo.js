import React from "react";
import "./LoaderLogo.css";

const LogoLoader = ({ theme }) => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 600 280"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Name */}
    <text
      x="300"
      y="100"
      textAnchor="middle"
      dominantBaseline="middle"
      fontSize="42"
      fontFamily="'Courier New', Courier, monospace"
      fill={theme?.body || "#000"}
    >
      Zakaria Daoudi
    </text>

    {/* Subtitle */}
    <text
      x="300"
      y="140"
      textAnchor="middle"
      fontSize="16"
      fontFamily="Georgia, serif"
      fill={theme?.body || "#66"}
    >
      Powered by Physics, Mathematics, Machine Learning, and a lot of coffee!
    </text>
  </svg>
);

export default LogoLoader;
