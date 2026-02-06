import { Code2, Server, Cloud, Database, BrainCircuit, Wrench } from 'lucide-react';
import { Project, Experience, SkillCategory } from './types';

export const EXPERIENCE: Experience[] = [
  {
    company: "Hewlett Packard Enterprise",
    role: "Software Engineering Intern",
    duration: "2022 – 2023",
    location: "Bangalore, India",
    bullets: [
      "Designed RESTful APIs supporting enterprise platforms and increasing data retrieval speed by 15%.",
      "Improved service reliability through deep debugging and optimization of legacy codebases.",
      "Implemented structured logging and monitoring to reduce incident response time.",
      "Collaborated on code reviews and CI/CD deployment pipelines."
    ],
    tech: ["Python", "REST APIs", "Microservices", "Logging"]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "budha",
    title: "BUDHA - Kubernetes Assistant",
    shortDescription: "Natural language interface for K8s diagnostics",
    fullDescription: "BUDHA is a conversational AI assistant designed to simplify Kubernetes cluster management. It allows DevOps engineers to query cluster health, pod status, and logs using natural language, abstracting complex kubectl commands.",
    tech: ["Python", "Flask", "Kubernetes", "REST APIs"],
    gradient: "from-blue-600 to-purple-600",
    features: [
      "Natural Language Processing for command interpretation",
      "Real-time cluster health monitoring",
      "Automated log analysis and error detection",
      "Role-based access control integration"
    ],
    approach: "Built a middleware service that translates NLP intents into Kubernetes API calls using a custom-trained model.",
    impact: "Reduced diagnostic time for common cluster issues by 40%."
  },
  {
    id: "construction-cms",
    title: "Construction Mgmt System",
    shortDescription: "Full-stack automation for construction workflows",
    fullDescription: "A comprehensive management suite for construction firms to handle project tracking, inventory management, and labor scheduling. The system replaces manual spreadsheet workflows with a robust database-backed application.",
    tech: ["C++", "MySQL", "Bootstrap"],
    gradient: "from-orange-500 to-red-600",
    features: [
      "Inventory tracking with low-stock alerts",
      "Employee scheduling and payroll calculation",
      "Project timeline visualization",
      "Expense reporting and analytics"
    ],
    approach: "Utilized C++ for high-performance backend logic and raw SQL for optimized complex queries across large datasets.",
    impact: "Streamlined operations for a local firm, reducing administrative overhead by 20 hours/week."
  },
  {
    id: "sign-language",
    title: "Sign Language Interpreter",
    shortDescription: "Real-time CNN-based sign language recognition",
    fullDescription: "An accessibility tool that translates American Sign Language (ASL) gestures into text and speech in real-time using computer vision. Optimized for edge deployment.",
    tech: ["Python", "PyTorch", "OpenCV", "MediaPipe"],
    gradient: "from-green-500 to-teal-500",
    features: [
      "Real-time hand tracking and landmark detection",
      "Support for static alphabet and dynamic words",
      "GPU acceleration for low latency",
      "Text-to-speech output"
    ],
    approach: "Fine-tuned a CNN on the ASL Alphabet dataset, preprocessing frames with MediaPipe for hand isolation.",
    impact: "Achieved 94% accuracy on test datasets with sub-100ms latency."
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Languages",
    icon: Code2,
    skills: ["Python", "Java", "C++", "SQL", "TypeScript"]
  },
  {
    title: "Backend & APIs",
    icon: Server,
    skills: ["Flask", "Spring Boot", "REST", "GraphQL", "FastAPI"]
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: ["Docker", "Kubernetes", "Git", "CI/CD", "AWS"]
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["MySQL", "PostgreSQL", "Redis", "MongoDB"]
  },
  {
    title: "ML & AI",
    icon: BrainCircuit,
    skills: ["PyTorch", "OpenCV", "MediaPipe", "NumPy", "Pandas"]
  },
  {
    title: "Tools & Concepts",
    icon: Wrench,
    skills: ["Distributed Systems", "Observability", "System Design", "Agile"]
  }
];