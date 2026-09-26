import React from "react";
import "./SocialMedia.css";
import { socialMediaLinks } from "../../portfolio";
import styled from "styled-components";

const IconWrapper = styled.span`
  i {
    background-color: ${(props) => props.backgroundColor};
  }
  &:hover i {
    background-color: ${({ theme }) => theme.text};
    transition: 0.3s ease-in;
  }
`;

export default function socialMedia(props) {
  return (
    <div className="social-media-div">
      {socialMediaLinks.map((media, i) => {
        return (
          <a
            key={i}
            href={media.link}
            className={`icon-button`}
            target="_blank"
            rel="noopener noreferrer"
            // Icon-only link: without this a screen reader announces just "link".
            aria-label={media.name}
          >
            <IconWrapper {...media} {...props}>
              {media.iconifyClassname ? (
                /* Nested inside <i> so it inherits the circular badge
                   styling, which is keyed on the <i> element. */
                <i className="social-icon-iconify">
                  <span
                    className="iconify"
                    data-icon={media.iconifyClassname}
                    data-inline="false"
                  />
                </i>
              ) : (
                <i className={`fab ${media.fontAwesomeIcon}`}></i>
              )}
            </IconWrapper>
            {/* <span></span> */}
          </a>
        );
      })}
    </div>
  );
}
