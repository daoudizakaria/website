import React from "react";
import "./Skills.css";
import { skills } from "../../portfolio";
import { Fade } from "../../components/reveal/Reveal";

/* Small line icons (24×24, stroke = currentColor) for the service cards. */
const ICONS = {
  atom: (
    <>
      <circle cx="12" cy="12" r="1.6" fill="currentColor" stroke="none" />
      <ellipse cx="12" cy="12" rx="10" ry="4" />
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
    </>
  ),
  chart: (
    <>
      <path d="M3 3v18h18" />
      <path d="M7 15l4-5 3 3 6-7" />
      <circle cx="7" cy="15" r="1" fill="currentColor" />
      <circle cx="11" cy="10" r="1" fill="currentColor" />
      <circle cx="14" cy="13" r="1" fill="currentColor" />
      <circle cx="20" cy="6" r="1" fill="currentColor" />
    </>
  ),
  pen: (
    <>
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />
    </>
  ),
};

function ServiceIcon({ name }) {
  return (
    <svg
      className="skill-card-icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {ICONS[name] || ICONS.atom}
    </svg>
  );
}

function ChipRow({ label, items }) {
  return (
    <div className="skill-chip-row">
      <span className="skill-chip-label">{label}</span>
      <ul className="skill-chips">
        {items.map((item) => (
          <li key={item.name} className="skill-chip">
            {item.icon && (
              <span
                className="iconify skill-chip-icon"
                data-icon={item.icon}
                data-inline="false"
                aria-hidden="true"
              />
            )}
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function SkillSection() {
  return (
    <div className="skills-grid">
      {skills.data.map((service, i) => (
        <Fade
          key={service.title}
          bottom
          duration={900}
          distance="24px"
          className="skill-card-wrap"
        >
          <article className="skill-card">
            <div className="skill-card-top">
              <ServiceIcon name={service.icon} />
              <span className="skill-card-number" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
            <h2 className="skill-card-title">{service.title}</h2>
            <p className="skill-card-tagline">{service.tagline}</p>
            <ul className="skill-card-list">
              {service.skills.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
            <div className="skill-card-footer">
              {service.tools && service.tools.length > 0 && (
                <ChipRow label="Tools" items={service.tools} />
              )}
              {service.languages && (
                <ChipRow
                  label="Languages"
                  items={service.languages.map((name) => ({ name }))}
                />
              )}
            </div>
          </article>
        </Fade>
      ))}
    </div>
  );
}
