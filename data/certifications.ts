export type Certification = {
  issuer: string;
  title: string;
  date: string;
  year: string;
  credentialId?: string;
  file?: string;
};

export const certifications: Certification[] = [
  {
    issuer: "HackerRank",
    title: "REST API (Intermediate)",
    date: "12 Sep 2025",
    year: "2025",
    credentialId: "A6E5D5D7C93A",
    file: "/certificates/rest-api.png",
  },
  {
    issuer: "HackerRank",
    title: "Problem Solving (Basic)",
    date: "11 Sep 2025",
    year: "2025",
    credentialId: "3CF76779BD26",
    file: "/certificates/problem-solving.png",
  },
  {
    issuer: "Simplilearn",
    title: "Learn Advanced C++ Course Online",
    date: "30 Jul 2024",
    year: "2024",
    credentialId: "7044590",
    file: "/certificates/advanced-cpp.pdf",
  },
];