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
      key: "particle",
      glyph: "γ",
      title: "Particle physics and phenomenology",
      text:
        "Where theory meets experiment: working out what the Standard Model and its extensions predict at colliders and in detectors, simulating events with Monte Carlo generators, and testing those simulations against data in the search for new physics such as dark matter.",
      links: [],
    },
    {
      key: "fundamental",
      glyph: "ħ",
      title: "Fundamental physics",
      text:
        "The foundations: quantum fields in curved spacetime, black holes and Hawking radiation, Einstein–Rosen bridges, and matrix models such as BFSS, a candidate non-perturbative formulation of M-theory.",
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
        "Machine learning as a scientific instrument, held to the standards of physics: models that are calibrated, validated and stress-tested rather than merely accurate, and the statistical physics that explains how learning systems store and recover information.",
      links: [
        {
          kind: "project",
          slug: "wdbc-breast-cancer",
          label: "Breast cancer model",
        },
        { kind: "article", slug: "complex-systems", label: "Complex systems" },
      ],
    },
    {
      key: "statphys",
      glyph: "σ",
      title: "Statistical physics and complex systems",
      text:
        "How collective behaviour emerges from many interacting parts: phase transitions, spin glasses and neural memory, and the same tools applied to financial markets and credit risk.",
      links: [
        { kind: "project", slug: "ising-model", label: "Ising model" },
        { kind: "article", slug: "complex-systems", label: "Complex systems" },
        {
          kind: "article",
          slug: "literature-review-credit-market-statistical-physics",
          label: "Credit market review",
        },
      ],
    },
  ],
};

// Contact Page

export { articlesHeader, researchInterests };
