import { motion } from "framer-motion";
import { ThemeToggle } from "../theme-toggle";

export default function Navigation({
  activeSection,
}: {
  activeSection: string;
}) {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent"
        >
          Arthur Riechert
        </motion.div>
        <div className="flex items-center space-x-8">
          {["Projects", "Courses", /*"Blog",*/ "Contact"].map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              whileHover={{ scale: 1.1 }}
              className={`transition-colors ${
                activeSection === item.toLowerCase()
                  ? "text-purple-400"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item}
            </motion.a>
          ))}
          <ThemeToggle />
        </div>
      </div>
    </motion.nav>
  );
}
