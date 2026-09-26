import React, { Component, Suspense, lazy } from "react";
import "./Skills.css";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { skills } from "../../portfolio";
import { Fade } from "../../components/reveal/Reveal";

/*
 * The illustrations are large inline SVGs (~180 KB together, a third of the
 * entry bundle), so each is split into its own chunk. webpackPrefetch lets
 * the browser fetch them at idle — during the splash — so they are normally
 * cached before this section ever renders. Each placeholder reserves the
 * illustration's exact box (from its viewBox) so nothing shifts on arrival.
 */
const ILLUSTRATIONS = {
  DataScienceImg: {
    Img: lazy(() => import(/* webpackPrefetch: true */ "./DataScienceImg")),
    ratio: "1120 / 829.80067",
  },
  FullStackImg: {
    Img: lazy(() => import(/* webpackPrefetch: true */ "./FullStackImg")),
    ratio: "864.81 / 658.45",
  },
  CloudInfraImg: {
    Img: lazy(() => import(/* webpackPrefetch: true */ "./CloudInfraImg")),
    ratio: "1144 / 617.32",
  },
  DesignImg: {
    Img: lazy(() => import(/* webpackPrefetch: true */ "./DesignImg")),
    ratio: "996.46 / 828.18",
  },
};

function GetSkillSvg(props) {
  const { Img, ratio } =
    ILLUSTRATIONS[props.fileName] || ILLUSTRATIONS.DesignImg;
  return (
    <Suspense
      fallback={<div style={{ aspectRatio: ratio }} aria-hidden="true" />}
    >
      <Img theme={props.theme} />
    </Suspense>
  );
}

class SkillSection extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div>
        {skills.data.map((skill, i) => {
          return (
            <div key={i} className="skills-main-div">
              <Fade left duration={2000}>
                <div className="skills-image-div">
                  {/* <img
                    alt="Ashutosh is Analysing Data"
                    src={require(`../../assets/images/${skill.imagePath}`)}
                  ></img> */}
                  <GetSkillSvg fileName={skill.fileName} theme={theme} />
                </div>
              </Fade>

              <div className="skills-text-div">
                <Fade right duration={1000}>
                  <h1 className="skills-heading" style={{ color: theme.text }}>
                    {skill.title}
                  </h1>
                </Fade>
                <Fade right duration={1500}>
                  <SoftwareSkill logos={skill.softwareSkills} />
                </Fade>
                <Fade right duration={2000}>
                  <div>
                    {skill.skills.map((skillSentence, i) => {
                      return (
                        <p
                          key={i}
                          className="subTitle skills-text"
                          style={{ color: theme.secondaryText }}
                        >
                          {skillSentence}
                        </p>
                      );
                    })}
                  </div>
                </Fade>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default SkillSection;
