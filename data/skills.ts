export type Skill = {
  name: string;
  icon?: string;
};

export type SkillGroup = {
  title: string;
  items: Skill[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Core Competencies",
    items: [
      { name: "Problem Solving" },
      { name: "Data Structures & Algorithms" },
      { name: "REST API Development" },
      { name: "Database Design" },
      { name: "Authentication" },
      { name: "RBAC" },
      { name: "Clean Architecture" },
      { name: "API Design" },
      { name: "Debugging" },
    ],
  },
  {
    title: "Languages",
    items: [
      { name: "C++", icon: "cpp" },
      { name: "C", icon: "c" },
      { name: "Go", icon: "go" },
      { name: "Python", icon: "python" },
      { name: "Dart", icon: "dart" },
      { name: "TypeScript", icon: "typescript" },
      { name: "PHP", icon: "php" },
      { name: "SQL", icon: "sql" },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Go", icon: "go" },
      { name: "Gin", icon: "gin" },
      { name: "REST APIs", icon: "rest" },
      { name: "JWT", icon: "jwt" },
      { name: "RBAC" },
      { name: "GORM", icon: "gorm" },
      { name: "Refresh Tokens" },
      { name: "Argon2id" },
    ],
  },
  {
    title: "Databases & Caching",
    items: [
      { name: "PostgreSQL", icon: "postgres" },
      { name: "MySQL", icon: "mysql" },
      { name: "Redis", icon: "redis" },
      { name: "MongoDB", icon: "mongodb" },
      { name: "SQLite", icon: "sqlite" },
    ],
  },
  {
    title: "Frontend & Mobile",
    items: [
      { name: "HTML", icon: "html" },
      { name: "CSS", icon: "css" },
      { name: "JavaScript", icon: "javascript" },
      { name: "Next.js", icon: "nextjs" },
      { name: "TypeScript", icon: "typescript" },
      { name: "Flutter", icon: "flutter" },
      { name: "Dart", icon: "dart" },
      { name: "Android", icon: "android" },
    ],
  },
  {
    title: "Tools & Platforms",
    items: [
      { name: "Docker", icon: "docker" },
      { name: "Git", icon: "git" },
      { name: "GitHub", icon: "github" },
      { name: "Postman", icon: "postman" },
      { name: "VS Code", icon: "vscode" },
      { name: "Android Studio", icon: "androidstudio" },
      { name: "Google Antigravity" },
    ],
  },
];