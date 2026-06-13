import React, { Component } from "react";
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";
import Home from "../pages/home/HomeComponent";
import Splash from "../pages/splash/Splash";
import Education from "../pages/education/EducationComponent";
import Experience from "../pages/experience/Experience";
import Articles from "../pages/articles/Articles";
import ArticleDetail from "../pages/articles/ArticleDetail";
import Contact from "../pages/contact/ContactComponent";
import Projectsnew from "../pages/projectsnew/Projectsnew";
import { settings } from "../portfolio.js";
import {
  RESEARCH_BASE_PATH,
  researchArticleUrl,
} from "../content/research/researchContent.js";
import Error404 from "../pages/errors/error404/Error";

/** Full-page redirect into Decap CMS (static admin under public/admin/). */
function redirectToCmsAdmin() {
  const base = process.env.PUBLIC_URL || "";
  window.location.replace(`${base}/admin/index.html`);
  return null;
}

export default class Main extends Component {
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route
            path="/"
            exact
            render={(props) =>
              settings.isSplash ? (
                <Splash {...props} theme={this.props.theme} />
              ) : (
                <Home {...props} theme={this.props.theme} />
              )
            }
          />
          <Route
            path="/home"
            render={(props) => <Home {...props} theme={this.props.theme} />}
          />
          <Route
            path="/experience"
            exact
            render={(props) => (
              <Experience {...props} theme={this.props.theme} />
            )}
          />
          <Route
            path="/education"
            render={(props) => (
              <Education {...props} theme={this.props.theme} />
            )}
          />
          <Route
            exact
            path={`${RESEARCH_BASE_PATH}/string-theory-quantum-gravity`}
            render={() => <Redirect to={RESEARCH_BASE_PATH} />}
          />
          <Route
            exact
            path={`${RESEARCH_BASE_PATH}/quantum-computing-cryptography`}
            render={() => <Redirect to={RESEARCH_BASE_PATH} />}
          />
          <Route
            exact
            path={`${RESEARCH_BASE_PATH}/neural-networks-physics`}
            render={() => <Redirect to={RESEARCH_BASE_PATH} />}
          />
          <Route
            path={`${RESEARCH_BASE_PATH}/:slug`}
            render={(props) => (
              <ArticleDetail {...props} theme={this.props.theme} />
            )}
          />
          <Route
            exact
            path={RESEARCH_BASE_PATH}
            render={(props) => <Articles {...props} theme={this.props.theme} />}
          />
          <Route
            exact
            path="/blog/:id"
            render={({ match }) => (
              <Redirect to={researchArticleUrl(match.params.id)} />
            )}
          />
          <Route
            exact
            path="/blog"
            render={() => <Redirect to={RESEARCH_BASE_PATH} />}
          />
          <Route
            path="/contact"
            render={(props) => <Contact {...props} theme={this.props.theme} />}
          />
          <Route
            exact
            path="/projects"
            render={(props) => (
              <Projectsnew {...props} theme={this.props.theme} />
            )}
          />
          <Route
            exact
            path="/Projectsnew"
            render={() => <Redirect to="/projects" />}
          />
          <Route
            exact
            path="/projectsnew"
            render={() => <Redirect to="/projects" />}
          />

          {settings.isSplash && (
            <Route
              path="/splash"
              render={(props) => <Splash {...props} theme={this.props.theme} />}
            />
          )}
          <Route exact path="/admin" render={redirectToCmsAdmin} />
          <Route exact path="/admin/" render={redirectToCmsAdmin} />
          <Route
            path="*"
            render={(props) => <Error404 {...props} theme={this.props.theme} />}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}
