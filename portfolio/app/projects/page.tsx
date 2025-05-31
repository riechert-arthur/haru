"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import { allProjects } from "@/data/projects";
import ProjectsNavigation from "@/components/projects/navigation";
import ProjectsHeader from "@/components/projects/header";
import ProjectsGrid from "@/components/projects/grid";

export default function ProjectsPage() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Initialize state from localStorage on client side only
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedCategory = localStorage.getItem("selectedCategory");
      const savedSearch = localStorage.getItem("searchTerm");
      if (savedCategory) setSelectedCategory(savedCategory);
      if (savedSearch) setSearchTerm(savedSearch);
    }
  }, []);

  // Save state to localStorage when it changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("selectedCategory", selectedCategory);
    }
  }, [selectedCategory]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("searchTerm", searchTerm);
    }
  }, [searchTerm]);

  const filteredProjects = allProjects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.tech.some((tech) =>
        tech.toLowerCase().includes(searchTerm.toLowerCase()),
      );

    const matchesCategory =
      selectedCategory === "all" || project.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-blue-900/10 to-teal-900/10 dark:from-purple-900/20 dark:via-blue-900/20 dark:to-teal-900/20" />
        <motion.div className="absolute inset-0 opacity-30" style={{ y }}>
          <div className="h-full w-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.2),transparent_50%)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]" />
        </motion.div>
      </div>
      <ProjectsNavigation />
      <ProjectsHeader
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <ProjectsGrid filteredProjects={filteredProjects} />
    </div>
  );
}
