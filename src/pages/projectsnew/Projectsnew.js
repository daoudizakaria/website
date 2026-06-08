import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import ProjectsnewCard from "../../components/projectsnewCard/ProjectsnewCard";
import Button from "../../components/button/Button";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-reveal";
import {
  greeting,
  projectsnewHeader,
  MLHeader,
  ML,
  physicsHeader,
  physics,
  mathHeader,
  math,
} from "../../portfolio.js";
import "./Projectsnew.css";
import ProjectsImg from "./ProjectsImg";

class Projectsnew extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="projectsnew-main">
        <Header theme={theme} />
        <div className="basic-projectsnew">
          <Fade bottom duration={2000} distance="40px">
            <div className="projectsnew-heading-div">
              <div className="projectsnew-heading-img-div">
                <ProjectsImg theme={theme} />
              </div>
              <div className="projectsnew-heading-text-div">
                <h1
                  className="projectsnew-heading-text projectsnew-hero-title"
                  style={{ color: theme.text }}
                >
                  {projectsnewHeader.title}
                </h1>
                <p
                  className="projectsnew-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {projectsnewHeader["description"]}
                </p>
                <p
                  className="projects-page-preface subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  Scroll to each thematic block below. Only cards with{" "}
                  <strong>Open resource →</strong> open an external page; others
                  are listed for reference until a link is added.
                </p>
              </div>
            </div>
          </Fade>
        </div>

        {ML.data.length > 0 ? (
          <section
            className="projects-category"
            aria-labelledby="projects-section-ml"
          >
            <Fade bottom duration={2000} distance="40px">
              <div className="projects-category-heading-wrap">
                <h2
                  id="projects-section-ml"
                  className="projectsnew-heading-text projectsnew-section-heading"
                  style={{ color: theme.text }}
                >
                  {MLHeader.title}
                </h2>
                <p
                  className="projectsnew-header-detail-text subTitle projects-category-blurb"
                  style={{ color: theme.secondaryText }}
                >
                  {MLHeader["description"]}
                </p>
              </div>
            </Fade>
            <div className="repo-cards-div-main projects-category-cards">
              {ML.data.map((pub, i) => (
                <ProjectsnewCard
                  key={`ml-${i}-${pub.id}`}
                  pub={pub}
                  theme={theme}
                />
              ))}
            </div>
            <Button
              text={"More Machine Learning Projects"}
              className="project-button"
              href={greeting.githubProfile}
              newTab={true}
              theme={theme}
            />
          </section>
        ) : null}

        {physics.data.length > 0 ? (
          <section
            className="projects-category"
            aria-labelledby="projects-section-physics"
          >
            <Fade bottom duration={2000} distance="40px">
              <div className="projects-category-heading-wrap">
                <h2
                  id="projects-section-physics"
                  className="projectsnew-heading-text projectsnew-section-heading"
                  style={{ color: theme.text }}
                >
                  {physicsHeader.title}
                </h2>
                <p
                  className="projectsnew-header-detail-text subTitle projects-category-blurb"
                  style={{ color: theme.secondaryText }}
                >
                  {physicsHeader["description"]}
                </p>
              </div>
            </Fade>
            <div className="repo-cards-div-main projects-category-cards">
              {physics.data.map((pub, i) => (
                <ProjectsnewCard
                  key={`ph-${i}-${pub.id}`}
                  pub={pub}
                  theme={theme}
                />
              ))}
            </div>
            <Button
              text={"More Physics Projects"}
              className="project-button"
              href={greeting.githubProfile}
              newTab={true}
              theme={theme}
            />
          </section>
        ) : null}

        {math.data.length > 0 ? (
          <section
            className="projects-category"
            aria-labelledby="projects-section-math"
          >
            <Fade bottom duration={2000} distance="40px">
              <div className="projects-category-heading-wrap">
                <h2
                  id="projects-section-math"
                  className="projectsnew-heading-text projectsnew-section-heading"
                  style={{ color: theme.text }}
                >
                  {mathHeader.title}
                </h2>
                <p
                  className="projectsnew-header-detail-text subTitle projects-category-blurb"
                  style={{ color: theme.secondaryText }}
                >
                  {mathHeader["description"]}
                </p>
              </div>
            </Fade>
            <div className="repo-cards-div-main projects-category-cards">
              {math.data.map((pub, i) => (
                <ProjectsnewCard
                  key={`math-${i}-${pub.id}`}
                  pub={pub}
                  theme={theme}
                />
              ))}
            </div>
            <Button
              text={"More Mathematics Projects"}
              className="project-button"
              href={greeting.githubProfile}
              newTab={true}
              theme={theme}
            />
          </section>
        ) : null}

        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Projectsnew;
