"use client";

import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { Download } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

export default function HeroSection() {
  const router = useRouter();
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center"
    >
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-teal-400 bg-clip-text text-transparent">
              Arthur Riechert
            </span>
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-xl md:text-2xl text-muted-foreground mb-8"
          >
            Computer Science Student • Full-Stack Developer • OS Enthusiast
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto"
          >
            Passionate about building innovative solutions that bridge the gap
            between cutting-edge technology and real-world problems. Currently
            seeking internship opportunities to contribute to impactful
            projects.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-teal-600 hover:from-purple-700 hover:to-teal-700 text-white border-0"
              onClick={() => router.push("/docs/resume-05-31-25-2.pdf")}
            >
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-border hover:bg-accent"
              onClick={() => router.push("/projects")}
            >
              View Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
        className="absolute top-1/4 left-1/4 w-4 h-4 bg-purple-400 rounded-full opacity-60"
      />
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
        className="absolute top-1/3 right-1/4 w-6 h-6 bg-teal-400 rounded-full opacity-40"
      />
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, delay: 2 }}
        className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-pink-400 rounded-full opacity-50"
      />
    </section>
  );
}
