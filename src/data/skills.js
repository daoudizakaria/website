// "What I Do" — one card per service (src/containers/skills/SkillSection.js).
//
// icon:  "atom" | "chart" | "pen" (small line icons drawn in the component)
// tools: shown as labelled chips; `icon` is an Iconify name (optional)

const skills = {
  data: [
    {
      title: "Physics & Mathematical Modelling",
      icon: "atom",
      tagline: "Turning hard technical problems into models you can trust.",
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
      title: "Data Science & Machine Learning",
      icon: "chart",
      tagline:
        "Models that turn data into decisions and hold up in production.",
      skills: [
        "Predictive and statistical models that guide decision-making",
        "Deep-learning models, from prototype to production",
        "Data cleaning, analysis and visualization that surface meaningful trends",
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
      title: "Scientific Writing, Editing & Translation",
      icon: "pen",
      tagline:
        "Clear, accurate technical content for specialists and non-specialists alike.",
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

// Education Page

const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "",
    },
  ],
};

export { skills, competitiveSites };
