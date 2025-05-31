import { motion } from "framer-motion";
import { ThemeToggle } from "../theme-toggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Menu, X } from "lucide-react";
import { Button } from "../ui/button";
import { useState } from "react";

export default function Navigation({
  activeSection,
}: {
  activeSection: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const navigationItems = ["Projects", "Courses", /*"Blog",*/ "Contact"];

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
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navigationItems.map((item) => (
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

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center space-x-4">
          <ThemeToggle />
          <DropdownMenu onOpenChange={setIsOpen}>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="flex items-center justify-center h-9 w-9 border border-input bg-background hover:bg-accent hover:text-accent-foreground">
                <div className="relative flex items-center justify-center w-5 h-5">
                  <Menu className={`h-5 w-5 absolute transition-all duration-300 ${isOpen ? 'opacity-0 rotate-90 scale-0' : 'opacity-100 rotate-0 scale-100'}`} />
                  <X className={`h-5 w-5 absolute transition-all duration-300 ${isOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-0'}`} />
                </div>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {navigationItems.map((item) => (
                <DropdownMenuItem key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className={`w-full ${
                      activeSection === item.toLowerCase()
                        ? "text-purple-400"
                        : "text-muted-foreground"
                    }`}
                  >
                    {item}
                  </a>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </motion.nav>
  );
}
