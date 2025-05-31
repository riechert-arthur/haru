"use client";

import { useState, useEffect } from "react";
import { useScroll, useTransform } from "framer-motion";
import CoursesSection from "@/components/home/courses-section";
import ContactSection from "@/components/home/contact-section";
import OrbBackground from "@/components/ui/orb-background";
import Navigation from "@/components/home/navigation";
import FooterSection from "@/components/home/footer-section";
import ProjectsSection from "@/components/home/projects-section";
import HeroSection from "@/components/home/hero-section";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("hero");
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "projects", "courses", "blog"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden transition-colors duration-300">
      <OrbBackground y={y} />
      <Navigation activeSection={activeSection} />
      <HeroSection />
      <ProjectsSection />
      <CoursesSection />
      {/* <BlogSection /> */}
      <ContactSection />
      <FooterSection />
    </div>
  );
}
