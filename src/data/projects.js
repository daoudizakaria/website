// Project category listings + publications + reviews

const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [],
};
// Projects page (grouped listings — see Projectsnew.js)

const projectsnewHeader = {
  title: "Projects",
  description:
    "Work is organized by area: machine learning and data science, physics and engineering, and mathematics. Cards link to external resources when a URL is available.",
};

const MLHeader = {
  title: "Machine Learning and Data Science",
  description:
    "Here you can find my projects in Machine Learning and Data Science",
};

const physicsHeader = {
  title: "Physics & Engineering",
  description: "Here you can find my projects in Physics and Engineering.",
};

const mathHeader = {
  title: "Mathematics",
  description: "Here you can find my projects in Mathematics.",
};

// Research / articles list page (header copy only; article bodies live in src/content/research/articles/*.md)

const reviews = {
  data: [
    {
      id: "Radioactive Decay",
      name: "Radioactive Decay",
      createdAt: "2023-07-02T00:00:00Z",
      description: "Nuclear Physics Python Code made for my students.",
      url: "https://github.com/daoudizakaria/Radioactive_Decay",
    },
  ],
};

export {
  projectsHeader,
  publicationsHeader,
  publications,
  projectsnewHeader,
  MLHeader,
  physicsHeader,
  mathHeader,
  reviews,
};
