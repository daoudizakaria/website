import React, { Suspense, lazy } from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";
import { Fade } from "../../components/reveal/Reveal";

// Only downloaded when no hero photo is configured.
const FeelingProud = lazy(() => import("./FeelingProud"));

const photoUrl = (file, w) =>
  `${process.env.PUBLIC_URL || ""}/uploads/profile/${file}-${w}.webp`;

function HeroPhoto({ photo }) {
  const largest = photo.widths[photo.widths.length - 1];
  return (
    <img
      className="greeting-photo"
      src={photoUrl(photo.file, largest)}
      srcSet={photo.widths
        .map((w) => `${photoUrl(photo.file, w)} ${w}w`)
        .join(", ")}
      sizes="(max-width: 768px) 80vw, 440px"
      width={photo.width}
      height={photo.height}
      alt={photo.alt}
      decoding="async"
      fetchpriority="high"
    />
  );
}

export default function Greeting(props) {
  const theme = props.theme;
  return (
    <Fade bottom duration={2000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className="greeting-text" style={{ color: theme.text }}>
                {greeting.title}
              </h1>
              {greeting.nickname && (
                <h2 className="greeting-nickname" style={{ color: theme.text }}>
                  ( {greeting.nickname} )
                </h2>
              )}
              <p
                className="greeting-text-p subTitle"
                style={{ color: theme.secondaryText }}
              >
                {greeting.subTitle}
              </p>
              <SocialMedia theme={theme} />
              <div className="button-greeting-div">
                <Button
                  text="Contact me"
                  href={`${process.env.PUBLIC_URL}/contact`}
                  theme={theme}
                />
                <Button
                  text="See my resume"
                  newTab={true}
                  href={greeting.resumeLink}
                  theme={theme}
                />
              </div>
              <div className="portfolio-repo-btn-div">
                <Button
                  text="⭐ Star Me On Github"
                  newTab={true}
                  href={greeting.portfolio_repository}
                  theme={theme}
                  className="portfolio-repo-btn"
                />
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            {greeting.heroPhoto ? (
              <HeroPhoto photo={greeting.heroPhoto} />
            ) : (
              <Suspense fallback={null}>
                <FeelingProud theme={theme} />
              </Suspense>
            )}
          </div>
        </div>
      </div>
    </Fade>
  );
}
