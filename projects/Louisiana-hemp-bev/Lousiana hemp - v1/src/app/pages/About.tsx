import { Link } from "react-router";
import { Users, Target, Shield, Scale, Building2, ArrowRight } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";

export function About() {
  return (
    <div>
      <HeroSection />
      <MissionSection />
      <TimelineSection />
      <LeadershipSection />
      <PartnersSection />
      <CTASection />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-[var(--brand-navy-dark)] to-[var(--brand-navy)] text-white py-20 lg:py-32">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--brand-teal)] rounded-full blur-3xl" />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white">
            About the Coalition
          </h1>
          <p className="text-lg lg:text-xl text-white/90 leading-relaxed">
            The Louisiana Hemp Beverage Coalition is an industry-led association
            representing businesses across hemp, alcohol, and retail sectors —
            working together to advocate for smart, evidence-based policy at the
            state and federal level.
          </p>
        </div>
      </div>
    </section>
  );
}

function MissionSection() {
  const values = [
    {
      icon: Target,
      title: "Evidence-Based Policy",
      description:
        "We advocate for regulations grounded in science, data, and Louisiana's proven regulatory track record.",
    },
    {
      icon: Shield,
      title: "Consumer Protection",
      description:
        "We support age restrictions, product testing, and licensed retail to ensure public safety.",
    },
    {
      icon: Scale,
      title: "Regulatory Clarity",
      description:
        "We work toward clear, consistent rules that businesses can follow and regulators can enforce.",
    },
    {
      icon: Users,
      title: "Industry Unity",
      description:
        "We bring together diverse stakeholders to speak with one credible, unified voice.",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-[var(--neutral-900)]">
            Our Mission & Values
          </h2>
          <p className="text-lg text-[var(--neutral-600)] leading-relaxed">
            The Louisiana Hemp Beverage Coalition advocates for responsible
            regulation of hemp-derived beverages. Our mission is to ensure
            Louisiana's regulatory model—built on testing, age restrictions, and
            licensed retail—informs federal policy and protects our state's
            well-regulated industry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <Card
                key={index}
                className="border-2 border-[var(--neutral-200)] hover:border-[var(--brand-teal-dark)] transition-all"
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-[var(--brand-teal-dark)]/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-[var(--brand-teal-dark)]" />
                  </div>
                  <CardTitle className="text-[var(--neutral-900)]">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[var(--neutral-600)]">{value.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function TimelineSection() {
  const milestones = [
    {
      year: "2019",
      title: "Louisiana Hemp Industry Begins",
      description:
        "Louisiana legalizes hemp production, establishing the framework for a regulated market.",
    },
    {
      year: "2022-2023",
      title: "Regulatory Framework Established",
      description:
        "State implements age restrictions, product testing requirements, and licensed retail system.",
    },
    {
      year: "2025",
      title: "Federal Ban Announcement",
      description:
        "Federal funding bill includes provision banning hemp-derived THC beverages effective November 2026.",
    },
    {
      year: "2026",
      title: "Coalition Launches",
      description:
        "Louisiana business leaders unite to advocate for smart federal regulation and protect the state's industry.",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-[var(--neutral-50)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-[var(--neutral-900)]">
              Our Timeline
            </h2>
            <p className="text-lg text-[var(--neutral-600)]">
              How Louisiana built a regulated hemp market — and why we're
              fighting to protect it
            </p>
          </div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-[var(--brand-teal-dark)] text-white rounded-full flex items-center justify-center">
                    <span className="font-bold">{milestone.year}</span>
                  </div>
                </div>
                <div className="flex-1 pb-8 border-l-2 border-[var(--neutral-200)] pl-6 -ml-10 relative">
                  <div className="absolute left-0 top-8 w-2 h-2 bg-[var(--brand-teal-dark)] rounded-full -translate-x-[5px]" />
                  <h3 className="text-xl font-bold mb-2 text-[var(--neutral-900)]">
                    {milestone.title}
                  </h3>
                  <p className="text-[var(--neutral-600)]">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function LeadershipSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-[var(--neutral-900)]">
              Coalition Leadership
            </h2>
            <p className="text-lg text-[var(--neutral-600)]">
              Led by experienced business and policy leaders from across
              Louisiana's hemp, alcohol, and retail sectors
            </p>
          </div>

          <Card className="border-2 border-[var(--neutral-200)]">
            <CardContent className="p-8 lg:p-12">
              <div className="text-center">
                <Building2 className="w-16 h-16 text-[var(--brand-teal-dark)] mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4 text-[var(--neutral-900)]">
                  Industry-Led Governance
                </h3>
                <p className="text-lg text-[var(--neutral-600)] mb-6 max-w-2xl mx-auto">
                  The Coalition is governed by a board of directors representing
                  member businesses across all sectors. Board members bring
                  decades of experience in regulated commerce, government
                  relations, and Louisiana business leadership.
                </p>
                <p className="text-[var(--neutral-600)] mb-8">
                  For information about board membership or coalition leadership,
                  please contact us directly.
                </p>
                <Button
                  asChild
                  className="bg-[var(--brand-teal-dark)] hover:bg-[var(--brand-teal)] text-white"
                >
                  <Link to="/contact">
                    Contact Leadership <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

function PartnersSection() {
  return (
    <section className="py-16 lg:py-24 bg-[var(--neutral-50)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-[var(--neutral-900)]">
              Coalition Members
            </h2>
            <p className="text-lg text-[var(--neutral-600)]">
              We represent businesses across Louisiana's hemp, alcohol, and
              retail industries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Hemp Manufacturers & Brands",
                count: "20+",
                color: "var(--brand-green-dark)",
              },
              {
                title: "Alcohol Distributors",
                count: "15+",
                color: "var(--brand-teal-dark)",
              },
              {
                title: "Retail Partners",
                count: "30+",
                color: "var(--brand-navy-dark)",
              },
            ].map((stat, index) => (
              <Card
                key={index}
                className="text-center border-2 border-[var(--neutral-200)]"
              >
                <CardContent className="p-8">
                  <div
                    className="text-5xl font-bold mb-2"
                    style={{ color: stat.color }}
                  >
                    {stat.count}
                  </div>
                  <p className="text-[var(--neutral-600)] font-medium">
                    {stat.title}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-[var(--neutral-600)] mb-6">
              Member businesses range from small Louisiana-based operators to
              major national retailers with Louisiana operations.
            </p>
            <Button asChild variant="outline" size="lg">
              <Link to="/get-involved">
                Join Our Coalition <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-[var(--brand-navy-dark)] to-[var(--brand-navy)] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white">
            Join the Fight for Smart Regulation
          </h2>
          <p className="text-lg text-white/90 mb-8">
            If you represent a Louisiana business with a stake in the hemp
            beverage industry, we want to work with you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-[var(--brand-teal-dark)] hover:bg-[var(--brand-teal)] text-white px-8"
            >
              <Link to="/get-involved">Become a Member</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-[var(--brand-navy-dark)]"
            >
              <Link to="/policy">View Our Policy Platform</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
