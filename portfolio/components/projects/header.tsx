import ProjectsFilters from "./filters";
import ProjectsStats from "./stats";
import ProjectsHero from "./hero";

export default function ProjectsHeader({
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
    <section className="relative pt-32 pb-16 px-6">
      <div className="max-w-7xl mx-auto">
        <ProjectsHero />

        {/* Filters */}
        <ProjectsFilters
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        {/* Project Stats */}
        <ProjectsStats />
      </div>
    </section>
  );
}
