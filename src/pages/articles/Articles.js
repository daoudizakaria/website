import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import ArticlesCard from "../../components/articlesCard/ArticlesCard";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-reveal";
import {
  articlesHeader,
  getResearchArticleList,
} from "../../content/research/researchContent.js";
import "./Articles.css";
import BlogsImg from "./BlogsImg";

class Articles extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="articles-main">
        <Header theme={theme} />
        <div className="basic-articles">
          <Fade bottom duration={2000} distance="40px">
            <div className="articles-heading-div">
              <div className="articles-heading-img-div">
                {/* <img
											src={require(`../../assets/images/${articlesHeader["avatar_image_path"]}`)}
											alt=""
										/> */}
                <BlogsImg theme={theme} />
              </div>
              <div className="articles-heading-text-div">
                <h1
                  className="articles-heading-text"
                  style={{ color: theme.text }}
                >
                  {articlesHeader.title}
                </h1>
                <p
                  className="articles-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {articlesHeader["description"]}
                </p>
                <p
                  className="articles-list-preface subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  Below is a short abstract for each piece; use{" "}
                  <span className="articles-preface-emphasis">
                    Read article
                  </span>{" "}
                  to open the full note.
                </p>
              </div>
            </div>
          </Fade>
        </div>
        <div className="articles-list-section">
          <h2
            className="articles-list-section-title"
            style={{ color: theme.text }}
          >
            Articles & notes
          </h2>
        </div>
        <div className="repo-cards-div-main">
          {getResearchArticleList().map((pub) => (
            <ArticlesCard key={pub.id} pub={pub} theme={theme} />
          ))}
        </div>

        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Articles;
