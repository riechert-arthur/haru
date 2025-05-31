import { motion } from "framer-motion";
import { PenTool } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import { blogPosts, type BlogPost } from "@/data/blog";

export default function BlogSection() {
  return (
    <section id="blog" className="relative py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              Tech Blog
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Sharing insights, tutorials, and thoughts on the latest in
            technology and software development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post: BlogPost, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              className="group cursor-pointer"
            >
              <Card className="flex flex-col h-full bg-card/50 border-border backdrop-blur-sm hover:bg-card/80 transition-all duration-300">
                <CardHeader className="flex-none">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <PenTool className="h-4 w-4" />
                    {post.date} • {post.readTime}
                  </div>
                  <CardTitle className="group-hover:text-pink-400 transition-colors">
                    {post.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="flex flex-col flex-1 p-4">
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <Button
                    variant="ghost"
                    className="mt-auto self-start text-pink-400 hover:text-pink-300 p-0"
                  >
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
