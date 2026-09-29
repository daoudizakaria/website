import React, { Component } from "react";
import ExperienceCard from "../../components/experienceCard/ExperienceCard.js";
import "./ExperienceAccordion.css";
import { Accordion, Panel } from "baseui/accordion";
import { BaseProvider, LightTheme } from "baseui";
import { Provider as StyletronProvider } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";

// baseui (and its styletron engine) is scoped to this component (the only
// baseui consumer on the site), so it ships with the lazy Experience page
// instead of in the entry bundle every visitor downloads.
const engine = new Styletron();

const MONTHS = [
  "jan",
  "feb",
  "mar",
  "apr",
  "may",
  "jun",
  "jul",
  "aug",
  "sep",
  "oct",
  "nov",
  "dec",
];

// "May 2023" -> 202304 (sortable); "Present" -> Infinity.
function monthIndex(text) {
  const t = (text || "").trim().toLowerCase();
  if (!t || t === "present" || t === "current") return Infinity;
  const [month, year] = t.split(/\s+/);
  const m = MONTHS.indexOf(month.slice(0, 3));
  return Number(year) * 12 + (m < 0 ? 0 : m);
}

// Newest first: ongoing roles on top, then by end date, then by start date.
function newestFirst(experiences) {
  const range = (e) => (e.duration || "").split(/\s*[–-]\s*/);
  return [...experiences].sort((a, b) => {
    const [aStart, aEnd] = range(a);
    const [bStart, bEnd] = range(b);
    return (
      monthIndex(bEnd) - monthIndex(aEnd) ||
      monthIndex(bStart) - monthIndex(aStart)
    );
  });
}

class ExperienceAccordion extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <StyletronProvider value={engine}>
        <BaseProvider theme={LightTheme}>
          <div className="experience-accord">
            {/* Every section open by default, so no role is hidden behind a click. */}
            <Accordion
              accordion={false}
              initialState={{
                expanded: this.props.sections.map(
                  (section) => section["title"]
                ),
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
                    {newestFirst(section["experiences"]).map(
                      (experience, index) => {
                        return (
                          <ExperienceCard
                            key={`${experience.company}-${experience.title}`}
                            index={index}
                            totalCards={section["experiences"].length}
                            experience={experience}
                            theme={theme}
                          />
                        );
                      }
                    )}
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
