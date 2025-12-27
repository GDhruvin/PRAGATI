import Link from "next/link";
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-auto border-t bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">PRAGATI Fund</h3>
            <p className="text-sm text-muted-foreground">
              Student-managed investment fund at IIM Kashipur, dedicated to excellence in portfolio management.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/story" className="text-muted-foreground hover:text-primary transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/members" className="text-muted-foreground hover:text-primary transition-colors">
                  Fund Managers
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <a href="mailto:pragati@iimkashipur.ac.in" className="text-muted-foreground hover:text-primary transition-colors">
                  pragati@iimkashipur.ac.in
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <a href="tel:+915947267000" className="text-muted-foreground hover:text-primary transition-colors">
                  +91 5947 267000
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">
                  IIM Kashipur, Bazpur, Uttarakhand 262401
                </span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com/company/iim-kashipur"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
              >
                <Linkedin className="h-5 w-5 text-primary" />
              </a>
              <a
                href="https://twitter.com/iimkashipur"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
              >
                <Twitter className="h-5 w-5 text-primary" />
              </a>
              <a
                href="https://instagram.com/iimkashipur"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
              >
                <Instagram className="h-5 w-5 text-primary" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t">
          <p className="text-center text-sm text-muted-foreground">
            © 2025 P₹AGATI Fund Dashboard | IIM Kashipur Finance Club | All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  )
}
