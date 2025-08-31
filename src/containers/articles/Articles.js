import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import GithubRepoCard from "../../components/githubRepoCard/GithubRepoCard";
import ArticlesCard from "../../components/articlesCard/ArticlesCard";
import Button from "../../components/button/Button";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-reveal";
import {
  greeting,
  projectsHeader,
  articlesHeader,
  articles,
} from "../../portfolio.js";
import "./Articles.css";
import ArticlesImg from "./ArticlesImg";


export default function Articles() {
  return (
    <div className="main" id="articles">
      <div className="article-header">
        <h1 className="article-header-text">{articleSection.title}</h1>
        <p className="subTitle article-subtitle">{articleSection.subtitle}</p>
      </div>
      <div className="article-main-div">
        <div className="article-text-div">
          {articleSection.articles.map((article) => {
            return (
              <ArticlesCard
                article={{
                  url: article.url,
                  urlgithub: article.urlgithub,
                  image: article.image,
                  title: article.title,
                  description: article.description,
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
