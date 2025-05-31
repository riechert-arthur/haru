export type BlogPost = {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
};

export const blogPosts: BlogPost[] = [
  {
    title: "Building Scalable Microservices with Node.js",
    excerpt:
      "Learn how to design and implement microservices that can handle millions of requests...",
    date: "2024-01-15",
    readTime: "8 min read",
  },
  {
    title: "Understanding Machine Learning Algorithms",
    excerpt:
      "A deep dive into the most important ML algorithms every developer should know...",
    date: "2024-01-10",
    readTime: "12 min read",
  },
  {
    title: "The Future of Web Development",
    excerpt:
      "Exploring emerging technologies that will shape the next decade of web development...",
    date: "2024-01-05",
    readTime: "6 min read",
  },
];
