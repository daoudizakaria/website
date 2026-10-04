// Research list page header (bodies live in src/content/research)

const articlesHeader = {
  title: "Research notes",
  description:
    "Reviews, lecture notes and technical articles in physics, machine learning and mathematics. Each entry opens with a short abstract.",
};

/**
 * Research interests shown at the top of the Research page. Each link names
 * a research article (`article`) or a project (`project`) by its slug; links
 * whose slug no longer exists are skipped, so they never point nowhere.
 */
const researchInterests = {
  title: "Research interests",
  intro:
    "Research interests, with links to the related articles and projects on this site.",
  themes: [
    {
      key: "physics",
      glyph: "ħ",
      title: "Physics and engineering",
      text:
        "From fundamental questions to engineering practice: quantum fields in curved spacetime, black holes and matrix models of M-theory, particle phenomenology at colliders and in dark-matter searches, and analytical models for real engineering problems, such as pipeline corrosion.",
      links: [
        {
          kind: "article",
          slug: "loop-quantum-gravity-masters-thesis",
          label: "Master's thesis: loop quantum gravity",
        },
        { kind: "project", slug: "bfss-model", label: "BFSS matrix model" },
        {
          kind: "article",
          slug: "hawking-radiation-review",
          label: "Hawking radiation",
        },
        {
          kind: "article",
          slug: "quantum-field-theory-general-relativity-and-er-bridge",
          label: "QFT, GR and ER bridges",
        },
        {
          kind: "project",
          slug: "impressed-current-cathodic-protection",
          label: "Cathodic protection design",
        },
      ],
    },
    {
      key: "ml",
      glyph: "∇",
      title: "Machine learning and science",
      text:
        "Machine learning as a scientific instrument, in physics, medicine and other fields where data must serve as evidence, with emphasis on calibration, validation and a clear statement of each model's limitations.",
      links: [
        {
          kind: "project",
          slug: "wdbc-breast-cancer",
          label: "Breast cancer model",
        },
        {
          kind: "project",
          slug: "ligo-black-hole-search",
          label: "Black-hole search in LIGO data",
        },
      ],
    },
    {
      key: "networks",
      glyph: "θ",
      title: "Neural networks and complex systems",
      text:
        "Learning systems seen as complex systems: how loss landscapes shape what gradient-based optimisation can find, how neural networks store and retrieve memories, and the point at which a signal becomes learnable from noisy, high-dimensional data.",
      links: [
        { kind: "article", slug: "complex-systems", label: "Complex systems" },
        { kind: "project", slug: "ising-model", label: "Ising model" },
      ],
    },
    {
      key: "earth",
      glyph: "⊕",
      title: "Earth observation and geospatial AI",
      text:
        "Remote sensing and geospatial machine learning: land-cover and urban-growth mapping, monitoring of crops, water and ecosystems, and assessment of map accuracy.",
      links: [
        {
          kind: "project",
          slug: "mitidja-farmland-watch",
          label: "Farmland loss in the Mitidja",
        },
      ],
    },
  ],
};

export { articlesHeader, researchInterests };
