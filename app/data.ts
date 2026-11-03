export const personalInfo = {
  name: "Darshana G",
  initials: "YN",
  role: "Software Developer",
  tagline: "I eager to learn technologies and solve real-world problems.",
  email: "darshankanase65@gmail.com",
  phone: "+91 9113821710",
  phoneHref: "tel:+919113821710",
  location: "Bengaluru, India",
  imageUrl: "/Port-folio.jpeg",
  github: "https://github.com/imdarshhhhan",
  linkedin: "https://www.linkedin.com/in/darshan-g89/",
  leetcode: "https://leetcode.com/u/Darshan-G/",
  resumeUrl: "/CV-latest-sd.pdf",
};

export const stats = [
  { value: 0, label: "Years of Experience" },
  { value: 6, label: "Projects Completed" },
  { value: 16, label: "Technologies Used" },
  { value: 138, label: "Code Commits" },
];

export const projects = [
  {
    number: "01",
    title: "LearnPulse",
    description: "LearnPulse is high reliability adaptive assessment & learning platform, which uses Retrieval-Augmented Generation (RAG) pipeline with ChromaDB vector search and local LLM to generate the Source grounded MCQs using automated validation, provides student and faculty workflow as an complete agentic LMS platform.",
    stack: ["FastAPI", "ChromaDB", "Next.js", "TypeScript", "Gemini flash Lite"],
    live: "",
    github: "https://github.com/imdarshhhhan/LearnPulse",
  },
  {
    number: "02",
    title: "DataLens",
    description: "DataLens is AI assisted full-stack platform for Data Analysis and visualisation enabled with natural language querying of CSV/Excel/JSON files using LLM , featured with NL-to-SQL pipeline for real-time queries on datasets up to 100K rows and uses DuckDB as analytical engine and SQLite for fast storage purposes. ",
    stack: ["React.js", "Python", "SQLite","DuckDB","Open Source LLM"],
    live: "",
    github: "https://github.com/imdarshhhhan/DataLens",
  },
  {
    number: "03",
    title: "ESG-Scorer",
    description: "ESG-Scorer is a sustainability assessement system to get the desired company's 'Trust score',  uses a complete data pipeline including null imputation, ordinal encoding,  outlier detection, custom 0–100 trust score normalization with bias correction. Trained ML Model for prediction system on 722 global companies across 47 sectors, achieving 96.6% R2 accuracy using Random Forest Regressor with hyperparameter tuning.",
    stack: ["python","javascript","RandomForest","Scikit-learn","pandas","plotly"],
    live: "",
    github: "https://github.com/imdarshhhhan/ESG-Scorer",
  },
  {
    number: "04",
    title: "Draft",
    description: "Draft is multi agentic  personalised Math tutor , which user can circle a math problem or a step and can get the contexted explanation to the problem without giving whole solution at a time, uses gemini flash lite as a backbone agent, gradium for Speech-to-text and text-to-speech, uses tldraw for interactive drawing canvas and handwriting, Groq + Qwen for Voice-intent detection, KaTeX for Mathematical notation rendering , major features includes circled question validation and independent verification of mathematical steps and generates interactive graphs, equation highlights and visual explanations to help students understand mistakes.",
    stack: ["TypeScript","Tldraw","Gemini flash lite","Next.js","Canvas","Gradium","KaTex"],
    live: "",
    github: "https://github.com/imdarshhhhan/draft",
  },
  {
    number: "05",
    title: "SimonSays Game",
    description: "Developed a browser-based Simon Says memory game using HTML, CSS, and JavaScript. Implemented dynamic color sequences with increasing difficulty, user input validation, and level tracking. Added interactive button-flash animations and game-over functionality, strengthening JavaScript DOM manipulation, event handling, and game-state management.",
    stack: ["HTML","CSS","javascript"],
    live: "",
    github: "https://github.com/imdarshhhhan/simonSaysGame",
  },
];

export const highlights = {
  skills: ["Java","Python", "JavaScript", "TypeScript", "FastApi", "React", "Next.js","SQL", "Node.js", "HTML", "CSS", "Git", "Docker", "PostgreSQL", "REST APIs","Machine Learning","Retrievel Aguemented generation","MongoDB","Vercel","Jupyter Notebook"],
  education: [
    {
      institution: "PES University",
      qualification: "Masters in Computer Applications(MCA)",
      duration: "2025 - 2027",
      cgpa : "7.9"
    },
    {
      institution: "LBAS & SBC College, Sagar",
      qualification: "Bachelors in Science(BS)",
      duration: "2022 - 2025",
      cgpa : "8.3"
    },
    {
      institution: "Govt Pre University College ,Sagar",
      qualification: "Class XII(PCMB)",
      duration: "2020- 2022",
      percentage : "92.00"
    }

  ],
  achievements: [
    {
      title: "01",
      description: "Solved 330 + Coding questions across platforms, with leetcode contest ranking of 1350+",
    },
    {
      title: "02",
      description: "Distinction Award : Recognized for having secured an SGPA of 7.75 and above",
    },
    {
      title: "03",
      description: "Top 5% Student academically in class X and XII",
    },
  ],
};
