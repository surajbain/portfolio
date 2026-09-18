export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  featured: boolean;
  github: string;
  tech: string[];
  summary: string;
  bullets: string[];
  highlights?: { label: string; value: string }[];
  lifecycle?: string[];
  architecture?: string[];
};

export const projects: Project[] = [
  {
    slug: "campusx",
    title: "CampusX",
    subtitle: "Multi-College Event Platform",
    featured: true,
    github: "https://github.com/surajbain/CampusX",
    tech: [
      "Go",
      "Gin",
      "PostgreSQL",
      "Redis",
      "JWT",
      "Next.js",
      "TypeScript",
      "Docker",
    ],
    summary:
      "A secure multi-tenant event platform for managing college events, registrations, ticketing, and administrative workflows — built with strict tenant isolation across middleware and database access.",
    bullets: [
      "Architected a secure multi-tenant event platform utilizing a Go/Gin backend and Next.js/TypeScript frontend with strict tenant isolation across middleware and database access.",
      "Designed and normalized 16 PostgreSQL tables with relational integrity constraints to manage multi-college registration, ticketing, admin dashboards, and payment lifecycles.",
      "Implemented stateless JWT authentication, RBAC, Argon2id password hashing, refresh-token rotation, and Redis-backed rate limiting to guard protected endpoints.",
      "Engineered a deterministic state-machine lifecycle handling event transitions (DRAFT → PUBLISHED → ONGOING → COMPLETED) and containerized client-server workloads using Docker.",
    ],
    highlights: [
      { label: "Architecture", value: "Multi-tenant, strict isolation" },
      { label: "Database", value: "16 PostgreSQL tables" },
      { label: "Security", value: "JWT · RBAC · Argon2id · Rate limiting" },
      { label: "Infrastructure", value: "Docker multi-stage builds" },
    ],
    lifecycle: ["DRAFT", "PUBLISHED", "ONGOING", "COMPLETED"],
    architecture: [
      "Client",
      "Next.js",
      "Go / Gin API",
      "Auth + RBAC + Tenant Middleware",
      "PostgreSQL",
      "Redis",
    ],
  },
  {
    slug: "urbanpulse",
    title: "UrbanPulse",
    subtitle: "Location-Based Civic Complaint Platform",
    featured: false,
    github: "https://github.com/surajbain/UrbanPulse",
    tech: [
      "Go",
      "Gin",
      "PostgreSQL",
      "GORM",
      "JWT",
      "Flutter",
      "Google Maps",
    ],
    summary:
      "A location-based civic complaint reporting platform — citizens report local issues with GPS location and photos. Go/Gin backend with JWT auth, and a Flutter mobile client with interactive Google Maps.",
    bullets: [
      "Engineered backend RESTful APIs using Go and Gin for user authentication, complaint workflows, and category management, structured on clean architecture principles.",
      "Integrated GORM with PostgreSQL to execute validated queries for location-aware records, complaint status history, and image metadata.",
      "Built secure authentication flows featuring JWT tokens to safeguard protected endpoints across client-server communications.",
      "Developed a cross-platform mobile client in Flutter featuring interactive Google Maps, geolocation tracking, and image upload for complaint reporting.",
    ],
  },
];