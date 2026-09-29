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
// Projects page (filterable listing — see Projectsnew.js)

const projectsnewHeader = {
  title: "Projects",
  description:
    "Research, client work, open-source tools and teaching material in physics, machine learning and mathematics, each written up in full on its own page. Filter by area, or start with the selected work.",
  selectedBlurb:
    "Four projects that show the range of the work: engineering design for a client, a gravitational-wave search in real detector data, a clinical prediction model, and a physics simulation study.",
};

/** One line under the heading when the list is filtered to an area. */
const projectAreas = {
  ml:
    "Predictive models validated the way their results will be used, and pipelines that collect the data.",
  physics:
    "Simulations, analytical models and research tools, from lattice Monte Carlo to engineering design.",
  math:
    "Queueing models for operations planning, and teaching material from school maths to the GRE.",
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
  projectAreas,
  reviews,
};
