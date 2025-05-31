import {
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "../ui/card";

import { motion } from "framer-motion";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Project } from "@/data/projects";

import { Badge } from "../ui/badge";

import { Github, ExternalLink } from "lucide-react";
import Image from "next/image";
import TechBadge from "../wrappers/tech-badge";

export default function ProjectsGrid({
  filteredProjects,
}: {
  filteredProjects: Project[];
}) {
  return (
    <section className="relative px-6 pb-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Card className="bg-card/50 dark:bg-white/5 border-border backdrop-blur-sm hover:bg-card/80 dark:hover:bg-white/10 transition-all duration-300 h-full flex flex-col">
                <div className="relative overflow-hidden rounded-t-lg flex-none h-48">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-4 left-4 flex gap-2">
                    {project.featured && (
                      <Badge className="bg-purple-600 dark:bg-purple-600/80 text-white border-0 font-medium">
                        Featured
                      </Badge>
                    )}
                    <Badge
                      className={`border-0 font-medium ${
                        project.status === "Completed"
                          ? "bg-green-600 dark:bg-green-600/80 text-white"
                          : "bg-yellow-600 dark:bg-yellow-600/80 text-white"
                      }`}
                    >
                      {project.status}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-teal-600 dark:bg-teal-600/80 text-white border-0 font-medium">
                      {project.category}
                    </Badge>
                  </div>
                </div>

                <CardHeader className="px-4 pt-4 flex-none">
                  <CardTitle className="text-foreground group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>

                <CardContent className="flex flex-col flex-1 justify-between px-4 pb-4">
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {project.longDescription}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <TechBadge key={tech}>{tech}</TechBadge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1"
                      onClick={() => window.open(project.github, "_blank")}
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1"
                      onClick={() => window.open(project.demo, "_blank")}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-foreground mb-2">
              No projects found
            </h3>
            <p className="text-muted-foreground">
              Try adjusting your search terms or filters
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
