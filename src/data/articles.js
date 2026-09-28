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
      key: "complex",
      glyph: "σ",
      title: "Complex systems and disordered landscapes",
      text:
        "How collective behaviour emerges from many interacting parts: phase transitions, memory in neural networks, spin glasses, and signal recovery in high-dimensional random landscapes.",
      links: [
        { kind: "article", slug: "complex-systems", label: "Complex systems" },
        { kind: "project", slug: "ising-model", label: "Ising model" },
      ],
    },
    {
      key: "gravity",
      glyph: "ħ",
      title: "Gravity, black holes and matrix models",
      text:
        "Quantum effects in curved spacetime and candidate non-perturbative descriptions of string and M-theory: Hawking radiation, Einstein–Rosen bridges, and the BFSS matrix model at finite temperature.",
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
      key: "finance",
      glyph: "λ",
      title: "Statistical physics of financial markets",
      text:
        "Methods from statistical physics applied to credit risk: structural models of default, and loss distributions of portfolios whose assets are correlated.",
      links: [
        {
          kind: "article",
          slug: "literature-review-credit-market-statistical-physics",
          label: "Credit market review",
        },
      ],
    },
    {
      key: "monte-carlo",
      glyph: "∫",
      title: "Monte Carlo methods and validated modelling",
      text:
        "Simulation and statistical inference that are checked, not just run: Monte Carlo compared against exact results, and predictive models validated the way their results will be used.",
      links: [
        {
          kind: "project",
          slug: "radioactive-decay",
          label: "Radioactive decay",
        },
        {
          kind: "project",
          slug: "wdbc-breast-cancer",
          label: "Breast cancer model",
        },
      ],
    },
  ],
};

// Contact Page

export { articlesHeader, researchInterests };
