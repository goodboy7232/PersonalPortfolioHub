import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  Plus, 
  Edit, 
  Trash2, 
  Search, 
  Eye,
  Calendar,
  User
} from "lucide-react";
import { motion } from "framer-motion";
import AdminLayout from "@/components/admin/admin-layout";
import { useToast } from "@/hooks/use-toast";
import { useLocation } from "wouter";

export default function AdminBlogs() {
  const { toast } = useToast();
  const [, setLocation] = useLocation();
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: "10 Essential Website Features Every Business Needs in 2024",
      excerpt: "Discover the must-have features that make websites successful and drive conversions for modern businesses.",
      author: "John Smith",
      date: "2024-01-15",
      category: "Web Design",
      status: "published",
      views: 1250,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
    },
    {
      id: 2,
      title: "How AI Chatbots Can Increase Your Website Conversions by 300%",
      excerpt: "Learn how implementing AI chatbots on your website can dramatically improve customer engagement and sales.",
      author: "Sarah Johnson",
      date: "2024-01-10",
      category: "AI Technology",
      status: "published",
      views: 890,
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
    },
    {
      id: 3,
      title: "Website Speed Optimization: Complete Guide for 2024",
      excerpt: "Everything you need to know about making your website load faster and improving user experience.",
      author: "Mike Chen",
      date: "2024-01-05",
      category: "Performance",
      status: "draft",
      views: 0,
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
    }
  ]);

  const filteredBlogs = blogs.filter(blog => {
    const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         blog.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         blog.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || blog.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleDelete = (id: number) => {
    setBlogs(prev => prev.filter(blog => blog.id !== id));
    toast({
      title: "Blog Post Deleted",
      description: "The blog post has been removed.",
    });
  };

  const handleStatusChange = (id: number, newStatus: string) => {
    setBlogs(prev => prev.map(blog => 
      blog.id === id ? { ...blog, status: newStatus } : blog
    ));
    toast({
      title: "Status Updated",
      description: `Blog post status changed to ${newStatus}`,
    });
  };

  return (
    <AdminLayout>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Blog Management</h1>
            <p className="text-muted-foreground">Create, edit, and manage blog posts</p>
          </div>
          <Button onClick={() => setLocation("/admin/blogs/new")}>
            <Plus className="w-4 h-4 mr-2" />
            New Post
          </Button>
        </div>

        {/* Filters */}
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    placeholder="Search blog posts..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <div className="flex gap-2">
                <Button
                  variant={statusFilter === "all" ? "default" : "outline"}
                  onClick={() => setStatusFilter("all")}
                  size="sm"
                >
                  All
                </Button>
                <Button
                  variant={statusFilter === "published" ? "default" : "outline"}
                  onClick={() => setStatusFilter("published")}
                  size="sm"
                >
                  Published
                </Button>
                <Button
                  variant={statusFilter === "draft" ? "default" : "outline"}
                  onClick={() => setStatusFilter("draft")}
                  size="sm"
                >
                  Draft
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBlogs.map((blog, index) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="hover:shadow-lg transition-shadow h-full">
                <div className="relative">
                  <img 
                    src={blog.image} 
                    alt={blog.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge 
                      variant={blog.status === "published" ? "default" : "secondary"}
                    >
                      {blog.status}
                    </Badge>
                  </div>
                </div>
                
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg leading-tight line-clamp-2">
                    {blog.title}
                  </CardTitle>
                  <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                    <div className="flex items-center">
                      <User className="w-3 h-3 mr-1" />
                      {blog.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      {blog.date}
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {blog.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="outline">{blog.category}</Badge>
                    <span className="text-xs text-muted-foreground">
                      {blog.views} views
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <select
                      value={blog.status}
                      onChange={(e) => handleStatusChange(blog.id, e.target.value)}
                      className="text-xs border border-border rounded px-2 py-1 bg-background"
                    >
                      <option value="draft">Draft</option>
                      <option value="published">Published</option>
                    </select>
                    
                    <div className="flex space-x-1">
                      <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                        <Eye className="w-3 h-3" />
                      </Button>
                      <Button 
                        size="sm" 
                        variant="ghost" 
                        className="h-8 w-8 p-0"
                        onClick={() => setLocation(`/admin/blogs/edit/${blog.id}`)}
                      >
                        <Edit className="w-3 h-3" />
                      </Button>
                      <Button 
                        size="sm" 
                        variant="ghost" 
                        className="h-8 w-8 p-0 text-red-500 hover:text-red-600"
                        onClick={() => handleDelete(blog.id)}
                      >
                        <Trash2 className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {filteredBlogs.length === 0 && (
          <Card>
            <CardContent className="p-12 text-center">
              <p className="text-muted-foreground">No blog posts found matching your criteria.</p>
            </CardContent>
          </Card>
        )}
      </div>
    </AdminLayout>
  );
}