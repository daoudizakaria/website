// Home page greeting + social links

const greeting = {
  title: "Zakaria Daoudi",
  logo_name: "Zakaria Daoudi",
  subTitle:
    "A physicist dedicated to delivering end-to-end Data Science solutions, Scientific Consulting, and Technical Writing — helping companies build scalable, robust, and impactful systems through deep analytical expertise and domain-driven insight.",
  resumeLink:
    "https://drive.google.com/file/d/19hTmIySzPJ73mrYQ2VlT8Tk2HBAiPBbD/view?usp=sharing",
  portfolio_repository: "https://github.com/daoudizakaria/website",
  githubProfile: "https://github.com/daoudizakaria",
  // Photo beside the greeting. Remove this entry to bring back the
  // illustration (FeelingProud). Files: public/uploads/profile/.
  heroPhoto: {
    file: "zakaria-hero",
    widths: [640, 960],
    width: 960,
    height: 952,
    alt:
      "Zakaria Daoudi smiling, beneath a hand-painted ceiling of colourful floral motifs and tiles",
  },
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/daoudizakaria",
  // linkedin: "https://www.linkedin.com/in/zakaria-daoudi-022151122/",
  // gmail: "zackaria.daoudi@gmail.com",

  {
    name: "Github",
    link: "https://github.com/daoudizakaria",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/zakaria-daoudi-022151122/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Upwork",
    link: "https://www.upwork.com/freelancers/~01676c59130490a282",
    iconifyClassname: "simple-icons:upwork",
    backgroundColor: "#14A800", // Upwork brand green; white glyph 3.2:1
  },
  {
    name: "Gmail",
    link: "mailto:zackaria.daoudi@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

export { greeting, socialMediaLinks };
