import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import GithubRepoCard from "../../components/githubRepoCard/GithubRepoCard";
import ProjectsnewCard from "../../components/projectsnewCard/ProjectsnewCard";
import Button from "../../components/button/Button";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-reveal";
import {
  greeting,
  projectsnewHeader,
  projectsnew,
} from "../../portfolio.js";
import "./Projectsnew.css";
import BlogsImg from "./BlogsImg";


export default function Projectsnew() {
  return (
    <div className="main" id="projectsnew">
      <div className="-header">
        <h1 className="projectsnew-header-text">{projectsnewsection.title}</h1>
        <p className="subTitle projectsnew-subtitle">{projectsnewecstion.subtitle}</p>
      </div>
      <div className="projectsnew-main-div">
        <div className="projectsnew-text-div">
          {projectsnewsection.projectsnew.map((projectsnew) => {
            return (
              <ProjectsnewCard
                projectsnew={{
                  url: projectsnew.url,
                  image: projectsnew.image,
                  title: projectsnew.title,
                  description: projectsnew.description,
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
