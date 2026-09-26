import React, { Component } from "react";
import ExperienceCard from "../../components/experienceCard/ExperienceCard.js";
import "./ExperienceAccordion.css";
import { Accordion, Panel } from "baseui/accordion";
import { BaseProvider, LightTheme } from "baseui";
import { Provider as StyletronProvider } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";

// baseui (and its styletron engine) is scoped to this component — the only
// baseui consumer on the site — so it ships with the lazy Experience page
// instead of in the entry bundle every visitor downloads.
const engine = new Styletron();

class ExperienceAccordion extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <StyletronProvider value={engine}>
        <BaseProvider theme={LightTheme}>
          <div className="experience-accord">
            {/* First section open by default so the page never looks empty. */}
            <Accordion
              initialState={{
                expanded: this.props.sections.length
                  ? [this.props.sections[0]["title"]]
                  : [],
              }}
            >
              {this.props.sections.map((section) => {
                return (
                  <Panel
                    className="accord-panel"
                    title={section["title"]}
                    key={section["title"]}
                    overrides={{
                      Header: {
                        style: () => ({
                          backgroundColor: `${theme.body}`,
                          border: `1px solid`,
                          borderRadius: `5px`,
                          borderColor: `${theme.headerColor}`,
                          marginBottom: `3px`,
                          fontFamily: "Google Sans Regular",
                          color: `${theme.text}`,
                          ":hover": {
                            color: `${theme.imageHighlight}`,
                          },
                          ":focus-visible": {
                            color: `${theme.imageHighlight}`,
                          },
                        }),
                      },
                      Content: {
                        style: () => ({
                          backgroundColor: "transparent",
                          color: `${theme.secondaryText}`,
                        }),
                      },
                      ToggleIcon: {
                        style: () => ({
                          color: `${theme.text}`,
                          fill: `${theme.text}`,
                        }),
                      },
                      ToggleButton: {
                        style: () => ({
                          color: `${theme.text}`,
                          fill: `${theme.text}`,
                        }),
                      },
                    }}
                  >
                    {section["experiences"].map((experience, index) => {
                      return (
                        <ExperienceCard
                          key={`${experience.company}-${experience.title}`}
                          index={index}
                          totalCards={section["experiences"].length}
                          experience={experience}
                          theme={theme}
                        />
                      );
                    })}
                  </Panel>
                );
              })}
            </Accordion>
          </div>
        </BaseProvider>
      </StyletronProvider>
    );
  }
}

export default ExperienceAccordion;
