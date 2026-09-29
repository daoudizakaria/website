// Areas of work, one card each (src/containers/skills/SkillSection.js).
//
// icon:  "atom" | "chart" | "pen" (small line icons drawn in the component)
// tools: shown as labelled chips; `icon` is an Iconify name (optional)

const skills = {
  data: [
    {
      title: "Data Science & Machine Learning",
      icon: "chart",
      tagline:
        "Statistical and machine-learning models, from prototype to production, with explicit validation.",
      skills: [
        "Predictive and statistical models to support decisions",
        "Deep-learning models, from prototype to production",
        "Data cleaning, exploratory analysis and visualisation",
      ],
      tools: [
        { name: "Python", icon: "simple-icons:python" },
        { name: "pandas", icon: "simple-icons:pandas" },
        { name: "TensorFlow", icon: "simple-icons:tensorflow" },
        { name: "Keras", icon: "simple-icons:keras" },
        { name: "PyTorch", icon: "simple-icons:pytorch" },
        { name: "Jupyter", icon: "simple-icons:jupyter" },
        { name: "PostgreSQL", icon: "simple-icons:postgresql" },
        { name: "AWS", icon: "simple-icons:amazonaws" },
      ],
    },
    {
      title: "Physics & Mathematical Modelling",
      icon: "atom",
      tagline: "Analytical and numerical models derived from first principles.",
      skills: [
        "Analytical and numerical models, from first principles to working code",
        "Monte Carlo simulation and uncertainty analysis",
        "Forecasting and time-series models for decisions under uncertainty",
        "Expert input on physics, mathematics and engineering problems",
      ],
      tools: [
        { name: "Python", icon: "simple-icons:python" },
        { name: "NumPy", icon: "simple-icons:numpy" },
        { name: "Fortran", icon: "simple-icons:fortran" },
        { name: "Mathematica", icon: "simple-icons:wolframmathematica" },
        { name: "Matplotlib" },
      ],
    },
    {
      title: "Scientific Writing, Editing & Translation",
      icon: "pen",
      tagline:
        "Technical and scientific documents for specialist and general readers.",
      skills: [
        "Technical reports, white papers and product documentation",
        "Publication-quality LaTeX documents and figures",
        "Curricula and educational content",
        "Scientific proofreading, and translation between English, French and Arabic",
      ],
      tools: [{ name: "LaTeX", icon: "simple-icons:latex" }, { name: "TikZ" }],
      languages: ["English", "French", "Arabic"],
    },
  ],
};

export { skills };
