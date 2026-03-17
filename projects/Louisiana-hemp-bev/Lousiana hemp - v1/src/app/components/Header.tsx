import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import logoImage from "figma:asset/27dfe1df33bd5a6e0a46d556ae74e49a7fac0277.png";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Policy & Advocacy", path: "/policy" },
    { label: "Resources", path: "/resources" },
    { label: "Get Involved", path: "/get-involved" },
    { label: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-[var(--neutral-200)]"
          : "bg-white border-b border-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 flex-shrink-0">
            <img
              src={logoImage}
              alt="Louisiana Hemp Beverage Coalition"
              className="h-12 lg:h-14 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 xl:px-4 py-2 rounded-md transition-colors relative ${
                  isActive(item.path)
                    ? "text-[var(--brand-navy-dark)] font-semibold"
                    : "text-[var(--neutral-600)] hover:text-[var(--brand-navy-dark)] hover:bg-[var(--neutral-50)]"
                }`}
              >
                {item.label}
                {isActive(item.path) && (
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-[var(--brand-teal-dark)] rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              asChild
              variant="outline"
              className="border-[var(--brand-navy-dark)] text-[var(--brand-navy-dark)] hover:bg-[var(--brand-navy-dark)] hover:text-white"
            >
              <Link to="/contact">Contact Us</Link>
            </Button>
            <Button
              asChild
              className="bg-[var(--brand-teal-dark)] hover:bg-[var(--brand-teal)] text-white"
            >
              <Link to="/get-involved">Join the Coalition</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-md text-[var(--neutral-600)] hover:bg-[var(--neutral-100)] transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-[var(--neutral-200)] py-4 animate-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-4 py-3 rounded-md transition-colors ${
                    isActive(item.path)
                      ? "bg-[var(--neutral-100)] text-[var(--brand-navy-dark)] font-semibold"
                      : "text-[var(--neutral-600)] hover:bg-[var(--neutral-50)]"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="flex flex-col gap-2 mt-4 px-4">
              <Button
                asChild
                variant="outline"
                className="w-full border-[var(--brand-navy-dark)] text-[var(--brand-navy-dark)] hover:bg-[var(--brand-navy-dark)] hover:text-white"
              >
                <Link to="/contact">Contact Us</Link>
              </Button>
              <Button
                asChild
                className="w-full bg-[var(--brand-teal-dark)] hover:bg-[var(--brand-teal)] text-white"
              >
                <Link to="/get-involved">Join the Coalition</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
