import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";
import { Input } from "./components/ui/input";
import { Textarea } from "./components/ui/textarea";
import { Label } from "./components/ui/label";
import logoImage from "figma:asset/a09e68c3c3962825046115c88867050fb5a1aca0.png";
import heroBackgroundImage from "figma:asset/cfc490d228d275e7eefe6c017455077d36337e68.png";
import groceryShelvesImage from "figma:asset/fb7b87efcfb7eab7537b3674b09a59dcb20a39f8.png";

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header isScrolled={isScrolled} />
      <HeroSection />
      <SituationSection />
      <PullQuoteSection />
      <WhoSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

function Header({ isScrolled }: { isScrolled: boolean }) {
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md border-b border-[var(--neutral-200)]"
          : "bg-white border-b border-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center flex-shrink-0">
            <img
              src={logoImage}
              alt="Louisiana Hemp Beverage Coalition"
              className="h-14 lg:h-16 w-auto"
            />
          </a>

          {/* Desktop CTA */}
          <div className="block">
            <Button
              asChild
              size="lg"
              className="bg-[var(--brand-teal-dark)] hover:bg-[var(--brand-teal)] text-white"
            >
              <a href="#contact">Get Involved</a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}

function HeroSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2026-11-12T00:00:00");

    const updateCountdown = () => {
      const now = new Date();
      const diff = targetDate.getTime() - now.getTime();

      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((diff % (1000 * 60)) / 1000),
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-[var(--brand-navy-dark)] via-[var(--brand-navy)] to-[var(--brand-green-dark)] text-white pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBackgroundImage})` }}
      />

      {/* Dark Overlay for Readability */}
      <div className="absolute inset-0 bg-[var(--brand-navy-dark)]/75" />

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[var(--brand-teal)] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[var(--brand-lime)] rounded-full blur-3xl" />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Eyebrow */}
          <div className="text-sm lg:text-base text-[var(--brand-lime)] font-semibold mb-4 uppercase tracking-wider">
            Louisiana Hemp Beverage Coalition
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-8 leading-tight text-white max-w-4xl">
            Louisiana built a market that works. Now it needs to be protected.
          </h1>

          {/* Body Text */}
          <p className="text-lg lg:text-xl text-white/95 mb-12 max-w-3xl leading-relaxed">
            A federal ban on hemp-derived THC beverages takes effect November
            2026. Business leaders across Louisiana's hemp, alcohol, and grocery
            sectors are working with state and federal policymakers to find a
            path forward — before a billion-dollar, well-regulated industry
            disappears by default.
          </p>

          {/* Countdown Timer */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 inline-block">
            <div className="text-sm text-white/80 mb-3 uppercase tracking-wider font-semibold">
              Time until federal ban
            </div>
            <div className="flex gap-4 lg:gap-6">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-white mb-1">
                  {String(timeLeft.days).padStart(3, "0")}
                </div>
                <div className="text-xs text-white/60 uppercase tracking-wide">
                  Days
                </div>
              </div>
              <div className="text-3xl lg:text-4xl font-bold text-white/40">
                :
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-white mb-1">
                  {String(timeLeft.hours).padStart(2, "0")}
                </div>
                <div className="text-xs text-white/60 uppercase tracking-wide">
                  Hours
                </div>
              </div>
              <div className="text-3xl lg:text-4xl font-bold text-white/40">
                :
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-white mb-1">
                  {String(timeLeft.minutes).padStart(2, "0")}
                </div>
                <div className="text-xs text-white/60 uppercase tracking-wide">
                  Min
                </div>
              </div>
              <div className="text-3xl lg:text-4xl font-bold text-white/40">
                :
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-white mb-1">
                  {String(timeLeft.seconds).padStart(2, "0")}
                </div>
                <div className="text-xs text-white/60 uppercase tracking-wide">
                  Sec
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SituationSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Label */}
          <div className="text-sm lg:text-base text-[var(--brand-teal-dark)] font-semibold mb-4 uppercase tracking-wider">
            The Situation
          </div>

          {/* Heading */}
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-8 text-[var(--neutral-900)] leading-tight">
            Louisiana built the model. Now Washington needs to get the
            regulation right.
          </h2>

          {/* Body Content */}
          <div className="space-y-6 text-lg text-[var(--neutral-700)] leading-relaxed">
            <p>
              Louisiana is one of the largest hemp beverage markets in the
              country — and one of the most regulated. Age restrictions, product
              registration, third-party testing, licensed retail. The state
              built a framework that works, and the industry grew responsibly
              within it.
            </p>

            <p>
              A provision in a 2025 federal funding bill puts that market at
              risk, with a ban on hemp-derived THC beverages taking effect{" "}
              <strong className="font-semibold text-[var(--neutral-900)]">
                November 12, 2026.
              </strong>{" "}
              The goal of this Coalition is not to fight Washington — it's to
              make sure Louisiana's experience and regulatory track record
              informs what comes next at the federal level.
            </p>

            <p className="italic text-[var(--brand-teal-dark)] font-medium">
              Smart federal policy already exists at the state level. Louisiana
              is the proof.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function PullQuoteSection() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-[var(--neutral-50)] to-[var(--neutral-100)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            {/* Image - appears above on mobile, left on desktop */}
            <div className="w-full lg:w-5/12 flex-shrink-0">
              <img
                src={groceryShelvesImage}
                alt="Hemp beverages on grocery shelves"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>

            {/* Quote - appears below on mobile, right on desktop */}
            <div className="flex-1">
              <blockquote className="relative">
                <div className="absolute -left-4 lg:-left-8 top-0 text-6xl lg:text-8xl text-[var(--brand-teal-dark)] opacity-20 font-serif">
                  "
                </div>
                <p className="text-2xl lg:text-3xl xl:text-4xl font-bold text-[var(--neutral-900)] leading-tight italic pl-8 lg:pl-12">
                  "This is not a fight against Washington. It is an opportunity to
                  show Washington what{" "}
                  <span className="text-[var(--brand-teal-dark)]">
                    responsible regulation
                  </span>{" "}
                  actually looks like — and Louisiana has already done the work."
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhoSection() {
  const sectors = [
    {
      name: "Hemp & Cannabis Industry",
      description:
        "Manufacturers, brands, distributors, and retailers operating in Louisiana's regulated hemp market.",
    },
    {
      name: "Alcohol & Beverage",
      description:
        "Distributors, retailers, and producers who understand the adult beverage market and what regulated commerce looks like.",
    },
    {
      name: "Grocery & Retail",
      description:
        "Major retailers with a direct stake in adult-use beverage categories and consumer access.",
    },
    {
      name: "Business & Political Leadership",
      description:
        "Executives and civic leaders with relationships in Baton Rouge and Washington who can apply real pressure.",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Section Label */}
          <div className="text-sm lg:text-base text-[var(--brand-teal-dark)] font-semibold mb-4 uppercase tracking-wider">
            Who We Need
          </div>

          {/* Heading */}
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-8 text-[var(--neutral-900)] leading-tight">
            Who we're bringing together
          </h2>

          {/* Body Content */}
          <div className="space-y-6 text-lg text-[var(--neutral-700)] leading-relaxed mb-12">
            <p>
              The Louisiana Hemp Beverage Coalition brings together senior
              business leaders from hemp, alcohol, grocery, and adjacent
              industries — people with the expertise, credibility, and
              relationships to engage policymakers directly and make Louisiana's
              case at the state and federal level.
            </p>

            <p>
              This is industry-led advocacy, grounded in real business
              experience and a proven regulatory track record.
            </p>
          </div>

          {/* Sector Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sectors.map((sector, index) => (
              <Card
                key={index}
                className="border-2 border-[var(--neutral-200)] hover:border-[var(--brand-teal-dark)] transition-all bg-white"
              >
                <CardContent className="p-6 lg:p-8">
                  <h3 className="font-bold text-xl text-[var(--neutral-900)] mb-3">
                    {sector.name}
                  </h3>
                  <p className="text-[var(--neutral-700)] leading-relaxed">
                    {sector.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      className="py-16 lg:py-24 bg-gradient-to-br from-[var(--brand-navy-dark)] to-[var(--brand-navy)] text-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          {/* Heading */}
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 text-white leading-tight text-center">
            Louisiana's leaders need to weigh in.
          </h2>

          {/* Body */}
          <p className="text-lg lg:text-xl text-white/90 mb-10 leading-relaxed text-center">
            If you represent a business with a stake in this fight, contact the
            Coalition. We want to hear from you.
          </p>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6 mb-8">
            <div>
              <Label htmlFor="name" className="text-white mb-2 block">
                Name
              </Label>
              <Input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                placeholder="Your name"
              />
            </div>

            <div>
              <Label htmlFor="email" className="text-white mb-2 block">
                Email
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <Label htmlFor="organization" className="text-white mb-2 block">
                Organization
              </Label>
              <Input
                id="organization"
                name="organization"
                type="text"
                required
                value={formData.organization}
                onChange={handleChange}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                placeholder="Your company or organization"
              />
            </div>

            <div>
              <Label htmlFor="message" className="text-white mb-2 block">
                Message
              </Label>
              <Textarea
                id="message"
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 min-h-[120px]"
                placeholder="Tell us about your business and interest in the Coalition"
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full bg-[var(--brand-teal-dark)] hover:bg-[var(--brand-teal)] text-white px-10 py-6 h-auto text-lg shadow-lg hover:shadow-xl transition-all"
            >
              Contact the Coalition
            </Button>
          </form>

          {/* Contact Note */}
          <div className="text-sm text-white/70 text-center">
            info@louisianahemp.org &nbsp;·&nbsp; Louisiana Hemp Beverage
            Coalition
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-white border-t border-[var(--neutral-200)] py-8 lg:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
          <div className="font-bold text-[var(--neutral-900)] text-lg">
            Louisiana Hemp Beverage Coalition
          </div>
          <div className="text-sm text-[var(--neutral-600)]">
            A 501(c)(6) trade association. Dues are not tax-deductible as
            charitable contributions.
          </div>
        </div>
      </div>
    </footer>
  );
}