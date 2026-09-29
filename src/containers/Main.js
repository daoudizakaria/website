import React, { Component, Suspense, lazy } from "react";
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";
import Home from "../pages/home/HomeComponent";
import Splash from "../pages/splash/Splash";
import { settings } from "../portfolio.js";
import {
  RESEARCH_BASE_PATH,
  researchArticleUrl,
  LEGACY_ARTICLE_REDIRECTS,
} from "../content/research/researchRoutes.js";

// Splash and Home stay in the entry chunk (they are the landing path);
// every other page loads on demand — notably ArticleDetail, which carries
// the markdown + KaTeX machinery.
const Education = lazy(() => import("../pages/education/EducationComponent"));
const Experience = lazy(() => import("../pages/experience/Experience"));
const Articles = lazy(() => import("../pages/articles/Articles"));
const ArticleDetail = lazy(() => import("../pages/articles/ArticleDetail"));
const Contact = lazy(() => import("../pages/contact/ContactComponent"));
const Projectsnew = lazy(() => import("../pages/projectsnew/Projectsnew"));
const ProjectDetail = lazy(() => import("../pages/projectsnew/ProjectDetail"));
const FieldNotes = lazy(() => import("../pages/fieldNotes/FieldNotes"));
const Error404 = lazy(() => import("../pages/errors/error404/Error"));

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
        <Suspense fallback={<div />}>
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
            {Object.entries(LEGACY_ARTICLE_REDIRECTS).map(([from, to]) => (
              <Route
                key={from}
                exact
                path={`${RESEARCH_BASE_PATH}/${from}`}
                render={() => (
                  <Redirect
                    to={to ? researchArticleUrl(to) : RESEARCH_BASE_PATH}
                  />
                )}
              />
            ))}
            <Route
              path={`${RESEARCH_BASE_PATH}/:slug/:part`}
              render={(props) => (
                <ArticleDetail {...props} theme={this.props.theme} />
              )}
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
              render={(props) => (
                <Articles {...props} theme={this.props.theme} />
              )}
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
              exact
              path="/field-notes"
              render={(props) => (
                <FieldNotes {...props} theme={this.props.theme} />
              )}
            />
            <Route
              path="/contact"
              render={(props) => (
                <Contact {...props} theme={this.props.theme} />
              )}
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
              path="/projects/:slug/:part"
              render={(props) => (
                <ProjectDetail {...props} theme={this.props.theme} />
              )}
            />
            <Route
              exact
              path="/projects/:slug"
              render={(props) => (
                <ProjectDetail {...props} theme={this.props.theme} />
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
                render={(props) => (
                  <Splash {...props} theme={this.props.theme} />
                )}
              />
            )}
            <Route exact path="/admin" render={redirectToCmsAdmin} />
            <Route exact path="/admin/" render={redirectToCmsAdmin} />
            <Route
              path="*"
              render={(props) => (
                <Error404 {...props} theme={this.props.theme} />
              )}
            />
          </Switch>
        </Suspense>
      </BrowserRouter>
    );
  }
}
