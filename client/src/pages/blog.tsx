import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import ChatWidget from "@/components/chat-widget";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { useState } from "react";

export default function Blog() {
  const [visiblePosts, setVisiblePosts] = useState(6);
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  const blogPosts = [
    {
      id: 1,
      title: "10 Essential Website Features Every Business Needs in 2024",
      excerpt: "Discover the must-have features that make websites successful and drive conversions for modern businesses.",
      author: "John Smith",
      date: "2024-01-15",
      category: "Web Design",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "How AI Chatbots Can Increase Your Website Conversions by 300%",
      excerpt: "Learn how implementing AI chatbots on your website can dramatically improve customer engagement and sales.",
      author: "Sarah Johnson",
      date: "2024-01-10",
      category: "AI Technology",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      readTime: "7 min read"
    },
    {
      id: 3,
      title: "Website Speed Optimization: Complete Guide for 2024",
      excerpt: "Everything you need to know about making your website load faster and improving user experience.",
      author: "Mike Chen",
      date: "2024-01-05",
      category: "Performance",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      readTime: "8 min read"
    },
    {
      id: 4,
      title: "E-commerce Website Security: Protecting Your Business and Customers",
      excerpt: "Essential security measures every e-commerce website needs to implement to prevent data breaches.",
      author: "Lisa Rodriguez",
      date: "2024-01-01",
      category: "Security",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      readTime: "6 min read"
    },
    {
      id: 5,
      title: "Mobile-First Design: Why Your Website Must Be Mobile Optimized",
      excerpt: "Understanding the importance of mobile-first design and how it impacts your business success.",
      author: "David Kumar",
      date: "2023-12-28",
      category: "Mobile Design",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      readTime: "4 min read"
    },
    {
      id: 6,
      title: "SEO Best Practices for New Websites in 2024",
      excerpt: "Step-by-step guide to optimize your new website for search engines and improve organic visibility.",
      author: "Emma Wilson",
      date: "2023-12-25",
      category: "SEO",
      image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      readTime: "9 min read"
    }
  ];

  const categories = ["All", "Web Design", "AI Technology", "Performance", "Security", "Mobile Design", "SEO"];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">Our Blog</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Stay updated with the latest web development trends, tips, and insights from our expert team.
              </p>
            </motion.div>

            {/* Category Filter */}
            <motion.div 
              className="flex flex-wrap justify-center gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "secondary"}
                  className={`${
                    selectedCategory === category 
                      ? "bg-accent text-accent-foreground" 
                      : "bg-muted hover:bg-accent hover:text-accent-foreground"
                  } transition-all`}
                  onClick={() => {
                    setSelectedCategory(category);
                    setVisiblePosts(6);
                  }}
                >
                  {category}
                </Button>
              ))}
            </motion.div>

            {/* Blog Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts
                .filter(post => selectedCategory === "All" || post.category === selectedCategory)
                .slice(0, visiblePosts)
                .map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="group cursor-pointer overflow-hidden border-border hover:border-accent/50 transition-all duration-300 transform hover:-translate-y-2 h-full">
                    <div className="relative overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge variant="secondary" className="bg-accent text-accent-foreground">
                          {post.category}
                        </Badge>
                      </div>
                    </div>
                    <CardHeader className="pb-3">
                      <h3 className="text-xl font-bold leading-tight group-hover:text-accent transition-colors">
                        {post.title}
                      </h3>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center">
                            <User className="w-3 h-3 mr-1" />
                            {post.author}
                          </div>
                          <div className="flex items-center">
                            <Calendar className="w-3 h-3 mr-1" />
                            {new Date(post.date).toLocaleDateString()}
                          </div>
                        </div>
                        <span>{post.readTime}</span>
                      </div>
                      <Link href={`/blog/${post.id}`}>
                        <Button 
                          variant="ghost" 
                          className="text-accent hover:text-accent-foreground hover:bg-accent/10 p-0"
                        >
                          Read More <ArrowRight className="w-4 h-4 ml-1" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Load More Button */}
            {blogPosts.filter(post => selectedCategory === "All" || post.category === selectedCategory).length > visiblePosts && (
              <motion.div 
                className="text-center mt-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                  onClick={() => setVisiblePosts(prev => prev + 6)}
                >
                  Load More Articles
                </Button>
              </motion.div>
            )}
          </div>
        </section>
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
}