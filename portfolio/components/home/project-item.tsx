import {
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import { Project } from "@/data/projects";
import Image from "next/image";
import TechBadge from "@/components/wrappers/tech-badge";

export default function ProjectItem({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      whileHover={{ y: -10 }}
      className="group"
    >
      <Card className="flex flex-col h-full bg-card/50 border-border backdrop-blur-sm hover:bg-card/80 transition-all duration-300">
        <div className="relative overflow-hidden rounded-t-lg flex-none h-48">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
        <CardHeader className="flex-none">
          <CardTitle className="group-hover:text-purple-400 transition-colors">
            {project.title}
          </CardTitle>
          <CardDescription>{project.description}</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col flex-1 justify-between p-4">
          <div className="mb-4"></div>
          <div>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech) => (
                <TechBadge key={tech}>{tech}</TechBadge>
              ))}
            </div>
            <div className="flex gap-2">
              <Button
                onClick={() => window.open(project.github, "_blank")}
                size="sm"
                variant="outline"
                className="border-border hover:bg-accent"
              >
                <Github className="mr-2 h-4 w-4" />
                Code
              </Button>
              <Button
                onClick={() => window.open(project.demo, "_blank")}
                size="sm"
                variant="outline"
                className="border-border hover:bg-accent"
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                Demo
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
