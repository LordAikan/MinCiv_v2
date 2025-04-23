
import React from "react";
import { Link } from "react-scroll";
import { Button } from "@/components/ui/button";
import { Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-border bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Copyright */}
          <div>
            <h2 className="text-2xl font-bold gradient-text mb-2">MinCiv</h2>
            <p className="text-muted-foreground">Mining Ventilation Specialists</p>
          </div>

          {/* Contact Information */}
          <div className="text-left">
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2">
              <p className="text-muted-foreground">Email: info@minciv.com</p>
              <p className="text-muted-foreground">Phone: +1 (555) 123-4567</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="text-right">
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex justify-end space-x-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground text-center">
            © 2025 MinCiv. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
