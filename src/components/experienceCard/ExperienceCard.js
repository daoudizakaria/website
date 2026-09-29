import React, { Component } from "react";
import "./ExperienceCard.css";
import { Fade } from "../reveal/Reveal";

class ExperienceCard extends Component {
  render() {
    const experience = this.props.experience;
    const index = this.props.index;
    const totalCards = this.props.totalCards;
    const theme = this.props.theme;
    // Space above the card. It is padding, not margin, so that the timeline
    // connector (which stretches over the whole item) spans the gap too.
    const gap = index === 0 ? 30 : 50;
    // The dot sits level with the card's arrow: 40px arrow offset + 10px half-arrow.
    const dotCentre = gap + 50;
    const isFirst = index === 0;
    const isLast = index === totalCards - 1;
    return (
      <div className="experience-list-item" style={{ paddingTop: gap }}>
        <Fade left duration={600} distance="40px">
          <div className="experience-card-logo-div">
            <img
              loading="lazy"
              decoding="async"
              className="experience-card-logo"
              src={require(`../../assets/images/${experience["logo_path"]}`)}
              alt=""
            />
          </div>
        </Fade>
        <div
          className="experience-card-stepper"
          style={{ marginTop: -gap }}
          aria-hidden="true"
        >
          {!(isFirst && isLast) && (
            <div
              className="experience-card-connector"
              style={{
                top: isFirst ? dotCentre : 0,
                bottom: isLast ? undefined : 0,
                height: isLast ? dotCentre : undefined,
                backgroundColor: `${theme.headerColor}`,
              }}
            />
          )}
          <div
            className="experience-card-dot"
            style={{
              top: dotCentre - 10,
              backgroundColor: `${theme.headerColor}`,
            }}
          />
        </div>
        <Fade right duration={600} distance="40px">
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div
              className="arrow-left"
              style={{ borderRight: `10px solid ${theme.body}` }}
            ></div>
            <div
              className="experience-card"
              style={{ background: `${theme.body}` }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <h3
                    className="experience-card-title"
                    style={{ color: theme.text }}
                  >
                    {experience["title"]}
                  </h3>
                  {experience["company"] && (
                    <p
                      className="experience-card-company"
                      style={{ color: theme.text }}
                    >
                      {experience["company_url"] ? (
                        <a
                          href={experience["company_url"]}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {experience["company"]}
                        </a>
                      ) : (
                        experience["company"]
                      )}
                    </p>
                  )}
                </div>
                <div>
                  <div className="experience-card-heading-right">
                    <p
                      className="experience-card-duration"
                      style={{ color: theme.secondaryText }}
                    >
                      {experience["duration"]}
                    </p>
                    <p
                      className="experience-card-location"
                      style={{ color: theme.secondaryText }}
                    >
                      {experience["location"]}
                    </p>
                  </div>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  marginTop: 20,
                }}
              >
                <p
                  className="experience-card-description"
                  style={{ color: theme.secondaryText }}
                >
                  {experience["description"]}
                </p>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    );
  }
}

export default ExperienceCard;
