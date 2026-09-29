import React, { Component } from "react";
import "./CertificationCard.css";
import { Fade } from "../reveal/Reveal";

class CertificationCard extends Component {
  render() {
    const certificate = this.props.certificate;
    const theme = this.props.theme;
    return (
      /* The card must be the grid item itself: a reveal wrapper around it
         would swallow the grid sizing and collapse the card. */
      <div className="cert-card">
        <Fade
          bottom
          duration={2000}
          distance="20px"
          className="cert-card-inner"
        >
          <div className="content">
            <a
              href={certificate.certificate_link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="content-overlay"></div>
              <div
                className="cert-header"
                style={{ backgroundColor: certificate.color_code }}
              >
                <img
                  loading="lazy"
                  decoding="async"
                  className="logo_img"
                  src={require(`../../assets/images/${certificate.logo_path}`)}
                  alt={certificate.alt_name}
                />
              </div>
              <div className="content-details fadeIn-top">
                {/* Sits on a 70%-black hover overlay, so it must stay
                    light — the stylesheet sets #fff. */}
                <h3 className="content-title">Certificate</h3>
              </div>
            </a>
          </div>
          <div className="cert-body">
            <h2 className="cert-body-title" style={{ color: theme.text }}>
              {certificate.title}
            </h2>
            <h3
              className="cert-body-subtitle"
              style={{ color: theme.secondaryText }}
            >
              {certificate.subtitle}
            </h3>
          </div>
        </Fade>
      </div>
    );
  }
}

export default CertificationCard;
