
import { motion } from "framer-motion";
import { Users, Globe, Award, Heart } from "lucide-react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";

export default function About() {
  const stats = [
    { number: "100+", label: "Websites Delivered" },
    { number: "50+", label: "Trusted Businesses" },
    { number: "24/7", label: "Support Available" },
    { number: "7", label: "Days Delivery" }
  ];

  const team = [
    {
      name: "Alex Johnson",
      role: "CEO & Lead Developer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      description: "10+ years of experience in web development and business strategy."
    },
    {
      name: "Sarah Chen",
      role: "Creative Director",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      description: "Expert in UI/UX design with a passion for creating beautiful, functional websites."
    },
    {
      name: "Mike Rodriguez",
      role: "Full-Stack Developer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
      description: "Specialist in modern web technologies and performance optimization."
    }
  ];

  const values = [
    {
      icon: Users,
      title: "Client-Focused",
      description: "Your success is our priority. We work closely with you to understand your goals and deliver results that exceed expectations."
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Working with businesses worldwide, we understand diverse markets and create websites that resonate with your target audience."
    },
    {
      icon: Award,
      title: "Quality First",
      description: "We never compromise on quality. Every website we deliver is thoroughly tested, optimized, and built to last."
    },
    {
      icon: Heart,
      title: "Passionate Team",
      description: "We love what we do, and it shows in our work. Our passion for web development drives us to stay ahead of the curve."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        {/* Hero Section - About Our Story */}
        <section className="py-20 bg-gradient-to-br from-background via-muted to-background">
          <div className="container mx-auto px-6">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                About <span className="gradient-text">Our Story</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We're a passionate team of developers and designers committed to helping businesses succeed online through powerful, beautiful websites.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {stats.map((stat, index) => (
                <div key={stat.label} className="text-center">
                  <div className="text-4xl font-bold text-accent mb-2">{stat.number}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Remote Work Section with World Map */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-6">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Global Team, Local Impact</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our remote-first approach allows us to work with the best talent worldwide while providing personalized service to businesses everywhere.
              </p>
            </motion.div>

            {/* World Map Image */}
            <motion.div
              className="max-w-4xl mx-auto mb-12"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <img
                  src="/attached_assets/image_1748979328412.png"
                  alt="Global Service Coverage - World Map showing Gwalior and San Francisco locations"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/10 to-transparent rounded-lg"></div>
              </div>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">🇮🇳 Gwalior, India</h3>
                  <p className="text-muted-foreground">
                    Our development hub in Gwalior brings together talented developers who understand both local and global market needs, ensuring cost-effective solutions without compromising quality.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">🇺🇸 San Francisco, USA</h3>
                  <p className="text-muted-foreground">
                    Our strategy and design team in San Francisco keeps us at the forefront of innovation, ensuring our clients benefit from the latest trends and technologies in web development.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Our Values</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                The principles that guide everything we do.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <value.icon className="w-6 h-6 text-accent" />
                      </div>
                      <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                      <p className="text-muted-foreground">{value.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-6">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Meet Our Team</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                The talented individuals behind every successful project.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full">
                    <CardContent className="p-6 text-center">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                      />
                      <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                      <p className="text-accent font-medium mb-3">{member.role}</p>
                      <p className="text-muted-foreground">{member.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <motion.div
              className="text-center max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Ready to Start Your Project?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Let's work together to create something amazing for your business.
              </p>
              <Link href="/proposal">
                <Button size="lg" className="bg-accent hover:bg-accent/80 text-accent-foreground">
                  Get Online Now
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
