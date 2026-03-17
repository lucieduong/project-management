import { useState, useEffect } from "react";
import { Link } from "react-router";
import {
  ArrowRight,
  Users,
  Scale,
  FileText,
  Calendar,
  Building2,
  ShoppingCart,
  Briefcase,
  TrendingUp,
  Shield,
  Target,
  CheckCircle2,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Home() {
  return (
    <div>
      <HeroSection />
      <MissionSection />
      <WhyItMattersSection />
      <MemberSectorsSection />
      <PolicyPrioritiesSection />
      <HowToJoinSection />
      <ResourcesSection />
      <EventsSection />
      <NewsletterSection />
      <ContactSection />
    </div>
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
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-[var(--brand-navy-dark)] via-[var(--brand-navy)] to-[var(--brand-green-dark)] text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[var(--brand-teal)] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[var(--brand-lime)] rounded-full blur-3xl" />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="max-w-5xl mx-auto">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
            <div className="w-2 h-2 bg-[var(--brand-lime)] rounded-full animate-pulse" />
            <span className="text-sm font-medium tracking-wide">Louisiana Hemp Beverage Association</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight text-white">
            Protecting Louisiana's
            <br />
            <span className="text-[var(--brand-lime)]">Regulated Hemp Market</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg lg:text-xl text-white/90 mb-8 max-w-3xl leading-relaxed">
            Louisiana built a regulated hemp beverage market that works. Now
            business leaders across hemp, alcohol, and grocery sectors are
            working with policymakers to ensure smart federal regulation
            protects our industry.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button
              asChild
              size="lg"
              className="bg-[var(--brand-teal-dark)] hover:bg-[var(--brand-teal)] text-white px-8 h-14"
            >
              <Link to="/get-involved">
                Join the Coalition <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-[var(--brand-navy-dark)] h-14"
            >
              <Link to="/policy">Our Policy Priorities</Link>
            </Button>
          </div>

          {/* Countdown Timer */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-6 lg:p-8">
            <p className="text-sm font-semibold text-[var(--brand-lime)] mb-4 tracking-wide uppercase">
              Time Until Federal Ban Takes Effect
            </p>
            <div className="grid grid-cols-4 gap-4">
              {[
                { label: "Days", value: timeLeft.days },
                { label: "Hours", value: timeLeft.hours },
                { label: "Minutes", value: timeLeft.minutes },
                { label: "Seconds", value: timeLeft.seconds },
              ].map((item) => (
                <div key={item.label} className="text-center">
                  <div className="text-3xl lg:text-5xl font-bold text-white mb-1">
                    {String(item.value).padStart(2, "0")}
                  </div>
                  <div className="text-xs lg:text-sm text-white/60 uppercase tracking-wider">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
            <p className="text-sm text-white/70 mt-4 text-center">
              November 12, 2026 — Federal hemp-derived THC beverage ban
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function MissionSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 text-[var(--neutral-900)]">
            Our Mission
          </h2>
          <p className="text-lg lg:text-xl text-[var(--neutral-600)] leading-relaxed mb-8">
            The Louisiana Hemp Beverage Coalition advocates for evidence-based,
            responsible regulation of hemp-derived beverages at the state and
            federal level. We represent the full spectrum of Louisiana hemp
            business — from manufacturers to retailers — working to ensure
            policymakers understand Louisiana's regulatory success story.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--brand-teal-dark)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Scale className="w-8 h-8 text-[var(--brand-teal-dark)]" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-[var(--neutral-900)]">
                Advocate for Smart Policy
              </h3>
              <p className="text-[var(--neutral-600)]">
                Work with state and federal lawmakers to shape responsible
                regulation
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--brand-green-dark)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-[var(--brand-green-dark)]" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-[var(--neutral-900)]">
                Protect the Industry
              </h3>
              <p className="text-[var(--neutral-600)]">
                Defend Louisiana's regulated market and responsible business
                practices
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--brand-navy-dark)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-[var(--brand-navy-dark)]" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-[var(--neutral-900)]">
                Unite Business Leaders
              </h3>
              <p className="text-[var(--neutral-600)]">
                Bring together hemp, alcohol, and retail sectors with one voice
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyItMattersSection() {
  return (
    <section className="py-16 lg:py-24 bg-[var(--neutral-50)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 text-[var(--neutral-900)]">
              Why This Matters
            </h2>
            <p className="text-lg text-[var(--neutral-600)] max-w-3xl mx-auto">
              Louisiana's hemp beverage market represents jobs, tax revenue, and
              responsible commerce across multiple sectors
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="border-l-4 border-l-[var(--brand-green-dark)]">
              <CardHeader>
                <div className="w-12 h-12 bg-[var(--brand-green-dark)]/10 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-[var(--brand-green-dark)]" />
                </div>
                <CardTitle className="text-[var(--neutral-900)]">Hemp Sector</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[var(--neutral-600)] mb-4">
                  Louisiana is one of the largest hemp beverage markets in the
                  country, supporting manufacturers, distributors, and retailers
                  statewide.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[var(--brand-green-dark)] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-[var(--neutral-600)]">
                      Regulated product testing & quality standards
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[var(--brand-green-dark)] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-[var(--neutral-600)]">
                      Licensed retail and age-restricted sales
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[var(--brand-green-dark)] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-[var(--neutral-600)]">
                      Third-party lab verification requirements
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-[var(--brand-teal-dark)]">
              <CardHeader>
                <div className="w-12 h-12 bg-[var(--brand-teal-dark)]/10 rounded-lg flex items-center justify-center mb-4">
                  <Building2 className="w-6 h-6 text-[var(--brand-teal-dark)]" />
                </div>
                <CardTitle className="text-[var(--neutral-900)]">Alcohol & Beverage</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[var(--neutral-600)] mb-4">
                  Distributors and retailers understand regulated adult beverage
                  markets — and hemp beverages fit into that proven framework.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[var(--brand-teal-dark)] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-[var(--neutral-600)]">
                      Established distribution networks
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[var(--brand-teal-dark)] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-[var(--neutral-600)]">
                      Expertise in age-verification & compliance
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[var(--brand-teal-dark)] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-[var(--neutral-600)]">
                      Long-standing regulatory relationships
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-[var(--brand-navy-dark)]">
              <CardHeader>
                <div className="w-12 h-12 bg-[var(--brand-navy-dark)]/10 rounded-lg flex items-center justify-center mb-4">
                  <ShoppingCart className="w-6 h-6 text-[var(--brand-navy-dark)]" />
                </div>
                <CardTitle className="text-[var(--neutral-900)]">Grocery & Retail</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[var(--neutral-600)] mb-4">
                  Major retailers have a direct stake in adult-use beverage
                  categories and maintaining legal, regulated product access.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[var(--brand-navy-dark)] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-[var(--neutral-600)]">
                      Consumer demand for legal alternatives
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[var(--brand-navy-dark)] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-[var(--neutral-600)]">
                      Point-of-sale compliance systems in place
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[var(--brand-navy-dark)] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-[var(--neutral-600)]">
                      Economic impact across communities
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

function MemberSectorsSection() {
  const sectors = [
    {
      icon: Building2,
      title: "Hemp & Cannabis Industry",
      description:
        "Manufacturers, brands, distributors, and retailers operating in Louisiana's regulated hemp market.",
      color: "var(--brand-green-dark)",
    },
    {
      icon: ShoppingCart,
      title: "Alcohol & Beverage",
      description:
        "Distributors, retailers, and producers who understand the adult beverage market and regulated commerce.",
      color: "var(--brand-teal-dark)",
    },
    {
      icon: Users,
      title: "Grocery & Retail",
      description:
        "Major retailers with a direct stake in adult-use beverage categories and consumer access.",
      color: "var(--brand-navy-dark)",
    },
    {
      icon: Briefcase,
      title: "Business & Political Leadership",
      description:
        "Executives and civic leaders with relationships in Baton Rouge and Washington who can apply real pressure.",
      color: "var(--brand-lime)",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-white" id="member-sectors">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 text-[var(--neutral-900)]">
            Member Sectors
          </h2>
          <p className="text-lg text-[var(--neutral-600)] max-w-3xl mx-auto">
            We bring together senior business leaders from across industries
            with the expertise and relationships to engage policymakers directly
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {sectors.map((sector, index) => {
            const Icon = sector.icon;
            return (
              <div
                key={index}
                className="p-6 lg:p-8 border-2 border-[var(--neutral-200)] rounded-lg hover:border-[var(--brand-teal-dark)] hover:shadow-lg transition-all duration-300 group"
              >
                <div
                  className="w-14 h-14 rounded-lg flex items-center justify-center mb-4 transition-colors"
                  style={{
                    backgroundColor: `${sector.color}15`,
                  }}
                >
                  <Icon
                    className="w-7 h-7"
                    style={{ color: sector.color }}
                  />
                </div>
                <h3 className="text-xl font-bold mb-3 text-[var(--neutral-900)] group-hover:text-[var(--brand-teal-dark)] transition-colors">
                  {sector.title}
                </h3>
                <p className="text-[var(--neutral-600)]">
                  {sector.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function PolicyPrioritiesSection() {
  const priorities = [
    {
      icon: Shield,
      title: "Federal Regulatory Framework",
      description:
        "Work with federal lawmakers to establish clear, science-based regulations for hemp-derived beverages.",
    },
    {
      icon: Target,
      title: "Louisiana Model Recognition",
      description:
        "Ensure Louisiana's proven regulatory framework informs federal policy development.",
    },
    {
      icon: Scale,
      title: "Industry Standards",
      description:
        "Advocate for mandatory testing, age restrictions, and licensed retail requirements.",
    },
  ];

  return (
    <section
      className="py-16 lg:py-24 bg-gradient-to-br from-[var(--brand-navy-dark)] to-[var(--brand-navy)] text-white"
      id="policy-priorities"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 text-white">
              Policy Priorities
            </h2>
            <p className="text-lg text-white/90 max-w-3xl mx-auto">
              Our advocacy focuses on three core areas to protect Louisiana's
              regulated hemp beverage industry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {priorities.map((priority, index) => {
              const Icon = priority.icon;
              return (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 hover:bg-white/15 transition-all"
                >
                  <div className="w-12 h-12 bg-[var(--brand-lime)] rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-[var(--brand-navy-dark)]" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">
                    {priority.title}
                  </h3>
                  <p className="text-white/80">{priority.description}</p>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-[var(--brand-navy-dark)] h-12"
            >
              <Link to="/policy">
                View Full Policy Platform <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function HowToJoinSection() {
  return (
    <section className="py-16 lg:py-24 bg-[var(--neutral-50)]" id="how-to-join">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 text-[var(--neutral-900)]">
              How to Join
            </h2>
            <p className="text-lg text-[var(--neutral-600)]">
              Membership is open to Louisiana businesses with a stake in the
              hemp beverage industry
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 lg:p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-[var(--brand-teal-dark)] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  1
                </div>
                <h3 className="font-semibold text-lg mb-2 text-[var(--neutral-900)]">
                  Review Benefits
                </h3>
                <p className="text-sm text-[var(--neutral-600)]">
                  Learn about member benefits and coalition priorities
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[var(--brand-teal-dark)] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  2
                </div>
                <h3 className="font-semibold text-lg mb-2 text-[var(--neutral-900)]">
                  Submit Application
                </h3>
                <p className="text-sm text-[var(--neutral-600)]">
                  Complete our simple membership application
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[var(--brand-teal-dark)] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  3
                </div>
                <h3 className="font-semibold text-lg mb-2 text-[var(--neutral-900)]">
                  Get Involved
                </h3>
                <p className="text-sm text-[var(--neutral-600)]">
                  Participate in advocacy and shape policy
                </p>
              </div>
            </div>

            <div className="text-center">
              <Button
                asChild
                size="lg"
                className="bg-[var(--brand-teal-dark)] hover:bg-[var(--brand-teal)] text-white px-8 h-12"
              >
                <Link to="/get-involved">
                  Apply for Membership <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ResourcesSection() {
  const resources = [
    {
      title: "Louisiana's Regulatory Framework",
      description:
        "Overview of Louisiana's hemp beverage regulations and testing requirements.",
      category: "Policy Brief",
      date: "March 2026",
    },
    {
      title: "Federal Ban Timeline & Implications",
      description:
        "Analysis of the November 2026 federal ban and its impact on Louisiana businesses.",
      category: "Analysis",
      date: "February 2026",
    },
    {
      title: "Coalition Position Statement",
      description:
        "Official coalition statement on federal hemp beverage regulation.",
      category: "Press Release",
      date: "January 2026",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-white" id="resources">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-2 text-[var(--neutral-900)]">
                Featured Resources
              </h2>
              <p className="text-lg text-[var(--neutral-600)]">
                Recent publications and policy briefs
              </p>
            </div>
            <Button asChild variant="outline">
              <Link to="/resources">View All Resources</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {resources.map((resource, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-semibold px-2 py-1 bg-[var(--brand-teal-dark)]/10 text-[var(--brand-teal-dark)] rounded">
                      {resource.category}
                    </span>
                    <span className="text-xs text-[var(--neutral-500)]">
                      {resource.date}
                    </span>
                  </div>
                  <CardTitle className="text-lg text-[var(--neutral-900)]">
                    {resource.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-[var(--neutral-600)] mb-4">
                    {resource.description}
                  </p>
                  <Button variant="link" className="p-0 h-auto text-[var(--brand-teal-dark)]">
                    Read More <ArrowRight className="ml-1 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function EventsSection() {
  const events = [
    {
      title: "Coalition Strategy Meeting",
      date: "March 25, 2026",
      time: "2:00 PM - 4:00 PM CST",
      location: "Virtual",
      type: "Members Only",
    },
    {
      title: "Federal Advocacy Day",
      date: "April 15, 2026",
      time: "All Day",
      location: "Washington, D.C.",
      type: "In-Person",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-[var(--neutral-50)]" id="events">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-2 text-[var(--neutral-900)]">
              Upcoming Events
            </h2>
            <p className="text-lg text-[var(--neutral-600)]">
              Join us for coalition meetings and advocacy activities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {events.map((event, index) => (
              <Card key={index} className="border-l-4 border-l-[var(--brand-teal-dark)]">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-semibold px-2 py-1 bg-[var(--brand-navy-dark)]/10 text-[var(--brand-navy-dark)] rounded">
                      {event.type}
                    </span>
                  </div>
                  <CardTitle className="text-xl text-[var(--neutral-900)]">
                    {event.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-[var(--neutral-600)]">
                      <Calendar className="w-4 h-4" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-[var(--neutral-600)]">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-[var(--neutral-600)]">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>{event.location}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function NewsletterSection() {
  return (
    <section className="py-16 lg:py-24 bg-[var(--brand-green-dark)] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white">
            Stay Informed
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Receive coalition updates, policy news, and advocacy alerts directly
            to your inbox
          </p>

          <form className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-1 h-12 bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:bg-white/15"
              required
            />
            <Button
              type="submit"
              size="lg"
              className="bg-[var(--brand-navy-dark)] hover:bg-[var(--brand-navy)] text-white h-12 px-8"
            >
              Subscribe
            </Button>
          </form>

          <p className="text-sm text-white/70 mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section className="py-16 lg:py-24 bg-white" id="contact">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 text-[var(--neutral-900)]">
              Get in Touch
            </h2>
            <p className="text-lg text-[var(--neutral-600)]">
              Questions about the coalition or membership? We're here to help.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-[var(--neutral-900)]">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-[var(--brand-teal-dark)]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[var(--brand-teal-dark)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-[var(--neutral-900)] mb-1">Email</p>
                    <a
                      href="mailto:info@louisianahempbeveragecoalition.com"
                      className="text-[var(--brand-teal-dark)] hover:underline"
                    >
                      info@louisianahempbeveragecoalition.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-[var(--brand-green-dark)]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[var(--brand-green-dark)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-[var(--neutral-900)] mb-1">Coverage Area</p>
                    <p className="text-[var(--neutral-600)]">
                      Statewide across Louisiana
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-[var(--neutral-200)]">
                  <Button
                    asChild
                    className="w-full bg-[var(--brand-teal-dark)] hover:bg-[var(--brand-teal)] text-white"
                  >
                    <Link to="/contact">
                      Send Us a Message <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="bg-gradient-to-br from-[var(--brand-navy-dark)] to-[var(--brand-navy)] rounded-lg p-8 text-white flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Join?</h3>
              <p className="text-white/90 mb-6">
                If you represent a Louisiana business with a stake in the hemp
                beverage industry, we want to hear from you.
              </p>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-[var(--brand-navy-dark)] w-full"
              >
                <Link to="/get-involved">Apply for Membership</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
