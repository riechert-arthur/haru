export type Project = {
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  category: string;
  github: string;
  demo: string;
  image: string;
  featured: boolean;
  status: string;
};

export const allProjects: Project[] = [
  {
    title: "Pokefindr",
    description:
      "Interactive and optimized map of Pokemon Vending Machines in the United States.",
    longDescription:
      "Built with React, Next.js, and Supabase, this project is a map of Pokemon Vending Machines in the United States. Includes a JWT-based authentication system and a SQL database for storing user data and location reviews.",
    tech: [
      "React",
      "Next.js",
      "Supabase",
      "PostgreSQL",
      "Docker",
      "TypeScript",
      "Mapbox",
      "Python",
      "OAuth",
      "JWT",
      "Vitest",
    ],
    category: "Full-Stack",
    github: "https://github.com/riechert-arthur/pokefindr",
    demo: "https://pokefindr.app/map",
    image: "/images/pokefindr.png",
    featured: true,
    status: "Completed",
  },
  {
    title: "LinkIs.live",
    description: "Open-source and portable URL shortener.",
    longDescription:
      "Scalable URL shortener application built with a Go REST API, Redis in-memory URL mappings, and Docker for containerization. Includes a React frontend for managing and shortening URLs and a custom loading screen for mapped URLs.",
    tech: [
      "React",
      "TypeScript",
      "Go",
      "Redis",
      "Gorilla Mux",
      "Docker",
      "Docker Compose",
      "Vitest",
    ],
    category: "Full-Stack",
    github: "https://github.com/riechert-arthur/linkis.live",
    demo: "https://youtu.be/O-YTYqgp6dA?si=vNMlNPpP1jTxMzjT&t=12",
    image: "/images/linkislive.png",
    featured: true,
    status: "In Progress",
  },
  {
    title: "Upcycle Build",
    description:
      "A cross-platform iOS/Android to manage personel and inventory at deconstruction facilities.",
    longDescription:
      "A React-Native app with a Firebase backend built for junior design. Features an interactive calendar, user authentication, inventory tracking dashboard, and invoicing system.",
    tech: ["React-Native", "Expo", "Firebase", "Typescript"],
    category: "Full-Stack",
    github:
      "https://github.com/cwyner/JIB-4342-RamblinRecyclers?tab=readme-ov-file",
    demo: "#",
    image: "/images/upcyclebuild.png",
    featured: true,
    status: "Completed",
  },
];

export const featuredProjects = allProjects.filter(
  (project) => project.featured,
);

export const categories = [
  "all",
  "AI/ML",
  "Full-Stack",
  "Backend",
  "Blockchain",
  "IoT",
  "Research",
];
