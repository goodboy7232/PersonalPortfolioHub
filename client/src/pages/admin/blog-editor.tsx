import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Save, ArrowLeft, Eye } from "lucide-react";
import { motion } from "framer-motion";
import AdminLayout from "@/components/admin/admin-layout";
import { useToast } from "@/hooks/use-toast";
import { useLocation } from "wouter";

export default function BlogEditor() {
  const { toast } = useToast();
  const [location, setLocation] = useLocation();
  const isEditing = location.includes("/edit/");
  const blogId = isEditing ? location.split("/").pop() : null;

  const [formData, setFormData] = useState({
    title: "",
    excerpt: "",
    content: "",
    category: "",
    author: "Admin",
    status: "draft",
    image: ""
  });

  useEffect(() => {
    if (isEditing && blogId) {
      // In a real app, you'd fetch the blog data from your backend
      // For demo purposes, we'll use mock data
      const mockBlog = {
        title: "10 Essential Website Features Every Business Needs in 2024",
        excerpt: "Discover the must-have features that make websites successful and drive conversions for modern businesses.",
        content: `<p>In today's digital landscape, having a website isn't enough—you need a website that converts visitors into customers. After analyzing hundreds of successful business websites, we've identified the 10 essential features that every business website needs in 2024.</p>

<h2>1. Mobile-First Responsive Design</h2>
<p>Over 60% of web traffic now comes from mobile devices. Your website must provide an exceptional experience across all screen sizes.</p>

<h2>2. Clear Value Proposition</h2>
<p>Visitors should understand what you offer within 5 seconds of landing on your homepage.</p>`,
        category: "Web Design",
        author: "John Smith",
        status: "published",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
      };
      setFormData(mockBlog);
    }
  }, [isEditing, blogId]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real app, you'd send this data to your backend
    toast({
      title: isEditing ? "Blog Updated" : "Blog Created",
      description: `Blog post has been ${isEditing ? "updated" : "created"} successfully.`,
    });
    
    setLocation("/admin/blogs");
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <AdminLayout>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" onClick={() => setLocation("/admin/blogs")}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blogs
            </Button>
            <div>
              <h1 className="text-3xl font-bold">
                {isEditing ? "Edit Blog Post" : "Create New Blog Post"}
              </h1>
              <p className="text-muted-foreground">
                {isEditing ? "Update your blog post" : "Write and publish a new blog post"}
              </p>
            </div>
          </div>
          <div className="flex space-x-2">
            <Button variant="outline">
              <Eye className="w-4 h-4 mr-2" />
              Preview
            </Button>
            <Button form="blog-form" type="submit">
              <Save className="w-4 h-4 mr-2" />
              {isEditing ? "Update" : "Save"}
            </Button>
          </div>
        </div>

        {/* Editor */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Content</CardTitle>
              </CardHeader>
              <CardContent>
                <form id="blog-form" onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="title">Title *</Label>
                    <Input
                      id="title"
                      value={formData.title}
                      onChange={(e) => handleInputChange("title", e.target.value)}
                      placeholder="Enter blog post title..."
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="excerpt">Excerpt *</Label>
                    <Textarea
                      id="excerpt"
                      value={formData.excerpt}
                      onChange={(e) => handleInputChange("excerpt", e.target.value)}
                      placeholder="Brief description of the blog post..."
                      rows={3}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="content">Content *</Label>
                    <Textarea
                      id="content"
                      value={formData.content}
                      onChange={(e) => handleInputChange("content", e.target.value)}
                      placeholder="Write your blog post content here... You can use HTML tags for formatting."
                      rows={20}
                      required
                      className="font-mono text-sm"
                    />
                    <p className="text-xs text-muted-foreground mt-2">
                      You can use HTML tags for formatting (h2, h3, p, ul, li, strong, em, etc.)
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Publish Settings */}
            <Card>
              <CardHeader>
                <CardTitle>Publish Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="status">Status</Label>
                  <Select value={formData.status} onValueChange={(value) => handleInputChange("status", value)}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="draft">Draft</SelectItem>
                      <SelectItem value="published">Published</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="author">Author</Label>
                  <Input
                    id="author"
                    value={formData.author}
                    onChange={(e) => handleInputChange("author", e.target.value)}
                    placeholder="Author name"
                  />
                </div>

                <div>
                  <Label htmlFor="category">Category</Label>
                  <Select value={formData.category} onValueChange={(value) => handleInputChange("category", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Web Design">Web Design</SelectItem>
                      <SelectItem value="AI Technology">AI Technology</SelectItem>
                      <SelectItem value="Performance">Performance</SelectItem>
                      <SelectItem value="Security">Security</SelectItem>
                      <SelectItem value="Mobile Design">Mobile Design</SelectItem>
                      <SelectItem value="SEO">SEO</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            {/* Featured Image */}
            <Card>
              <CardHeader>
                <CardTitle>Featured Image</CardTitle>
              </CardHeader>
              <CardContent>
                <div>
                  <Label htmlFor="image">Image URL</Label>
                  <Input
                    id="image"
                    value={formData.image}
                    onChange={(e) => handleInputChange("image", e.target.value)}
                    placeholder="https://example.com/image.jpg"
                  />
                </div>
                {formData.image && (
                  <div className="mt-4">
                    <img 
                      src={formData.image} 
                      alt="Preview"
                      className="w-full h-32 object-cover rounded-lg"
                    />
                  </div>
                )}
              </CardContent>
            </Card>

            {/* SEO Settings */}
            <Card>
              <CardHeader>
                <CardTitle>SEO Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label>Meta Title</Label>
                  <Input placeholder="SEO title (auto-generated from title)" disabled />
                </div>
                <div>
                  <Label>Meta Description</Label>
                  <Textarea placeholder="SEO description (auto-generated from excerpt)" rows={3} disabled />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}