import { SelectItem } from "../ui/select";

import { SelectContent } from "../ui/select";

import { SelectValue } from "../ui/select";

import { Filter } from "lucide-react";

import { SelectTrigger } from "../ui/select";

import { Search } from "lucide-react";
import { motion } from "framer-motion";
import { Select } from "../ui/select";
import { Input } from "../ui/input";
import { categories } from "@/data/projects";

export default function ProjectsFilters({
  searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,
}: {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  selectedCategory: string;
  setSelectedCategory: (value: string) => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="flex flex-col md:flex-row gap-4 mb-12 max-w-4xl mx-auto"
    >
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search projects, technologies..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10 bg-card/50 dark:bg-white/5 border-border text-foreground placeholder:text-muted-foreground"
        />
      </div>
      <Select value={selectedCategory} onValueChange={setSelectedCategory}>
        <SelectTrigger className="w-full md:w-48 bg-card/50 dark:bg-white/5 border-border text-foreground">
          <Filter className="mr-2 h-4 w-4" />
          <SelectValue placeholder="Category" />
        </SelectTrigger>
        <SelectContent className="bg-background border-border">
          {categories.map((category) => (
            <SelectItem
              key={category}
              value={category}
              className="text-foreground hover:bg-accent"
            >
              {category === "all" ? "All Categories" : category}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </motion.div>
  );
}
