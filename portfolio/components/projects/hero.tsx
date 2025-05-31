import { motion } from "framer-motion";

export default function ProjectsHero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center mb-12"
    >
      <h1 className="text-4xl md:text-6xl font-bold mb-6">
        <span className="bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
          All Projects
        </span>
      </h1>
      <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
        A comprehensive collection of my software development projects, consisting primarily of full-stack work.
      </p>
    </motion.div>
  );
}
