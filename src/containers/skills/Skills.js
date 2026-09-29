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
          <p className="skills-kicker">Expertise</p>
          <h2 className="skills-header" style={{ color: theme.text }}>
            Areas of work
          </h2>
          <p className="skills-intro">
            Machine learning, physical modelling and scientific writing.
          </p>
        </Fade>
      </div>
      <SkillSection theme={theme} />
    </div>
  );
}
