import { Link } from "wouter";
import { Route, Github, Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Dashboard", href: "/dashboard" },
    { name: "Routes", href: "/routes" },
    { name: "Documentation", href: "#" },
  ];

  return (
    <footer className="bg-card border-t border-border mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Route className="text-primary-foreground text-lg" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-card-foreground">Raah</h2>
                <p className="text-sm text-muted-foreground">Udaipur Smart Transport</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              Revolutionizing Udaipur's transportation through intelligent routing, real-time analytics, and seamless integration for the Lake City.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                data-testid="social-github"
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="#"
                data-testid="social-linkedin"
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                data-testid="social-twitter"
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-card-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  {link.href.startsWith("#") ? (
                    <a
                      href={link.href}
                      data-testid={`footer-link-${link.name.toLowerCase()}`}
                      className="text-muted-foreground hover:text-primary transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link href={link.href} data-testid={`footer-link-${link.name.toLowerCase()}`}>
                      <span className="text-muted-foreground hover:text-primary transition-colors duration-200 cursor-pointer">
                        {link.name}
                      </span>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="font-semibold text-card-foreground mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-muted-foreground flex items-center">
                <Mail className="mr-2 h-4 w-4" />
                support@raah-udaipur.com
              </li>
              <li className="text-muted-foreground flex items-center">
                <Phone className="mr-2 h-4 w-4" />
                +91 9876543210
              </li>
              <li className="text-muted-foreground flex items-center">
                <MapPin className="mr-2 h-4 w-4" />
                Udaipur, Rajasthan
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2025 Raah. All rights reserved. Built for SIH 2025 - Udaipur Smart City.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="#"
              data-testid="footer-privacy"
              className="text-muted-foreground hover:text-primary text-sm transition-colors duration-200"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              data-testid="footer-terms"
              className="text-muted-foreground hover:text-primary text-sm transition-colors duration-200"
            >
              Terms of Service
            </a>
            <a
              href="#"
              data-testid="footer-help"
              className="text-muted-foreground hover:text-primary text-sm transition-colors duration-200"
            >
              Help
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
