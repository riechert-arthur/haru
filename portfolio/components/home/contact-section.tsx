import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const LINKEDIN_URL = "https://www.linkedin.com/in/arthur-riechert/";
const GITHUB_URL = "https://github.com/riechert-arthur";
const EMAIL_URL = "mailto:riechertarthur@gmail.com";

export default function ContactSection() {
  const router = useRouter();
  return (
    <section id="contact" className="relative py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            <span className="bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
              Let&apos;s Connect
            </span>
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Ready to contribute to innovative projects and grow as a developer.
            Let&apos;s discuss how I can add value to your team!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-teal-600 hover:from-purple-700 hover:to-teal-700 text-white border-0"
              onClick={() => router.push(EMAIL_URL)}
            >
              <Mail className="mr-2 h-4 w-4" />
              riechertarthur@gmail.com
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-border hover:bg-accent"
              onClick={() => router.push(LINKEDIN_URL)}
            >
              <Linkedin className="mr-2 h-4 w-4" />
              LinkedIn
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-border hover:bg-accent"
              onClick={() => router.push(GITHUB_URL)}
            >
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
