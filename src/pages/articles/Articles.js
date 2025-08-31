import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import ArticlesCard from "../../components/articlesCard/ArticlesCard";
import Button from "../../components/button/Button";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-reveal";
import {
  greeting,
  articlesHeader,
  articlesHeader1,
  articles,
} from "../../portfolio.js";
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
              </div>
            </div>
          </Fade>
        </div>
        {/* Publications  */}

        <div className="repo-cards-div-main">
          {articles.data.map((pub) => {
            return <ArticlesCard pub={pub} theme={theme} />;
          })}
        </div>

        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Articles;
