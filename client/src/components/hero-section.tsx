import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, Headphones, Trophy, Rocket, Play } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen hero-gradient relative overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted to-background opacity-50"></div>
      <motion.div 
        className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl"
        animate={{ y: [-20, 20, -20] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        animate={{ y: [20, -20, 20] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: -3 }}
      />
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          <motion.div 
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="inline-flex items-center bg-accent/10 text-accent border-accent/20 mb-6">
              <Trophy className="w-4 h-4 mr-2" />
              100+ Websites Delivered
            </Badge>
            
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
              We Build{" "}
              <span className="gradient-text">
                Websites
              </span>{" "}
              That Convert
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              One-stop solution for US businesses. Design, develop & launch with hosting, domain & AI assistant included.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" className="bg-accent hover:bg-accent/80 text-accent-foreground animate-glow">
                <Rocket className="w-5 h-5 mr-2" />
                Get Free Proposal
              </Button>
              <Button variant="outline" size="lg" className="border-border hover:border-accent">
                <Play className="w-5 h-5 mr-2" />
                View Live Demos
              </Button>
            </div>
            
            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center">
                <Shield className="w-4 h-4 text-green-500 mr-2" />
                SSL Secured
              </div>
              <div className="flex items-center">
                <Headphones className="w-4 h-4 text-accent mr-2" />
                24/7 US Support
              </div>
              <div className="flex items-center">
                <Trophy className="w-4 h-4 text-primary mr-2" />
                7-Day Delivery
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&h=800" 
              alt="Modern web development workspace with multiple monitors showing code"
              className="rounded-2xl shadow-2xl w-full h-auto transform hover:scale-105 transition-transform duration-500"
            />
            
            {/* Floating Cards */}
            <motion.div 
              className="absolute -top-6 -left-6 glass rounded-xl p-4"
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium">Site Live</span>
              </div>
            </motion.div>
            
            <motion.div 
              className="absolute -bottom-6 -right-6 glass rounded-xl p-4"
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: -2 }}
            >
              <div className="flex items-center space-x-3">
                <Trophy className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium">+150% Conversions</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
