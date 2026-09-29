import React, { Component } from "react";
import Header from "../../../components/header/Header";
import Footer from "../../../components/footer/Footer";
import TopButton from "../../../components/topButton/TopButton";
import { Fade } from "../../../components/reveal/Reveal";
import "./Error.css";
import { Link } from "react-router-dom";

export default class Error extends Component {
  render() {
    return (
      <div className="error-main">
        <Header theme={this.props.theme} pageTitle="Page not found" />
        <div className="error-class">
          <Fade bottom duration={2000} distance="40px">
            <h1>Page not found</h1>
            <h1 className="error-404">404</h1>
            <p>The page you requested does not exist or has been moved.</p>
            <Link
              className="main-button"
              to="/home"
              style={{
                color: "#04101A",
                border: "solid 1px rgba(147, 197, 253, 0.55)",
                display: "inline-flex",
              }}
            >
              Return to the home page
            </Link>
          </Fade>
        </div>
        <Footer theme={this.props.theme} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}
