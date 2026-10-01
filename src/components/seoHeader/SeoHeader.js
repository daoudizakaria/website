import React from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import {
  greeting,
  seo,
  socialMediaLinks,
  certifications,
} from "../../portfolio.js";

const SITE_URL = "https://zakariadaoudi.com";

function SeoHeader({ pageTitle, description }) {
  const title = pageTitle ? `${pageTitle} · ${seo.title}` : seo.title;
  const { pathname } = useLocation();
  const path = pathname.replace(/\/+$/, "");
  const canonical = `${SITE_URL}${path === "/home" ? "" : path}` || SITE_URL;
  const summary = (description || seo.description).replace(/\s+/g, " ").trim();
  let sameAs = [];
  socialMediaLinks
    .filter(
      (media) =>
        !(media.link.startsWith("tel") || media.link.startsWith("mailto"))
    )
    .forEach((media) => {
      sameAs.push(media.link);
    });

  let mail = socialMediaLinks
    .find((media) => media.link.startsWith("mailto"))
    .link.substring("mailto:".length);

  let credentials = [];
  certifications.certifications.forEach((certification) => {
    credentials.push({
      "@context": "https://schema.org",
      "@type": "EducationalOccupationalCredential",
      url: certification.certificate_link,
      name: certification.title,
      description: certification.subtitle,
    });
  });
  const data = {
    "@context": "https://schema.org/",
    "@type": "Person",
    name: greeting.title,
    url: seo?.og?.url,
    email: mail,
    sameAs: sameAs,
    jobTitle: seo.jobTitle,
    hasCredential: credentials,
  };
  return (
    <Helmet defer={false}>
      <title>{title}</title>
      <meta name="description" content={summary} />
      <link rel="canonical" href={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={summary} />
      <meta property="og:type" content={seo?.og?.type} />
      <meta property="og:url" content={canonical} />
      <script type="application/ld+json">{JSON.stringify(data)}</script>
    </Helmet>
  );
}

export default SeoHeader;
