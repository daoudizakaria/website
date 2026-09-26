import React from "react";
import "./Testimonials.css";
import { Fade } from "../../components/reveal/Reveal";
import { testimonialsHeader, testimonials } from "../../portfolio";

export default function Testimonials({ theme }) {
  if (!testimonials.data.length) return null;

  return (
    <div className="testimonials-main" id="testimonials">
      <Fade bottom duration={1000} distance="20px">
        <div className="testimonials-heading-div">
          <h2 className="testimonials-title" style={{ color: theme.text }}>
            {testimonialsHeader.title}
          </h2>
          <p
            className="testimonials-subtitle subTitle"
            style={{ color: theme.secondaryText }}
          >
            {testimonialsHeader.description}
          </p>
        </div>
      </Fade>
      <div className="testimonials-grid">
        {testimonials.data.map((item) => (
          <figure
            key={item.id}
            className="testimonial-card"
            style={{ backgroundColor: theme.highlight }}
          >
            <span
              className="testimonial-mark"
              style={{ color: theme.imageHighlight }}
              aria-hidden="true"
            >
              &ldquo;
            </span>
            <blockquote
              className="testimonial-quote"
              style={{ color: theme.text }}
            >
              {item.quote}
            </blockquote>
            <figcaption
              className="testimonial-meta"
              style={{ color: theme.secondaryText }}
            >
              {item.context} · {item.year}
            </figcaption>
          </figure>
        ))}
      </div>
      <p className="testimonials-verify">
        <a
          href={testimonialsHeader.profileLink}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: theme.imageHighlight }}
        >
          {testimonialsHeader.profileLinkLabel}{" "}
          <span aria-hidden="true">→</span>
        </a>
      </p>
    </div>
  );
}
