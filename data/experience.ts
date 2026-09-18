export type Experience = {
  company: string;
  role: string;
  period: string;
  bullets: string[];
};

export const experiences: Experience[] = [
  {
    company: "Rays IT & Design World",
    role: "Flutter Trainee",
    period: "July 2026",
    bullets: [
      "Completed practical training in mobile application engineering using Flutter and Dart.",
      "Built responsive UI components, integrated asynchronous REST APIs, and implemented structured state management flows.",
      "Applied standard debugging workflows and clean architecture practices to solve software bugs and performance bottlenecks.",
    ],
  },
  {
    company: "Rays IT & Design World",
    role: "PHP Trainee",
    period: "July 2025",
    bullets: [
      "Completed practical training in backend web development, server-side scripting fundamentals, and relational database interaction using PHP and SQL.",
      "Engineered structured server-side routines, processed client requests, and performed programmatic database validations.",
      "Strengthened foundational knowledge in structured programming, software debugging, and server runtime environments.",
    ],
  },
];