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
      "Junior Analyst working on fintech integrations (APIs, SQL, SIT and regression testing), with full-stack and machine learning experience, building toward SDET.",
    RESUME: "/Ayush_CV.pdf",
    EMAIL: "mailto:ayushlucky2003@gmail.com",
    GITHUB: "https://github.com/its-ayush543",
    LINKEDIN: "https://www.linkedin.com/in/its-ayush543",
    CODING_PROFILE: "https://codolio.com/profile/its-ayush543",
  },

  ABOUT_ME: {
    INTRO:
      "I work on financial integrations at FNZ, a wealth-management technology company, on a bank onboarding integration for a major Canadian client. I enjoy working across the stages of a product, from understanding requirements and validating systems end to end to building applications and data-driven solutions.",
    EXPERTISE:
      "My work covers SIT and regression testing, 200+ test cases written or updated in JIRA and Xray, API testing with Postman, and SQL-based data validation, with 70+ defects raised. I also build with Next.js, React, TypeScript, and Python, and have worked on machine learning with PyTorch. I’m now building test automation skills with Java and Playwright.",
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
      DURATION: "Jul, 2026 - Present",
      DESCRIPTION: [
        "Moved from payments to onboarding workflows, and was recognized with a QA Quality Ninja appreciation for a smooth transition.",
        "Test a bank onboarding integration and a GIC issuer integration through SIT and regression, writing or updating 200+ test cases in JIRA and Xray.",
        "Raised 70+ defects, including post-release issues where data was not reaching the client, and escalated them before client impact.",
        "Validate APIs with Postman and Insomnia and check backend data in SQL Server.",
        "Join weekly client calls on defect triage and requirement reviews.",
        "Building an overlay tool to capture test-execution evidence.",
      ],

      TECH_STACK: [
        "SIT",
        "Regression Testing",
        "JIRA",
        "Xray",
        "Postman",
        "Insomnia",
        "SQL Server",
        "SSMS",
      ],
    },

    "FNZ India (Intern)": {
      WEBSITE: "https://www.fnz.com/",
      POSITION: "Intern Analyst",
      LOCATION: "Gurugram, India",
      DURATION: "Jan, 2026 - Jul, 2026",
      DESCRIPTION: [
        "Worked on payments workflows for a bank client, covering EFT, RTCT, and bill payment methods.",
        "Analyzed requirements and user stories, wrote test cases in JIRA and Xray, and validated end-to-end payment scenarios.",
        "Used Postman and SQL Server to validate APIs and backend data.",
      ],

      TECH_STACK: ["JIRA", "Xray", "Postman", "SQL Server", "Payments"],
    },

    "Defence Research & Development Organisation": {
      WEBSITE: "https://drdo.gov.in/drdo/",
      POSITION: "Summer Intern",
      LOCATION: "New Delhi, India",
      DURATION: "Jun, 2025 - Jul, 2025",
      DESCRIPTION: [
        "Simulated a black-box model extraction attack on a face-identification model built on FaceNet embeddings (62 identities, LFW dataset).",
        "Trained 18 PyTorch surrogate models across query budgets (1,000 to 3,000), label-noise levels (0 to 20%), and two architectures.",
        "Reached over 99% agreement with the target model using 3,000 queries, even with 20% label noise.",
        "Visualized accuracy and fidelity trends and automated the experiment pipeline for reproducible runs.",
      ],

      TECH_STACK: [
        "Python",
        "PyTorch",
        "scikit-learn",
        "NumPy",
        "Pandas",
        "Matplotlib",
        "FaceNet",
        "Adversarial ML",
      ],
    },
  },

  PROJECTS: {
    "Model Extraction Attack": {
      SLUG: "model-extraction-attack",
      LIVE_PREVIEW: "",
      DESCRIPTION: [
        "Simulated a black-box model extraction attack on a face-identification model built on FaceNet embeddings (62 identities, LFW dataset).",
        "Trained 18 PyTorch surrogate models across query budgets, label-noise levels, and architectures.",
        "Surrogates matched the target on over 99% of predictions with 3,000 queries, even with 20% label noise.",
        "Plotted accuracy and fidelity against query size and noise to show how the attack scales.",
      ],
      TECH_STACK: [
        "Python",
        "PyTorch",
        "FaceNet",
        "scikit-learn",
        "Matplotlib",
        "Adversarial ML",
      ],
      IMAGE: null,
      HIDDEN: false,
      GITHUB: "https://github.com/its-ayush543/ME-Extraction-ModeL",
    },

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
        "Built while following a tutorial, to learn payments (Stripe), authentication, and gamified learning flows in Next.js.",
        "Duolingo-style language learning application with gamified lessons and interactive quizzes.",
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
      "Regression Testing",
      "Test Case Design",
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
