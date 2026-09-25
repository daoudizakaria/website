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

const ML = {
  data: [
    {
      id: "machine-learning-projects",
      name: "Machine Learning Projects",
      createdAt: "2024-06-01T00:00:00Z",
      description:
        "Collection of Machine Learning projects in Jupyter Notebook",
      url: "https://github.com/daoudizakaria/Machine-Learning-Projects",
    },
    {
      id: "youtube-scraper",
      name: "YouTube Scraper",
      createdAt: "2024-06-01T00:00:00Z",
      description: "YouTube scraper for different channel categories",
      url: "https://github.com/daoudizakaria/YouTube-Scraper",
    },
  ],
};

const physicsHeader = {
  title: "Physics & Engineering",
  description: "Here you can find my projects in Physics and Engineering.",
};

const physics = {
  data: [
    {
      id: "bfss-model",
      name: "BFSS Model",
      createdAt: "2024-06-01T00:00:00Z",
      description: "Bosonic part of the BFSS Model, written in Fortran 90",
      url: "https://github.com/daoudizakaria/BFSS_model",
    },
    {
      id: "ising-model",
      name: "Ising Model",
      createdAt: "2024-06-01T00:00:00Z",
      description: "Simulation of the 2D Ising Model",
      url: "https://github.com/daoudizakaria/Ising-Model",
    },
    {
      id: "radioactive-decay",
      name: "Radioactive Decay",
      createdAt: "2024-06-01T00:00:00Z",
      description: "Simulating Radioactive Decay",
      url: "https://github.com/daoudizakaria/Radioactive_Decay",
    },
    {
      id: "theoretical-physics-scraping",
      name: "Theoretical Physics Scraping",
      createdAt: "2024-06-01T00:00:00Z",
      description: "Scraping arXiv to download lecture notes via Python script",
      url: "https://github.com/daoudizakaria/Theoretical-Physics-Scraping",
    },
    {
      id: "impressed-current-cathodic-protection",
      name: "Impressed Current Cathodic Protection and Pipelines' corrosion",
      createdAt: "2023-07-02T00:00:00Z",
      description:
        "Research on impressed current cathodic protection and pipeline corrosion.",
      url: "https://arxiv.org/abs/2307.00653",
    },
    {
      id: "astronomy-space-magazine",
      name: "Astronomy Section of Space Magazine",
      createdAt: "2023-09-19T00:00:00Z",
      description: "The notes are available in Google Drive.",
      url:
        "https://drive.google.com/drive/folders/1M3lyfZqpAA_e-711Qeyv0KJgoqY64TrD?usp=sharing",
    },
  ],
};

const mathHeader = {
  title: "Mathematics",
  description: "Here you can find my projects in Mathematics.",
};

const math = {
  data: [
    {
      id: "domi-institute-lecture-notes",
      name: "Lecture Notes in Mathematics for Domi Institute",
      createdAt: "2023-07-02T00:00:00Z",
      description:
        "The notes are available in google drive. The lecture notes are in French.",
      url:
        "https://drive.google.com/drive/folders/1Uz3PRJfA5IgBa9RMbYnxo6FB1ayRrM57?usp=sharing",
    },
    {
      id: "math-worksheets-7-9",
      name: "Math Worksheets for 7-9 grades",
      createdAt: "2023-10-12T00:00:00Z",
      description: "These worksheets were done for the J.J. Bootcamp.",
      url:
        "https://drive.google.com/drive/folders/1r4_8Akmj5j32gnl80Np5MxxqEA5wkpzL?usp=sharing",
    },
    {
      id: "gre-math-worksheets",
      name: "GRE Math Worksheets",
      createdAt: "2023-10-12T00:00:00Z",
      description: "GRE Math Worksheets",
      url:
        "https://drive.google.com/drive/folders/1hchkc0vM3_8ZYB6dylreo8Dfa97A4oD5?usp=sharing",
    },
  ],
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
  ML,
  physicsHeader,
  physics,
  mathHeader,
  math,
  reviews,
};
