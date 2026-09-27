import React from "react";
import "./Skills.css";
import SkillSection from "./SkillSection";
import { Fade } from "../../components/reveal/Reveal";

export default function Skills(props) {
  const theme = props.theme;
  return (
    <div className="main" id="skills">
      <div className="skills-header-div">
        <Fade bottom duration={2000} distance="20px">
          <p className="skills-kicker">Services</p>
          <h2 className="skills-header" style={{ color: theme.text }}>
            What I Do
          </h2>
          <p className="skills-intro">
            From the first model to the final report.
          </p>
        </Fade>
      </div>
      <SkillSection theme={theme} />
    </div>
  );
}
