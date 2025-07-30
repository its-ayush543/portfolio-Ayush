import interviewImg from "@/assets/interviewEdge.jpg";
import languifyImg from "@/assets/languify.png"

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
    AGE: "22",
    PRONOUN: "he/him",
    HEADLINE:
      "Passionate about building high-performance and scalable web applications.",
    RESUME:
      "https://drive.google.com/file/d/1mqLWy2FHw_rBH8UffDKDRXCsQ4IEXa4m/view?usp=sharing",
    EMAIL: "mailto:ayushlucky2003@gmail.com",
    GITHUB: "https://github.com/its-ayush543",
    LINKEDIN: "https://www.linkedin.com/in/sits-ayush543",
    CODING_PROFILE:"https://codolio.com/profile/its-ayush543"
  },

  ABOUT_ME: {
    INTRO:
      "I’m a passionate and detail-oriented developer with experience in building web applications and machine learning models. I enjoy solving real-world problems through code and I'm always eager to learn new technologies and take on challenging problems that push me to grow.",
    EXPERTISE:
      "My expertise lies in Next.js, TypeScript, Machine Learning, Data Science and I enjoy working across the stack to bring ideas to life.",
    BLOG: "I would love publishing blogs and sharing insights on web development, best practices, and new technologies.",
  },

  EXPERIENCE: {
    "Defence Reasearch & Development Organisation": {
      WEBSITE: "https://drdo.gov.in/drdo/",
      POSITION: "Summer Intern",
      LOCATION: "New Delhi, India",
      DURATION: "Jun, 2025 - Aug, 2025",
      DESCRIPTION: [
        "Simulated a complete Model Extraction (ME) attack pipeline targeting Face Recognition models using FaceNet embeddings.",
        "Trained and evaluated multiple surrogate models under varying query sizes, label noise, and architectures.",
        "Implemented accuracy and fidelity comparisons between stolen and target models with visualizations.",
        "Automated the attack simulation workflow, ensuring reproducible results and scalable experimentation.",
      ],

      TECH_STACK: [
        "Python",
        "PyTorch",
        "scikit-learn",
        "NumPy",
        "Pandas",
        "Matplotlib",
        "FaceNet",
      ],
    },
    "Priyadarshi Apparels": {
      WEBSITE: "https://shopruecollection.com/",
      POSITION: "Frontend Developer",
      LOCATION: "Gurugram, India",
      DURATION: "July, 2024 - Aug, 2024",
      DESCRIPTION: [
        "Built responsive user interfaces and optimized design across browsers.",
        "Gained hands-on experience in JavaScript, React.js, and Next.js.",
        "Focused on performance tuning, debugging, and enhancing user experience.",
      ],

      TECH_STACK: [
        "HTML",
        "CSS",
        "JavaScript",
        "ReactJS",
        "NextJS",
        "Tailwind CSS",
      ],
    },
  },

  PROJECTS: {
    "Interview Edge": {
      SLUG: "Interview Edge",
      LIVE_PREVIEW: "https://interview-edge-v2.vercel.app/",
      DESCRIPTION: [
        "Developed an AI-powered mock interview platform simulating real-time interviews across diverse job roles.",
        "Integrated Gemini APIto deliver personalized, voice-interactive feedback.",
        "Implemented VAPI's Voice AI text-to-speech for a realistic, conversational user experience.",
        "Used Next.js, FireBase Authentication for high performance and efficient data handling."
      ],
      TECH_STACK: [
        "React.js",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Firebase",
        "VAPI",
      ],
      IMAGE: interviewImg,
      HIDDEN: false,
      GITHUB: "https://github.com/its-ayush543/InterviewEdge-v2",
    },
    "Languify": {
      SLUG: "languify",
      LIVE_PREVIEW: "https://languify-devx.vercel.app/",
      DESCRIPTION: [
        "Built a Duolingo-style language learning app with gamified lessons and interactive quizzes.",
        "Integrated AI-driven personalized learning paths and multilingual content support.",
        "Implemented daily quests and a global leaderboard to boost user engagement and retention.",
        "Added secure Stripe-based payment system for subscription-based access.",
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
        "Developed a predictive model using the XGBoost algorithm to estimate calories burnt based on user activity data.",
        "Performed data preprocessing and feature engineering to enhance model performance.",
        "Utilized Google Colab for model development, experimentation, and evaluation.",
      ],
      TECH_STACK: [
        "Machine Learning",
        "Data Science",
        "Python",
        "XGBoost",
        "Streamlit",
      ],
      IMAGE: null,
      HIDDEN: false,
      GITHUB: "https://github.com/its-ayush543/Calories-Burnt-Prediction",
    },
  },

  ALL_PROJECTS: "https://github.com/its-ayush543?tab=repositories",

  SKILLS: {
    Languages: ["JavaScript", "TypeScript", "HTML", "CSS", "Node.js"],
    Frameworks: ["React.js", "Next.js", "Express.js", "React Native", "Expo"],
    Libraries: [
      "React Query",
      "Tailwind CSS",
      "ShadCN UI",
      "Styled Components",
      "Material UI",
    ],
    "Database & Backend": ["MongoDB", "Firebase", "JWT", "Supabase", "Clerk"],
    "Cloud & Deployment": ["Google Cloud Platform (GCP)", "Vercel"],
    "Tools & Platforms": [
      "Git",
      "GitHub",
      "Postman",
      "Visual Studio Code",
      "Prettier",
      "Sentry",
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
