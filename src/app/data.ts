import interviewImg from "@/assets/interviewEdge.jpg";
import languifyImg from "@/assets/languify.png";

import { StaticImageData } from "next/image";
import { cache } from "react";

export interface IProjectData {
  SLUG: string;
  LIVE_PREVIEW?: string;
  GITHUB?: string;
  DESCRIPTION: string[];
  NOTE?: string;
  TECH_STACK: string[];
  IMAGE: StaticImageData | null;
  HIDDEN: boolean;
}

export const DATA = {
  HEADER: {
    NAME: "Ayush",
    AGE: "23",
    PRONOUN: "he/him",
    HEADLINE:
      "Junior Analyst with experience in financial technology, software development, and machine learning.",
    RESUME:
      "https://drive.google.com/drive/folders/1jPZRwzArBVysI92Us3bSZ2JFD67JPROx?usp=sharing",
    EMAIL: "mailto:ayushlucky2003@gmail.com",
    GITHUB: "https://github.com/its-ayush543",
    LINKEDIN: "https://www.linkedin.com/in/sits-ayush543",
    CODING_PROFILE: "https://codolio.com/profile/its-ayush543",
  },

  ABOUT_ME: {
    INTRO:
      "I’m a Junior Analyst with experience spanning financial technology, software development, and machine learning. I enjoy solving real-world problems through technology and working across different stages of a product, from understanding requirements and validating systems to building applications and data-driven solutions.",
    EXPERTISE:
      "My expertise lies in software development, system integration, API and database workflows, machine learning, and data science. I have hands-on experience with Next.js, React, TypeScript, Python, PyTorch, SQL, and modern development and testing tools.",
    BLOG:
      "I would love to publish blogs and share insights on software development, machine learning, system design, and emerging technologies.",
  },

  EDUCATION: {
    "B.Tech - Artificial Intelligence and Data Science": {
      INSTITUTE: "Bhagwan Parshuram Institute of Technology (GGSIPU)",
      LOCATION: "New Delhi, India",
      DURATION: "2022 - 2026",
      CGPA: "8.9",
      DESCRIPTION: [
        "Bachelor of Technology in Artificial Intelligence and Data Science.",
        "Upgraded from Electronics and Communication Engineering to Artificial Intelligence and Data Science after the 2nd semester.",
        "Relevant coursework includes Object-Oriented Programming in Java, Programming in C, Data Science, and Machine Learning.",
      ],
    },
    "Class XII": {
      INSTITUTE: "Air Force Bal Bharati School, New Delhi",
      LOCATION: "New Delhi, India",
      DURATION: "2021",
      SCORE: "90%",
      BOARD: "CBSE",
    },
    "Class X": {
      INSTITUTE: "Air Force Bal Bharati School, New Delhi",
      LOCATION: "New Delhi, India",
      DURATION: "2019",
      SCORE: "94.8%",
      BOARD: "CBSE",
    },
  },

  EXPERIENCE: {
    "FNZ India": {
      WEBSITE: "https://www.fnz.com/",
      POSITION: "Junior Analyst",
      LOCATION: "Gurugram, India",
      DURATION: "Jan, 2026 - Present",
      DESCRIPTION: [
        "Joined FNZ India as an Intern Analyst and was promoted to Junior Analyst in July 2026.",
        "Contributed to FNZ's wealth management technology solutions for Bank of Montreal (BMO), a leading North American financial institution and key FNZ client.",
        "Worked on BMO's Payments and Onboarding workflows, analyzing requirements and validating end-to-end application functionality.",
        "Collaborated with cross-functional teams to analyze user stories, identify issues, and support successful feature delivery using JIRA and Xray.",
        "Utilized Postman, Insomnia, SQL Server, and SSMS for API analysis and backend data validation.",
      ],

      TECH_STACK: [
        "JIRA",
        "Xray",
        "Postman",
        "Insomnia",
        "SQL",
        "SQL Server",
        "SSMS",
        "API",
        "System Integration",
      ],
    },

    "Defence Research & Development Organisation": {
      WEBSITE: "https://drdo.gov.in/drdo/",
      POSITION: "Summer Intern",
      LOCATION: "New Delhi, India",
      DURATION: "Jun, 2025 - Jul, 2025",
      DESCRIPTION: [
        "Simulated a complete Model Extraction (ME) attack pipeline targeting Face Recognition models using FaceNet embeddings.",
        "Trained and evaluated multiple surrogate models under varying query sizes, label noise, and model architectures.",
        "Implemented accuracy and fidelity comparisons between target and surrogate models with visualizations.",
        "Automated the attack simulation workflow to ensure reproducible results and scalable experimentation.",
      ],

      TECH_STACK: [
        "Python",
        "PyTorch",
        "scikit-learn",
        "NumPy",
        "Pandas",
        "Matplotlib",
        "FaceNet",
        "Machine Learning",
      ],
    },

    "Priyadarshi Apparels": {
      WEBSITE: "https://shopruecollection.com/",
      POSITION: "Frontend Developer",
      LOCATION: "Gurugram, India",
      DURATION: "Jul, 2024 - Aug, 2024",
      DESCRIPTION: [
        "Built responsive user interfaces and optimized designs across different browsers and screen sizes.",
        "Worked with JavaScript, React.js, and Next.js to develop and enhance web application features.",
        "Focused on performance optimization, debugging, and improving overall user experience.",
      ],

      TECH_STACK: [
        "HTML",
        "CSS",
        "JavaScript",
        "React.js",
        "Next.js",
        "Tailwind CSS",
      ],
    },
  },

  PROJECTS: {
    "Interview Edge": {
      SLUG: "Interview Edge",
      LIVE_PREVIEW: "https://interview-edge-v2.vercel.app/",
      DESCRIPTION: [
        "Developed an AI-powered mock interview platform that simulates real-time interviews across diverse job roles.",
        "Integrated the Gemini API to generate personalized interview questions and feedback.",
        "Implemented VAPI Voice AI for voice-based interactions and a realistic conversational interview experience.",
        "Built the application using Next.js with Firebase Authentication for secure user management and efficient data handling.",
      ],
      TECH_STACK: [
        "React.js",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Firebase",
        "Gemini API",
        "VAPI",
      ],
      IMAGE: interviewImg,
      HIDDEN: false,
      GITHUB: "https://github.com/its-ayush543/InterviewEdge-v2",
    },

    Languify: {
      SLUG: "languify",
      LIVE_PREVIEW: "https://languify-devx.vercel.app/",
      DESCRIPTION: [
        "Built a Duolingo-style language learning application with gamified lessons and interactive quizzes.",
        "Integrated AI-driven personalized learning paths and multilingual learning content.",
        "Implemented daily quests and a global leaderboard to improve user engagement and retention.",
        "Added a secure Stripe-based subscription payment system for premium access.",
      ],
      TECH_STACK: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Stripe",
        "PostgreSQL",
        "Drizzle ORM",
        "Clerk",
      ],
      IMAGE: languifyImg,
      HIDDEN: false,
      GITHUB: "https://github.com/its-ayush543/Languify",
    },

    "Calories Burnt Prediction": {
      SLUG: "calories-burnt-prediction",
      LIVE_PREVIEW: "",
      DESCRIPTION: [
        "Developed a machine learning model using XGBoost to estimate calories burnt based on user activity data.",
        "Performed data preprocessing and feature engineering to improve model performance.",
        "Used Google Colab for model development, experimentation, evaluation, and visualization.",
        "Built a Streamlit interface to make the prediction model accessible through an interactive application.",
      ],
      TECH_STACK: [
        "Machine Learning",
        "Data Science",
        "Python",
        "XGBoost",
        "Streamlit",
        "Pandas",
        "NumPy",
      ],
      IMAGE: null,
      HIDDEN: false,
      GITHUB: "https://github.com/its-ayush543/Calories-Burnt-Prediction",
    },
  },

  ALL_PROJECTS: "https://github.com/its-ayush543?tab=repositories",

  SKILLS: {
    Languages: [
      "JavaScript",
      "TypeScript",
      "Python",
      "Java",
      "C",
      "SQL",
      "HTML",
      "CSS",
    ],

    Frameworks: [
      "React.js",
      "Next.js",
      "Express.js",
      "React Native",
      "Expo",
      "Streamlit",
    ],

    "Machine Learning & Data Science": [
      "PyTorch",
      "scikit-learn",
      "XGBoost",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "FaceNet",
    ],

    Libraries: [
      "React Query",
      "Tailwind CSS",
      "ShadCN UI",
      "Styled Components",
      "Material UI",
    ],

    "Database & Backend": [
      "MongoDB",
      "PostgreSQL",
      "Firebase",
      "Supabase",
      "JWT",
      "Clerk",
      "Drizzle ORM",
    ],

    "API & Testing": [
      "Postman",
      "Insomnia",
      "API Testing",
      "System Integration Testing",
    ],

    "Project & Collaboration": [
      "JIRA",
      "Xray",
      "Git",
      "GitHub",
    ],

    "Cloud & Deployment": [
      "Google Cloud Platform (GCP)",
      "Vercel",
    ],

    "Tools & Platforms": [
      "Visual Studio Code",
      "Prettier",
      "Sentry",
      "Google Colab",
    ],

    "Package Managers & Build Tools": [
      "NPM",
      "PNPM",
      "Yarn",
      "Bun",
      "Vite",
    ],
  },
};

export const getProjectData = cache(
  (title: string) =>
    Object.entries(DATA.PROJECTS).find(
      ([, value]) => value.SLUG === title && !value.HIDDEN
    ) as [string, IProjectData] | undefined
);