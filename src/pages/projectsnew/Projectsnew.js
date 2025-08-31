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
                {/* <img
											src={require(`../../assets/images/${ProjectsnewHeader["avatar_image_path"]}`)}
											alt=""
										/> */}
                <ProjectsImg theme={theme} />
              </div>
              <div className="projectsnew-heading-text-div">
                <h1
                  className="projectsnew-heading-text"
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
        {/* ML  */}
        {ML.data.length > 0 ? (
          <div className="basic-projects">
            <Fade bottom duration={2000} distance="40px">
              <div className="projectsnew-heading-div">
                <div className="projectsnew-heading-text-div">
                  <h1
                    className="projectsnew-heading-text"
                    style={{ color: theme.text }}
                  >
                    {MLHeader.title}
                  </h1>
                  <p
                    className="projectsnew-header-detail-text subTitle"
                    style={{ color: theme.secondaryText }}
                  >
                    {MLHeader["description"]}
                  </p>
                </div>
              </div>
            </Fade>
          </div>
        ) : null}
        <div className="repo-cards-div-main">
          {ML.data.map((pub) => {
            return <ProjectsnewCard pub={pub} theme={theme} />;
          })}
        </div>
        <Button
          text={"More Machine Learning Projects"}
          className="project-button"
          href={greeting.githubProfile}
          newTab={true}
          theme={theme}
        />
        {/* physics  */}
        {physics.data.length > 0 ? (
          <div className="basic-projects">
            <Fade bottom duration={2000} distance="40px">
              <div className="projectsnew-heading-div">
                <div className="projectsnew-heading-text-div">
                  <h1
                    className="projectsnew-heading-text"
                    style={{ color: theme.text }}
                  >
                    {physicsHeader.title}
                  </h1>
                  <p
                    className="projectsnew-header-detail-text subTitle"
                    style={{ color: theme.secondaryText }}
                  >
                    {physicsHeader["description"]}
                  </p>
                </div>
              </div>
            </Fade>
          </div>
        ) : null}

        <div className="repo-cards-div-main">
          {physics.data.map((pub) => {
            return <ProjectsnewCard pub={pub} theme={theme} />;
          })}
        </div>
        <Button
          text={"More Physics Projects"}
          className="project-button"
          href={greeting.githubProfile}
          newTab={true}
          theme={theme}
        />
        {/* mathematics  */}
        {math.data.length > 0 ? (
          <div className="basic-projects">
            <Fade bottom duration={2000} distance="40px">
              <div className="projectsnew-heading-div">
                <div className="projectsnew-heading-text-div">
                  <h1
                    className="projectsnew-heading-text"
                    style={{ color: theme.text }}
                  >
                    {mathHeader.title}
                  </h1>
                  <p
                    className="projectsnew-header-detail-text subTitle"
                    style={{ color: theme.secondaryText }}
                  >
                    {mathHeader["description"]}
                  </p>
                </div>
              </div>
            </Fade>
          </div>
        ) : null}

        <div className="repo-cards-div-main">
          {math.data.map((pub) => {
            return <ProjectsnewCard pub={pub} theme={theme} />;
          })}
        </div>
        <Button
          text={"More Mathematics Projects"}
          className="project-button"
          href={greeting.githubProfile}
          newTab={true}
          theme={theme}
        />
        
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Projectsnew;
