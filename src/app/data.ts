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
    PRONOUN: "he/him",
    HEADLINE:
      "Junior Analyst focused on testing and validating fintech platforms, with full-stack development and machine learning experience.",
    RESUME: "/Ayush_CV.pdf",
    EMAIL: "mailto:ayushlucky2003@gmail.com",
    GITHUB: "https://github.com/its-ayush543",
    LINKEDIN: "https://www.linkedin.com/in/its-ayush543",
    CODING_PROFILE: "https://codolio.com/profile/its-ayush543",
  },

  ABOUT_ME: {
    INTRO:
      "I’m a Junior Analyst focused on testing and validating financial technology platforms. I enjoy working across different stages of a product, from understanding requirements and validating systems end to end to building applications and data-driven solutions that solve real-world problems.",
    EXPERTISE:
      "My expertise lies in API and database testing, system integration, and test case management with JIRA and Xray, backed by hands-on development with Next.js, React, TypeScript, and Python, and machine learning with PyTorch. I’m building toward test automation.",
    BLOG: "I would love to publish blogs and share insights on software development, machine learning, system design, and emerging technologies.",
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
        "Joined FNZ India as an Intern Analyst and converted to full-time Junior Analyst in July 2026, supporting FNZ's wealth management technology platform for a leading North American bank client.",
        "Validate end-to-end Payments and Onboarding workflows against business requirements and user stories, testing functional and system-integration scenarios.",
        "Analyze APIs with Postman and Insomnia and verify backend data with SQL Server (SSMS) to confirm data integrity across systems.",
        "Log and track issues and manage test cases in JIRA and Xray, working with developers, business analysts, and cross-functional teams to support successful feature delivery.",
      ],

      TECH_STACK: [
        "Manual Testing",
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
  },

  PROJECTS: {
    "Interview Edge": {
      SLUG: "interview-edge",
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

    "Sinha Studio": {
      SLUG: "sinha-studio",
      LIVE_PREVIEW: "https://sinhastudio.netlify.app/",
      DESCRIPTION: [
        "Built a responsive photography portfolio website to showcase professional work through dynamic album galleries.",
        "Implemented smooth animations and streamlined navigation for a polished viewing experience.",
        "Developed the interface with React, Next.js, TypeScript, and Tailwind CSS.",
      ],
      TECH_STACK: ["React.js", "Next.js", "TypeScript", "Tailwind CSS"],
      IMAGE: null,
      HIDDEN: false,
      GITHUB: "https://github.com/its-ayush543/SinhaStudio",
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
    "API & Testing": [
      "Manual Testing",
      "API Testing",
      "System Integration Testing",
      "Postman",
      "Insomnia",
    ],

    Languages: [
      "JavaScript",
      "TypeScript",
      "Python",
      "Java",
      "C",
      "C++",
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

    "Project & Collaboration": ["JIRA", "Xray", "Git", "GitHub"],

    "Cloud & Deployment": ["Google Cloud Platform (GCP)", "Vercel"],

    "Tools & Platforms": [
      "Visual Studio Code",
      "Prettier",
      "Sentry",
      "Google Colab",
    ],

    "Package Managers & Build Tools": ["NPM", "PNPM", "Yarn", "Bun", "Vite"],
  },
};

export const getProjectData = cache(
  (title: string) =>
    Object.entries(DATA.PROJECTS).find(
      ([, value]) => value.SLUG === title && !value.HIDDEN
    ) as [string, IProjectData] | undefined
);
