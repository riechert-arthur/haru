import { CardContent } from "../ui/card";

import { motion } from "framer-motion";
import { Card } from "../ui/card";
import { allProjects } from "@/data/projects";

export default function ProjectsStats() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto"
    >
      <Card className="bg-card/50 dark:bg-white/5 border-border backdrop-blur-sm text-center">
        <CardContent className="p-4">
          <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
            {allProjects.length}
          </div>
          <div className="text-sm text-muted-foreground">Total Projects</div>
        </CardContent>
      </Card>

      <Card className="bg-card/50 dark:bg-white/5 border-border backdrop-blur-sm text-center">
        <CardContent className="p-4">
          <div className="text-2xl font-bold text-teal-600 dark:text-teal-400">
            {allProjects.filter((p) => p.status === "Completed").length}
          </div>
          <div className="text-sm text-muted-foreground">Completed</div>
        </CardContent>
      </Card>

      <Card className="bg-card/50 dark:bg-white/5 border-border backdrop-blur-sm text-center">
        <CardContent className="p-4">
          <div className="text-2xl font-bold text-pink-600 dark:text-pink-400">
            {allProjects.filter((p) => p.status === "In Progress").length}
          </div>
          <div className="text-sm text-muted-foreground">In Progress</div>
        </CardContent>
      </Card>

      <Card className="bg-card/50 dark:bg-white/5 border-border backdrop-blur-sm text-center">
        <CardContent className="p-4">
          <div className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">
            {new Set(allProjects.flatMap((p) => p.tech)).size}
          </div>
          <div className="text-sm text-muted-foreground">Technologies</div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
