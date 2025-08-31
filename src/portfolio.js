/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Zakaria's Portfolio",
  description:
    "A physicist dedicated to delivering end-to-end Data Science solutions, Scientific Consulting, and Technical Writing, -helping companies build scalable, robust, and impactful systems through deep analytical expertise and domain-driven insight.",
  og: {
    title: "Zakaria Daoudi Portfolio",
    type: "website",
    url: "http://zakariadaoudi.com/",
  },
};

//Home Page
const greeting = {
  title: "Zakaria Daoudi",
  logo_name: "Zakaria Daoudi",
  subTitle:
   "A physicist dedicated to delivering end-to-end Data Science solutions, Scientific Consulting, and Technical Writing, -helping companies build scalable, robust, and impactful systems through deep analytical expertise and domain-driven insight.",
  resumeLink:
    "https://drive.google.com/file/d/19hTmIySzPJ73mrYQ2VlT8Tk2HBAiPBbD/view?usp=sharing",
  portfolio_repository: "https://github.com/ashutosh1919/masterPortfolio",
  githubProfile: "https://github.com/daoudizakaria",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/daoudizakaria",
  // linkedin: "https://www.linkedin.com/in/zakaria-daoudi-022151122/",
  // gmail: "zackaria.daoudi@gmail.com",

  {
    name: "Github",
    link: "https://github.com/daoudizakaria",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/zakaria-daoudi-022151122/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:zackaria.daoudi@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const reviews = {
  data: [
    {
      id: "Breast Cancer Detection",
      name: "Breast Cancer Detection",
      createdAt: "2023-07-02T00:00:00Z",
      description: "Nuclear Physics Python Code made for my students.",
      url: "https://github.com/daoudizakaria/Radioactive_Decay",
    },
  ],
};

const skills = {
  data: [
    {
      title: "Physics & Applied Mathematics",
      fileName: "FullStackImg",
      skills: [
        "⚡ Help Organizations tackling challenges in Physics, Mathematics, and Enginnering",
        "⚡ Design and Develop analytical models and apply rigouros methods to solve industry problems",
        "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
      ],
      softwareSkills: [
      ],
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
      softwareSkills: [
      ],
    },
    {
      title: "Science Proofreading & Translating Services in English, French, and Arabic",
      fileName: "DesignImg",
      skills: [
        "⚡ Proofread Scientific and Technical Content",
        "⚡ Translate content from and into English, French, and Arabic",
        "⚡ Ensure the content aligns with the client needs",
      ],
      softwareSkills: [
      ],
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
      profileLink: "https://leetcode.com/layman_brother/",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/ashutosh_1919",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/laymanbrother",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "University of Constantine",
      subtitle: "BSc. in Physics and Mathematics",
      logo_path: "umc_logo.png",
      alt_name: "UMC",
      duration: "2015 - 2018",
      descriptions: [
        "⚡ I followed several courses in Physics, Mathematics, and Computational Science.",
        "⚡ My BSc. thesis was about Loop Quantum Gravity, where I gave a comprehensive introduction to the formalism of Loop Quantum Gravity.",
        "⚡ I won the Algerian Physics Olympiad held in M'Sila in 2017.",
        "⚡ I took a summer internship in the Astroparticle research team.",
      ],
      website_link: "https://www.umc.edu.dz/index.php/fr/",
    },
    {
      title: "University of Constantine",
      subtitle: "MSc. in Theoretical Physics and Applied Mathematics",
      logo_path: "umc_logo.png",
      alt_name: "UMC",
      duration: "2018 - 2020",
      descriptions: [
        "⚡ I followed several advances courses in Physics and Applied Mathematics including: Quantum Field Theory, Cosomology, Particle Physics, String Theory, Topology and Geometry, Group Theory, Condensed Matter Physics, and Monte Carlo Techniques.",
        "⚡ My MSc. thesis was about the recent development in Loop Quantum Gravity and the observations that can be used to validate this theory.",
        "⚡ I was responsible of several pedagogical activities including: Introduction to the Philosophy of Quantum Mechanics, Lab Work in Numerical Physics, mentoring 2 BSc. students in Physics and Mathematics.",
        "⚡ I followed an internship in Quantum Information",
      ],
      website_link: "https://www.umc.edu.dz/index.php/fr/",
    },
    {
      title: "University of Annaba",
      subtitle: "PhD. in Theoretical Physics and Applied Mathematics",
      logo_path: "ubma_logo.png",
      alt_name: "UBMA",
      duration: "2022 - Current",
      descriptions: [
        "⚡ I successfully completed 3 internships in String Theory and AdS/CFT correspondence, Astroparticle Physics, and Condensend Matter Physics.",
        "⚡ I am responsible of multiple courses: Quantum Field Theory, Quantum Mechanics, Classical Mechanics, Thermodynamics, Fluid Dynamics, and Numerical Techniques in Physics.",
        "⚡ ",
      ],
      website_link: "https://www.univ-annaba.dz/en/home-2/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Machine Learning",
      subtitle: "- Andrew Ng",
      logo_path: "stanford_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "Deep Learning",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "Data Science",
      subtitle: "- Alex Aklson",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Big Data",
      subtitle: "- Kim Akers",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
      alt_name: "Microsoft",
      color_code: "#D83B0199",
    },
    {
      title: "Advanced Data Science",
      subtitle: "- Romeo Kienzler",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Google Data Analytics",
      subtitle: "- Tony Francis",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:  
    "I have worked with many evolving startups and successfull companies as a Physicist, Mathematician, Data Scientist, or Scientific Consultor/Advisor. The contracts were either a freelancing contract or a remote contract.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "AI Training and Subject Matter Expert",
          company: "Mercor",
          company_url: "https://mercor.com//",
          logo_path: "mercor_logo.png",
          duration: "May 2023 - Current",
          location: "Remote",
          description:
            "I am a Physics, Mathematics, and Arabic Subject Matter Expert. The work is about creating very hard questions in my fields of expertise in order to train the models. I have already trained various models for the biggest AI companies.",
          color: "#000000",
        },
        {
          title: "Scientific Writor and Editor",
          company: "Space Magzine",
          company_url: "https://space-magazin.com/",
          logo_path: "spacemagazin_logo.png",
          duration: "April 2025 - Current",
          location: "Remote",
          description:
            "I was responsible of designing the astronomy section's charts using advanced scientific data and softwares and writing the relevant texts for each subsection.",
          color: "#000000",
        },
        {
          title: "Scientific Advisor and Proofreader",
          company: "PhotoMath inc.",
          company_url: "https://photomath.com/",
          logo_path: "photomath_logo.png",
          duration: "Feb 2024 - Apr 2025",
          location: "Remote",
          description:
            "I was responsible of proofreading and reviewing the Mathematical Content.",
          color: "#000000",
        },
        {
          title: "Mathematics Curriculum Developer",
          company: "J. J. Educational Bootcamp",
          company_url: "https://www.educationalbootcamp.com",
          logo_path: "bootcamp_logo.png",
          duration: "June 2023 - Oct 2024",
          location: "Remote",
          description:
            "Creating and Designing Mathematics and Science curriculum using MS. Office.",
          color: "#0879bf",
        },
        {
          title: "AI Training and Subject Matter Expert",
          company: "Outlier AI",
          company_url: "https://outlier.ai//",
          logo_path: "outlier_logo.png",
          duration: "October 2022 - January 2025",
          location: "Remote",
          description:
            "I am a Physics, Mathematics, and Arabic Subject Matter Expert. The work is about creating very hard questions in my fields of expertise in order to train the models. I have already trained various models for the biggest AI companies.",
          color: "#000000",
        },
        {
          title: "Physicist and Mathematician",
          company: "Bowman Research Group at New York University",
          company_url: "https://wp.nyu.edu/arg/",
          logo_path: "bowman_logo.png",
          duration: "May 2023 - July 2024",
          location: "Remote",
          description:
            "The work involved creating a set of Graduate Physics and Mathematics question hard enough to cause a failure of the model. The questions were used for safety alignment research.",
          color: "#9b1578",
        },
        {
          title: "Physicist and Scientific Advisor",
          company: "Engineering Director Inc.",
          company_url: "https://www.engineeringdirector.com/",
          logo_path: "edi_logo.png",
          duration: "May 2023 - Sep 2023",
          location: "Remote",
          description:
            "Engineering Director Inc. is a company that combine advanced software, autonomous agents, and global environmental data to forecast and prevent corrosion—maximizing asset longevity and minimizing environmental impact. My work was about building a mathematical model the corrosion in the soil to simulate the Impressed Current Cathodic Protection for pipelines.",
          color: "#fc1f20",
        },
      ],
    },
    {
      title:"Machine Learning Work",
      experiences: [
        {
          title: "Machine Learning Engineer",
          company: "Agro Tech",
          company_url: "https://about.google/",
          logo_path: "free_logo.png",
          duration: "Sep 2021 - June 2023",
          location: "Constantine, Algeria",
          description:
            "Build scalable ML pipeline that analyze satellite imagery, local weather data, and farmer inputs to predict crop yield for wheat and olives, and detect early signs of plant diseases.",
          color: "#4285F4",
        },
        {
          title: "Machine Learning Engineer",
          company: ".",
          company_url: "https://about.google/",
          logo_path: "free_logo.png",
          duration: "Mar 2024 - May 2025",
          location: "Algiers, Algeria",
          description:
            "Develop an AI-based sytem capable of analyzing chest X-ray images and automatically detecting diseases such tuberculosis, pneumonia, and other lung abnormalities.",
          color: "#4285F4",
        },
        {
          title: "Machine Learning Researcher",
          company: ".",
          company_url: "https://about.google/",
          logo_path: "free_logo.png",
          duration: "Jan 2024 - April 2025",
          location: "Remote",
          description:
            "Using Big Data to develop the correct Cost function and Loss function to build reliable ML algorithms.",
          color: "#4285F4",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Physics Speaker",
          company: "Cultural Center of the University of Algiers",
          company_url: "https://www.instagram.com/alger_ccu/?hl=en",
          logo_path: "ccu_logo.png",
          duration: "Jan 2025 - Current",
          location: "Algiers, Algeria",
          description:
            "Physics Public Speaker.",
          color: "#4285F4",
        },
        {
          title: "Machine Learning Engineer",
          company: "Biochemistry and Genetics Lab -University of Annaba",
          company_url: "https://www.instagram.com/alger_ccu/?hl=en",
          logo_path: "ubma_logo.png",
          duration: "Feb 2023 - June 2024",
          location: "Annaba, Algeria",
          description:
            "I was in charge of fine-tunning and developping a ML model to analyze Biochemistry and Genetics Data.",
          color: "#4285F4",
        },
        {
          title: "Physics & Mathematics Teacher",
          company: "None",
          company_url: "https://www.instagram.com/alger_ccu/?hl=en",
          logo_path: "free_logo.png",
          duration: "Sep 2020 - June 2024",
          location: "Annaba, Algeria",
          description:
            "I volunteer to teach Physics and Mathematics to disadvantaged students.",
          color: "#4285F4",
        },
        {
          title: "Teacher of Philosophy of Physics",
          company: "University of Constantine",
          company_url: "https://about.google/",
          logo_path: "umc_logo.png",
          duration: "Sep 2018 - May 2019",
          location: "Constantine, Algeria",
          description:
            "Teacher of Philosophy of Quantum Mechanics for Physics, Mathematics, and Philosophy Students.",
          color: "#4285F4",
        },
      ],
    },
  ],
};

// Projects Page
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
  data: [
    {
      id: "neuro-symbolic-sudoku-solver",
      name: "Neuro-Symbolic Sudoku Solver",
      createdAt: "2023-07-02T00:00:00Z",
      description: "Paper published in KDD KiML 2023",
      url: "https://arxiv.org/abs/2307.00653",
    },
    {
      id: "mdp-diffusion",
      name: "MDP-Diffusion",
      createdAt: "2023-09-19T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/mdp-diffusion/",
    },
    {
      id: "consistency-models",
      name: "Consistency Models",
      createdAt: "2023-10-12T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/consistency-models/",
    },
  ],
};
// Projects Page
const projectsnewHeader = {
  title: "Projects",
  description: "Here you can find my projects in Physics, Machine Learning, Mathematics.",
};

const MLHeader = {
  title: "Machine Learning and Data Science",
  description: "Here you can find my projects in Machine Learning and Data Science",
};


const ML = {
  data: [
    {
      id: "Breast Cancer Detection",
      name: "Breast Cancer Detection",
      createdAt: "2023-07-02T00:00:00Z",
      description: "Nuclear Physics Python Code made for my students.",
      url: "https://github.com/daoudizakaria/Radioactive_Decay",
    },
    {
      id: "Cost Function: a mathematical introduction",
      name: "Cost Function: a Mathematical Introduction",
      createdAt: "2023-09-19T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/mdp-diffusion/",
    },
    {
      id: "consistency-models",
      name: "Heart Attack Detection",
      createdAt: "2023-10-12T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/consistency-models/",
    },
    {
      id: "Breast Cancer Detection",
      name: "Crypto Market Detection",
      createdAt: "2023-07-02T00:00:00Z",
      description: "Nuclear Physics Python Code made for my students.",
      url: "https://github.com/daoudizakaria/Radioactive_Decay",
    },
    {
      id: "Cost Function: a mathematical introduction",
      name: "Pneumonia Detection",
      createdAt: "2023-09-19T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/mdp-diffusion/",
    },
    {
      id: "consistency-models",
      name: "ECG Analysis",
      createdAt: "2023-10-12T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/consistency-models/",
    },
    {
      id: "Breast Cancer Detection",
      name: "Climate Change",
      createdAt: "2023-07-02T00:00:00Z",
      description: "Nuclear Physics Python Code made for my students.",
      url: "https://github.com/daoudizakaria/Radioactive_Decay",
    },
    {
      id: "Cost Function: a mathematical introduction",
      name: "Earthquakes and Tectonic Plates: Seismic Analysis",
      createdAt: "2023-09-19T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/mdp-diffusion/",
    },
    {
      id: "consistency-models",
      name: "Marketing Campain",
      createdAt: "2023-10-12T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/consistency-models/",
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
      id: "neuro-symbolic-sudoku-solver",
      name: "Nuclear Physics",
      createdAt: "2023-07-02T00:00:00Z",
      description: "Nuclear Physics Python Code made for my students. The code is available in GitHub.",
      url: "https://github.com/daoudizakaria/Radioactive_Decay",
    },
    {
      id: "mdp-diffusion",
      name: "Ising Model and Monte Carlo Techniques",
      createdAt: "2023-09-19T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/mdp-diffusion/",
    },
    {
      id: "consistency-models",
      name: "Bosonic BFSS Model",
      createdAt: "2023-10-12T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/consistency-models/",
    },
    {
      id: "neuro-symbolic-sudoku-solver",
      name: "Impressed Current Cathodic Protection and Pipelines' corrosion",
      createdAt: "2023-07-02T00:00:00Z",
      description: "Nuclear Physics Python Code made for my students.",
      url: "https://arxiv.org/abs/2307.00653",
    },
    {
      id: "mdp-diffusion",
      name: "Astronomy Section of Space Magazine",
      createdAt: "2023-09-19T00:00:00Z",
      description: "The notes are available in Google Drive.",
      url: "https://drive.google.com/drive/folders/1M3lyfZqpAA_e-711Qeyv0KJgoqY64TrD?usp=sharing",
    },
    {
      id: "consistency-models",
      name: "Quantum Information and Quantum Computing",
      createdAt: "2023-10-12T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/consistency-models/",
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
      id: "neuro-symbolic-sudoku-solver",
      name: "Lecture Notes in Mathematics for Domi Institute",
      createdAt: "2023-07-02T00:00:00Z",
      description: "The notes are availble in google drive. The lecture notes are in French.",
      url: "https://drive.google.com/drive/folders/1Uz3PRJfA5IgBa9RMbYnxo6FB1ayRrM57?usp=sharing",
    },
    {
      id: "mdp-diffusion",
      name: "Tensor Calculus and Geometry using Mathematica and Matlab",
      createdAt: "2023-09-19T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/mdp-diffusion/",
    },
    {
      id: "consistency-models",
      name: "Random Number Generator and Monte Carlo Algorithm",
      createdAt: "2023-10-12T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/consistency-models/",
    },
    {
      id: "consistency-models",
      name: "Math Worksheets for 7-9 grades",
      createdAt: "2023-10-12T00:00:00Z",
      description: "These workhseets were done for the J.J. Bootcamp.",
      url: "https://drive.google.com/drive/folders/1r4_8Akmj5j32gnl80Np5MxxqEA5wkpzL?usp=sharing",
    },
    {
      id: "consistency-models",
      name: "GRE Math Worksheets",
      createdAt: "2023-10-12T00:00:00Z",
      description: "GRE Math Worksheets",
      url: "https://drive.google.com/drive/folders/1hchkc0vM3_8ZYB6dylreo8Dfa97A4oD5?usp=sharing",
    },
  ],
};

// Blog Page
const articlesHeader = {
  title: "Blog Articles",
  description: "Here you can find my articles about Physics, Machine Learning, Mathematics.",
};

const articles = {
  data: [
    {
      id: "String Theory and Quantum Gravity",
      name: "String Theory and Quantum Gravity",
      createdAt: "2023-07-02T00:00:00Z",
      description: "Paper published in Hashnode and Medium",
      url: "https://arxiv.org/abs/2307.00653",
    },
    {
      id: "mdp-diffusion",
      name: "Foundations of Quantum Mechanics",
      createdAt: "2023-09-19T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/mdp-diffusion/",
    },
    {
      id: "consistency-models",
      name: "",
      createdAt: "2023-10-12T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/consistency-models/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_ashutosh.png",
    description:
      "If you're interested with any of my services, or you just want to chat about a potential project or idea, you're most welcome to send me an email.",
  },
  addressSection: {
    title: "Address",
    subtitle: "Saratoga Ave, San Jose, CA, USA 95129",
    locality: "San Jose",
    country: "USA",
    region: "California",
    postalCode: "95129",
    streetAddress: "Saratoga Avenue",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/NvYZqa34Wye4tpS17",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  reviews,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
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
  articlesHeader,
  articles,
  contactPageData,
};
