// What-I-do skill sections + competitive sites

const skills = {
  data: [
    {
      title: "Physics & Applied Mathematics",
      fileName: "FullStackImg",
      skills: [
        "⚡ Help organizations tackle challenges in Physics, Mathematics, and Engineering",
        "⚡ Subject Matter Expert in Physics and Mathematics",
        "⚡ Design and Develop analytical models and apply rigorous methods to solve industry problems",
        "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
      ],
      softwareSkills: [],
    },
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
        "⚡ Build and Refine predictive models that guide decision making",
        "⚡ Cleaning, Analyzing, and Visualizing Data to uncover meaningful trends",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Deeplearning",
          imageSrc: "deeplearning_ai_logo.png",
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
      ],
    },
    {
      title: "Scientific Consulting, Content Creating, & Technical Writing",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Developing clear and precise scientific content tailored to the specific needs of companies",
        "⚡ Create well-researched materials including: technical reports, white papers, and product documentation",
        "⚡ Produce professional LaTeX documents",
        "⚡ Curriculum Development",
        "⚡ Educational Content Creation",
      ],
      softwareSkills: [],
    },
    {
      title:
        "Science Proofreading & Translating Services in English, French, and Arabic",
      fileName: "DesignImg",
      skills: [
        "⚡ Proofread Scientific and Technical Content",
        "⚡ Translate content from and into English, French, and Arabic",
        "⚡ Ensure the content aligns with the client needs",
      ],
      softwareSkills: [],
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
