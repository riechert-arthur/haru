"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowLeft,
  Calendar,
  Clock,
  Share2,
  Github,
  Heart,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function BlogArticle() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const [readingProgress, setReadingProgress] = useState(0);

  useEffect(() => {
    const updateReadingProgress = () => {
      const article = document.getElementById("article-content");
      if (article) {
        const { scrollTop, scrollHeight, clientHeight } =
          document.documentElement;
        const windowHeight = scrollHeight - clientHeight;
        const progress = (scrollTop / windowHeight) * 100;
        setReadingProgress(progress);
      }
    };

    window.addEventListener("scroll", updateReadingProgress);
    return () => window.removeEventListener("scroll", updateReadingProgress);
  }, []);

  const relatedPosts = [
    {
      title: "Understanding Machine Learning Algorithms",
      excerpt: "A deep dive into the most important ML algorithms...",
      date: "2024-01-10",
      readTime: "12 min read",
      slug: "understanding-ml-algorithms",
    },
    {
      title: "The Future of Web Development",
      excerpt: "Exploring emerging technologies that will shape...",
      date: "2024-01-05",
      readTime: "6 min read",
      slug: "future-web-development",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Reading Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 to-teal-600 z-50 origin-left"
        style={{ scaleX: readingProgress / 100 }}
      />

      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-teal-900/20" />
        <motion.div className="absolute inset-0 opacity-30" style={{ y }}>
          <div className="h-full w-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]" />
        </motion.div>
      </div>

      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-md border-b border-white/10"
      >
        <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent"
            >
              Alex Chen
            </motion.div>
          </Link>
          <Link href="/#blog">
            <Button variant="ghost" className="text-white/70 hover:text-white">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </motion.nav>

      {/* Article Header */}
      <section className="relative pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex flex-wrap gap-2 mb-6">
              <Badge className="bg-purple-600/20 text-purple-300 border-purple-500/30">
                Node.js
              </Badge>
              <Badge className="bg-teal-600/20 text-teal-300 border-teal-500/30">
                Microservices
              </Badge>
              <Badge className="bg-pink-600/20 text-pink-300 border-pink-500/30">
                Architecture
              </Badge>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
              Building Scalable Microservices with Node.js
            </h1>

            <p className="text-xl text-white/70 mb-8 leading-relaxed">
              Learn how to design and implement microservices that can handle
              millions of requests while maintaining high availability and
              performance.
            </p>

            <div className="flex items-center gap-6 text-white/60">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                January 15, 2024
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />8 min read
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="text-white/60 hover:text-white"
              >
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section id="article-content" className="relative px-6 pb-20">
        <div className="max-w-4xl mx-auto">
          <motion.article
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="prose prose-lg prose-invert max-w-none"
          >
            <div className="bg-white/5 border border-white/10 rounded-lg p-8 backdrop-blur-sm mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">
                Introduction
              </h2>
              <p className="text-white/80 leading-relaxed mb-6">
                In today&apos;s rapidly evolving tech landscape, building
                applications that can scale efficiently is crucial.
                Microservices architecture has emerged as a powerful pattern for
                creating distributed systems that are maintainable, scalable,
                and resilient. In this comprehensive guide, we&apos;ll explore
                how to build robust microservices using Node.js.
              </p>

              <h2 className="text-2xl font-bold text-white mb-4">
                Why Microservices?
              </h2>
              <p className="text-white/80 leading-relaxed mb-6">
                Traditional monolithic applications can become unwieldy as they
                grow. Microservices offer several advantages:
              </p>

              <ul className="list-disc list-inside text-white/80 space-y-2 mb-6">
                <li>
                  <strong className="text-purple-400">Scalability:</strong>{" "}
                  Scale individual services based on demand
                </li>
                <li>
                  <strong className="text-teal-400">
                    Technology Diversity:
                  </strong>{" "}
                  Use different technologies for different services
                </li>
                <li>
                  <strong className="text-pink-400">Team Independence:</strong>{" "}
                  Teams can work on services independently
                </li>
                <li>
                  <strong className="text-yellow-400">Fault Isolation:</strong>{" "}
                  Failures in one service don&apos;t bring down the entire
                  system
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-white mb-4">
                Architecture Overview
              </h2>
              <div className="bg-black/30 rounded-lg p-6 mb-6 border border-white/10">
                <pre className="text-green-400 text-sm overflow-x-auto">
                  {`┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│   Gateway   │    │   Service   │    │   Service   │
│   (Express) │────│   Registry  │────│   Discovery │
└─────────────┘    └─────────────┘    └─────────────┘
       │                   │                   │
       ▼                   ▼                   ▼
┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│   User      │    │   Order     │    │   Payment   │
│   Service   │    │   Service   │    │   Service   │
└─────────────┘    └─────────────┘    └─────────────┘`}
                </pre>
              </div>

              <h2 className="text-2xl font-bold text-white mb-4">
                Implementation Example
              </h2>
              <p className="text-white/80 leading-relaxed mb-4">
                Let&apos;s start with a simple user service implementation:
              </p>

              <div className="bg-gray-900 rounded-lg p-6 mb-6 border border-white/10">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-white/60">
                    user-service/index.js
                  </span>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="text-white/60 hover:text-white"
                  >
                    <Github className="h-4 w-4" />
                  </Button>
                </div>
                <pre className="text-sm overflow-x-auto">
                  <code className="text-blue-300">
                    {`const express = require('express');
const { v4: uuidv4 } = require('uuid');
const redis = require('redis');

const app = express();
const client = redis.createClient();

app.use(express.json());

// In-memory user store (use database in production)
const users = new Map();

// Create user endpoint
app.post('/users', async (req, res) => {
  try {
    const { name, email } = req.body;
    const userId = uuidv4();
    
    const user = {
      id: userId,
      name,
      email,
      createdAt: new Date().toISOString()
    };
    
    users.set(userId, user);
    
    // Cache user data
    await client.setex(\`user:\${userId}\`, 3600, JSON.stringify(user));
    
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get user endpoint
app.get('/users/:id', async (req, res) => {
  try {
    const { id } = req.params;
    
    // Try cache first
    const cached = await client.get(\`user:\${id}\`);
    if (cached) {
      return res.json(JSON.parse(cached));
    }
    
    const user = users.get(id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(\`User service running on port \${PORT}\`);
});`}
                  </code>
                </pre>
              </div>

              <h2 className="text-2xl font-bold text-white mb-4">
                Service Communication
              </h2>
              <p className="text-white/80 leading-relaxed mb-6">
                Microservices need to communicate with each other efficiently.
                Here are the main patterns:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-purple-400 mb-3">
                      Synchronous Communication
                    </h3>
                    <ul className="text-white/80 space-y-2">
                      <li>• HTTP/REST APIs</li>
                      <li>• GraphQL</li>
                      <li>• gRPC</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-teal-400 mb-3">
                      Asynchronous Communication
                    </h3>
                    <ul className="text-white/80 space-y-2">
                      <li>• Message Queues (RabbitMQ)</li>
                      <li>• Event Streaming (Kafka)</li>
                      <li>• Pub/Sub patterns</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <h2 className="text-2xl font-bold text-white mb-4">
                Best Practices
              </h2>
              <div className="space-y-4 mb-8">
                <div className="bg-purple-600/10 border border-purple-500/30 rounded-lg p-4">
                  <h4 className="font-bold text-purple-400 mb-2">
                    1. Database per Service
                  </h4>
                  <p className="text-white/80">
                    Each microservice should have its own database to ensure
                    loose coupling.
                  </p>
                </div>

                <div className="bg-teal-600/10 border border-teal-500/30 rounded-lg p-4">
                  <h4 className="font-bold text-teal-400 mb-2">
                    2. API Gateway Pattern
                  </h4>
                  <p className="text-white/80">
                    Use an API gateway to handle cross-cutting concerns like
                    authentication and rate limiting.
                  </p>
                </div>

                <div className="bg-pink-600/10 border border-pink-500/30 rounded-lg p-4">
                  <h4 className="font-bold text-pink-400 mb-2">
                    3. Circuit Breaker Pattern
                  </h4>
                  <p className="text-white/80">
                    Implement circuit breakers to handle service failures
                    gracefully.
                  </p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-white mb-4">Conclusion</h2>
              <p className="text-white/80 leading-relaxed mb-6">
                Building scalable microservices with Node.js requires careful
                planning and adherence to best practices. By following the
                patterns and principles outlined in this guide, you can create
                robust, maintainable systems that scale with your business
                needs.
              </p>

              <p className="text-white/80 leading-relaxed">
                Remember that microservices aren&apos;t a silver bullet – they
                come with their own complexity. Start simple, measure
                performance, and evolve your architecture as your requirements
                grow.
              </p>
            </div>

            {/* Article Actions */}
            <div className="flex items-center justify-between py-8 border-t border-white/10">
              <div className="flex items-center gap-4">
                <Button
                  variant="ghost"
                  className="text-white/60 hover:text-white"
                >
                  <Heart className="h-4 w-4 mr-2" />
                  42 Likes
                </Button>
                <Button
                  variant="ghost"
                  className="text-white/60 hover:text-white"
                >
                  <MessageCircle className="h-4 w-4 mr-2" />8 Comments
                </Button>
              </div>
              <Button
                variant="ghost"
                className="text-white/60 hover:text-white"
              >
                <Share2 className="h-4 w-4 mr-2" />
                Share Article
              </Button>
            </div>
          </motion.article>
        </div>
      </section>

      {/* Related Posts */}
      <section className="relative px-6 pb-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-8 text-center">
              <span className="bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
                Related Articles
              </span>
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {relatedPosts.map((post, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <Link href={`/blog/${post.slug}`}>
                    <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 cursor-pointer h-full">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-2 text-sm text-white/60 mb-3">
                          <Calendar className="h-4 w-4" />
                          {post.date} • {post.readTime}
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3 hover:text-purple-400 transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-white/70">{post.excerpt}</p>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
