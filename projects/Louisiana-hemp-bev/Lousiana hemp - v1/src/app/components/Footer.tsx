import { Link } from "react-router";
import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "./ui/button";
import logoImage from "figma:asset/27dfe1df33bd5a6e0a46d556ae74e49a7fac0277.png";

export function Footer() {
  return (
    <footer className="bg-[var(--neutral-900)] text-white">
      {/* CTA Section */}
      <div className="bg-gradient-to-br from-[var(--brand-navy-dark)] to-[var(--brand-navy)] py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 text-white">
            Join Louisiana's Hemp Business Leaders
          </h2>
          <p className="text-lg lg:text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Work together to shape smart policy and protect Louisiana's
            regulated hemp beverage industry.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-[var(--brand-teal-dark)] hover:bg-[var(--brand-teal)] text-white px-8 py-6 h-auto"
          >
            <Link to="/get-involved">Become a Member</Link>
          </Button>
        </div>
      </div>

      {/* Main Footer */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* About Column */}
            <div className="lg:col-span-2">
              <img
                src={logoImage}
                alt="Louisiana Hemp Beverage Coalition"
                className="h-16 w-auto mb-4 brightness-0 invert"
              />
              <p className="text-[var(--neutral-300)] mb-4 max-w-md">
                The Louisiana Hemp Beverage Coalition brings together business
                leaders across hemp, alcohol, and grocery sectors to advocate
                for smart policy at the state and federal level.
              </p>
              <p className="text-sm text-[var(--neutral-400)]">
                A 501(c)(6) trade association. Dues are not tax-deductible as
                charitable contributions.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/about"
                    className="text-[var(--neutral-300)] hover:text-white transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/policy"
                    className="text-[var(--neutral-300)] hover:text-white transition-colors"
                  >
                    Policy & Advocacy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/resources"
                    className="text-[var(--neutral-300)] hover:text-white transition-colors"
                  >
                    Resources
                  </Link>
                </li>
                <li>
                  <Link
                    to="/get-involved"
                    className="text-[var(--neutral-300)] hover:text-white transition-colors"
                  >
                    Get Involved
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-[var(--neutral-300)] hover:text-white transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Mail className="w-5 h-5 text-[var(--brand-teal)] flex-shrink-0 mt-0.5" />
                  <a
                    href="mailto:info@louisianahempbeveragecoalition.com"
                    className="text-[var(--neutral-300)] hover:text-white transition-colors"
                  >
                    info@louisianahempbeveragecoalition.com
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="w-5 h-5 text-[var(--brand-teal)] flex-shrink-0 mt-0.5" />
                  <span className="text-[var(--neutral-300)]">
                    Statewide across Louisiana
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-[var(--neutral-400)]">
              © {new Date().getFullYear()} Louisiana Hemp Beverage Coalition.
              All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a
                href="#"
                className="text-[var(--neutral-400)] hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-[var(--neutral-400)] hover:text-white transition-colors"
              >
                Terms of Use
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
