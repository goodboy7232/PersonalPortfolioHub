import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import ChatWidget from "@/components/chat-widget";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Users, Award, Target, Heart } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: Target,
      title: "Mission Driven",
      description: "We're dedicated to helping businesses succeed online with cutting-edge web solutions."
    },
    {
      icon: Heart,
      title: "Client First",
      description: "Your success is our priority. We build lasting partnerships through exceptional service."
    },
    {
      icon: Award,
      title: "Quality Excellence",
      description: "We deliver premium websites that exceed expectations and drive real results."
    },
    {
      icon: Users,
      title: "Team Spirit",
      description: "Our diverse team brings together creativity, technical expertise, and business insight."
    }
  ];

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
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">About WebCraft Pro</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We're a passionate team of web developers, designers, and digital strategists committed to transforming your online presence.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                  alt="WebCraft Pro team working together"
                  className="rounded-2xl shadow-lg w-full h-auto"
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Founded in 2020, WebCraft Pro emerged from a simple belief: every business deserves a website that not only looks amazing but drives real results. We've grown from a small startup to a trusted partner for over 100 businesses across the United States.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Our approach combines cutting-edge technology with human-centered design, ensuring that every website we create tells your unique story and connects with your audience in meaningful ways.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-6">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">Our Values</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                These core principles guide everything we do and shape how we serve our clients.
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
                  <Card className="bg-background border-border hover:border-accent/50 transition-all duration-300 text-center h-full">
                    <CardContent className="p-6">
                      <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <value.icon className="w-8 h-8 text-accent" />
                      </div>
                      <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                      <p className="text-muted-foreground text-sm">{value.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Founder Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300" 
                  alt="Founder of WebCraft Pro"
                  className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
                />
                <h2 className="text-3xl font-bold mb-4">Meet Our Founder</h2>
                <h3 className="text-xl text-accent mb-6">John Smith, CEO & Lead Developer</h3>
                <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                  "I started WebCraft Pro with a vision to democratize high-quality web development. 
                  Every business, regardless of size, should have access to professional, conversion-focused websites. 
                  Today, I'm proud to lead a team that shares this vision and continues to push the boundaries of what's possible in web development."
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
}