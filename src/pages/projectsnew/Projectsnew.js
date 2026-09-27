import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import ProjectsnewCard from "../../components/projectsnewCard/ProjectsnewCard";
import Button from "../../components/button/Button";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "../../components/reveal/Reveal";
import {
  greeting,
  projectsnewHeader,
  MLHeader,
  physicsHeader,
  mathHeader,
} from "../../portfolio.js";
import { getProjectsByCategory } from "../../content/projects/projectsContent.js";
import "./Projectsnew.css";
import NeuralPlayground from "../../components/neuralPlayground/NeuralPlayground";

const ML = { data: getProjectsByCategory("ml") };
const physics = { data: getProjectsByCategory("physics") };
const math = { data: getProjectsByCategory("math") };

class Projectsnew extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="projectsnew-main">
        <Header theme={theme} pageTitle="Projects" />
        <div className="basic-projectsnew">
          <Fade bottom duration={2000} distance="40px">
            <div className="projectsnew-heading-div">
              <div className="projectsnew-heading-img-div">
                <NeuralPlayground />
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
