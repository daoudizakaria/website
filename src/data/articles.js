// Research list page header (bodies live in src/content/research)

const articlesHeader = {
  title: "Research notes",
  description:
    "This section gathers longer-form notes, explainers, and technical writing on physics, machine learning, and mathematics. Entries may include informal write-ups as well as more structured articles—each card opens the full text.",
};

/**
 * Research interests shown at the top of the Research page. Each link names
 * a research article (`article`) or a project (`project`) by its slug; links
 * whose slug no longer exists are skipped, so they never point nowhere.
 */
const researchInterests = {
  title: "Research interests",
  intro:
    "The questions I keep coming back to, and where to read about them on this site.",
  themes: [
    {
      key: "physics",
      glyph: "ħ",
      title: "Particle and fundamental physics",
      text:
        "From the foundations to the data: quantum fields in curved spacetime, black holes and Hawking radiation, and matrix models of M-theory such as BFSS, together with the phenomenology that confronts theory with experiment, at colliders and in the search for dark matter.",
      links: [
        { kind: "project", slug: "bfss-model", label: "BFSS matrix model" },
        {
          kind: "article",
          slug: "hawking-radiation-and-universe-expansion",
          label: "Hawking radiation",
        },
        {
          kind: "article",
          slug: "quantum-field-theory-general-relativity-and-er-bridge",
          label: "QFT, GR and ER bridges",
        },
      ],
    },
    {
      key: "ml",
      glyph: "∇",
      title: "Machine learning and science",
      text:
        "Machine learning as a scientific instrument, in any field where data has to become evidence, from physics to medicine: models that are calibrated, validated and stress-tested rather than merely accurate, with their limits stated as clearly as their results.",
      links: [
        {
          kind: "project",
          slug: "wdbc-breast-cancer",
          label: "Breast cancer model",
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
        "Turning satellite and geospatial data into decisions: mapping land cover and urban growth, monitoring crops, water and ecosystems over time, and measuring how far the maps can be trusted before anyone acts on them.",
      links: [],
    },
  ],
};

// Contact Page

export { articlesHeader, researchInterests };
