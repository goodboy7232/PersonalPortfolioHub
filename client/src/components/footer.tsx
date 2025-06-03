import { Code, Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Footer() {
  const footerLinks = {
    services: [
      "Website Design",
      "E-commerce",
      "AI Integration",
      "Hosting & Domain",
      "Maintenance",
    ],
    company: [
      "About Us",
      "Portfolio",
      "Case Studies",
      "Blog",
      "Careers",
    ],
    contact: [
      { icon: Phone, text: "+1 (555) 123-4567" },
      { icon: Mail, text: "hello@webcraftpro.com" },
      { icon: MapPin, text: "New York, USA" },
      { icon: Clock, text: "24/7 Support" },
    ],
  };

  return (
    <footer className="bg-muted border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Code className="h-8 w-8 text-accent" />
              <span className="text-xl font-bold gradient-text">Digital High Web</span>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              We build websites that convert. Your one-stop solution for custom web development, hosting, and digital growth.
            </p>
            <div className="flex space-x-4">
              {["facebook", "twitter", "linkedin", "instagram"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-muted-foreground hover:text-accent transition-colors"
                  aria-label={`Follow us on ${social}`}
                >
                  <div className="w-6 h-6 bg-current rounded" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((service) => (
                <li key={service}>
                  <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((item) => (
                <li key={item}>
                  <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact</h3>
            <ul className="space-y-3">
              {footerLinks.contact.map((item, index) => (
                <li key={index} className="flex items-center text-muted-foreground">
                  <item.icon className="w-4 h-4 text-accent mr-3 flex-shrink-0" />
                  <span className="text-sm">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 WebCraft Pro. All rights reserved. |{" "}
            <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a> |{" "}
            <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
