import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { Fade } from "../../components/reveal/Reveal";
import "./ContactComponent.css";
import {
  greeting,
  contactPageData,
  socialMediaLinks,
} from "../../portfolio.js";

const ContactData = contactPageData.contactSection;
// Visible, copyable address — mailto buttons silently fail on machines
// without a configured mail client.
const gmailLink = socialMediaLinks.find((s) => s.link.startsWith("mailto:"));
const contactEmail = gmailLink ? gmailLink.link.replace("mailto:", "") : null;

class Contact extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="contact-main">
        <Header theme={theme} pageTitle="Contact" />
        <div className="basic-contact">
          <Fade bottom duration={1000} distance="40px">
            <div className="contact-heading-div">
              <div className="contact-heading-img-div">
                <img
                  src={require(`../../assets/images/${ContactData["profile_image_path"]}`)}
                  alt=""
                />
              </div>
              <div className="contact-heading-text-div">
                <h1
                  className="contact-heading-text"
                  style={{ color: theme.text }}
                >
                  {ContactData["title"]}
                </h1>
                <p
                  className="contact-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {ContactData["description"]}
                </p>
                {contactEmail && (
                  <p
                    className="contact-header-detail-text subTitle"
                    style={{ color: theme.secondaryText }}
                  >
                    Email:{" "}
                    <a
                      href={`mailto:${contactEmail}`}
                      style={{ color: theme.imageHighlight }}
                    >
                      {contactEmail}
                    </a>
                  </p>
                )}
                <SocialMedia theme={theme} />
                <div className="resume-btn-div">
                  <Button
                    text="See My Resume"
                    newTab={true}
                    href={greeting.resumeLink}
                    theme={theme}
                  />
                </div>
              </div>
            </div>
          </Fade>
        </div>
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Contact;
