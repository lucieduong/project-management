import { Link } from "react-router";
import {
  Scale,
  Shield,
  Target,
  FileText,
  Download,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  Users,
  Building2,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";

export function Policy() {
  return (
    <div>
      <HeroSection />
      <KeyIssuesSection />
      <PositionsSection />
      <LouisianaModelSection />
      <EngagementSection />
      <DownloadsSection />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-[var(--brand-navy-dark)] to-[var(--brand-navy)] text-white py-20 lg:py-32">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[var(--brand-teal)] rounded-full blur-3xl" />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white">
            Policy & Advocacy
          </h1>
          <p className="text-lg lg:text-xl text-white/90 leading-relaxed">
            Our advocacy work centers on a simple principle: Louisiana built a
            hemp beverage market that works. Federal policy should build on that
            success, not eliminate it.
          </p>
        </div>
      </div>
    </section>
  );
}

function KeyIssuesSection() {
  const issues = [
    {
      icon: AlertCircle,
      title: "The Federal Ban",
      description:
        "A provision in a 2025 federal funding bill bans hemp-derived THC beverages effective November 12, 2026. This ban threatens Louisiana's regulated market and hundreds of jobs.",
      status: "Critical",
      statusColor: "red",
    },
    {
      icon: Shield,
      title: "Louisiana's Regulatory Success",
      description:
        "Louisiana has one of the most regulated hemp markets in the country—age restrictions, mandatory testing, licensed retail. The state model works and should inform federal policy.",
      status: "Strength",
      statusColor: "green",
    },
    {
      icon: Target,
      title: "Need for Federal Clarity",
      description:
        "The industry needs clear, consistent federal regulations that allow states like Louisiana to maintain responsible, well-regulated markets.",
      status: "Priority",
      statusColor: "blue",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-[var(--neutral-900)]">
              Key Policy Issues
            </h2>
            <p className="text-lg text-[var(--neutral-600)]">
              Understanding the landscape and the stakes
            </p>
          </div>

          <div className="space-y-6">
            {issues.map((issue, index) => {
              const Icon = issue.icon;
              const statusColors = {
                red: {
                  bg: "bg-red-100",
                  text: "text-red-700",
                  border: "border-red-300",
                },
                green: {
                  bg: "bg-green-100",
                  text: "text-green-700",
                  border: "border-green-300",
                },
                blue: {
                  bg: "bg-blue-100",
                  text: "text-blue-700",
                  border: "border-blue-300",
                },
              };

              const colors = statusColors[issue.statusColor as keyof typeof statusColors];

              return (
                <Card
                  key={index}
                  className={`border-l-4 ${colors.border.replace('border-', 'border-l-')}`}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-start gap-4 flex-1">
                        <div className={`w-12 h-12 ${colors.bg} rounded-lg flex items-center justify-center flex-shrink-0`}>
                          <Icon className={`w-6 h-6 ${colors.text}`} />
                        </div>
                        <div>
                          <CardTitle className="text-xl text-[var(--neutral-900)] mb-2">
                            {issue.title}
                          </CardTitle>
                          <p className="text-[var(--neutral-600)]">
                            {issue.description}
                          </p>
                        </div>
                      </div>
                      <span
                        className={`px-3 py-1 ${colors.bg} ${colors.text} text-xs font-semibold rounded-full flex-shrink-0`}
                      >
                        {issue.status}
                      </span>
                    </div>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function PositionsSection() {
  const positions = [
    {
      title: "Support Science-Based Regulation",
      description:
        "Federal hemp beverage policy should be grounded in research, data, and the real-world outcomes of state regulatory frameworks like Louisiana's.",
      points: [
        "Mandatory third-party testing for potency and contaminants",
        "Clear labeling requirements for consumer transparency",
        "Evidence-based dosage and serving size standards",
      ],
    },
    {
      title: "Preserve State Regulatory Authority",
      description:
        "States like Louisiana have invested in building responsible regulatory systems. Federal policy should establish a baseline while allowing states to maintain stricter standards.",
      points: [
        "Federal framework with state flexibility",
        "Recognition of existing state licensing systems",
        "Support for states with proven regulatory track records",
      ],
    },
    {
      title: "Require Age Restrictions & Licensed Retail",
      description:
        "Hemp beverages should be sold only through licensed retailers with age verification, just like alcohol.",
      points: [
        "21+ age requirement for purchase",
        "Licensed retail-only distribution",
        "Point-of-sale verification systems",
      ],
    },
    {
      title: "Protect Responsible Businesses",
      description:
        "Companies operating within Louisiana's regulatory framework should have a path forward under federal law.",
      points: [
        "Transition period for compliant businesses",
        "Recognition of state-licensed operators",
        "Clear compliance pathways for the industry",
      ],
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-[var(--neutral-50)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-[var(--neutral-900)]">
              Coalition Positions
            </h2>
            <p className="text-lg text-[var(--neutral-600)]">
              Our policy priorities and advocacy positions
            </p>
          </div>

          <div className="space-y-6">
            {positions.map((position, index) => (
              <Card key={index} className="border-2 border-[var(--neutral-200)]">
                <CardHeader>
                  <CardTitle className="text-xl text-[var(--neutral-900)] flex items-start gap-3">
                    <Scale className="w-6 h-6 text-[var(--brand-teal-dark)] flex-shrink-0 mt-1" />
                    {position.title}
                  </CardTitle>
                  <p className="text-[var(--neutral-600)] pl-9">
                    {position.description}
                  </p>
                </CardHeader>
                <CardContent className="pl-9">
                  <ul className="space-y-2">
                    {position.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-[var(--brand-green-dark)] flex-shrink-0 mt-0.5" />
                        <span className="text-[var(--neutral-600)]">{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function LouisianaModelSection() {
  const regulations = [
    {
      title: "Mandatory Product Testing",
      description: "Third-party lab verification for potency and contaminants",
    },
    {
      title: "Age Restrictions",
      description: "21+ requirement enforced at point of sale",
    },
    {
      title: "Licensed Retail",
      description: "Only licensed retailers can sell hemp beverages",
    },
    {
      title: "Product Registration",
      description: "All products must be registered with the state",
    },
    {
      title: "Labeling Standards",
      description: "Clear labeling requirements for consumer safety",
    },
    {
      title: "Dosage Limits",
      description: "Maximum THC content per serving and per container",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-[var(--brand-green-dark)] to-[var(--brand-teal-dark)] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white">
              The Louisiana Model
            </h2>
            <p className="text-lg text-white/90">
              Louisiana's regulatory framework demonstrates that hemp beverages
              can be sold responsibly and safely
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {regulations.map((regulation, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6"
              >
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle2 className="w-5 h-5 text-[var(--brand-lime)]" />
                  <h3 className="font-bold text-white">{regulation.title}</h3>
                </div>
                <p className="text-sm text-white/80">{regulation.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-8 text-center">
            <p className="text-lg text-white mb-6">
              "Louisiana didn't ask federal lawmakers to fight Washington — we're
              asking them to learn from what already works. This is the regulatory
              blueprint."
            </p>
            <Button
              asChild
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-[var(--brand-teal-dark)]"
            >
              <Link to="/resources">
                Read Policy Briefs <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function EngagementSection() {
  const actions = [
    {
      icon: Users,
      title: "Join the Coalition",
      description:
        "Add your voice to Louisiana's unified business advocacy effort.",
      cta: "Become a Member",
      link: "/get-involved",
    },
    {
      icon: Building2,
      title: "Contact Your Representatives",
      description:
        "Reach out to your state and federal lawmakers to share Louisiana's story.",
      cta: "Get Talking Points",
      link: "/resources",
    },
    {
      icon: FileText,
      title: "Share Our Resources",
      description:
        "Use coalition materials to educate stakeholders and policymakers.",
      cta: "Download Materials",
      link: "#downloads",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-[var(--neutral-900)]">
              How to Engage Policymakers
            </h2>
            <p className="text-lg text-[var(--neutral-600)]">
              Ways you can support smart hemp beverage policy
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {actions.map((action, index) => {
              const Icon = action.icon;
              return (
                <Card
                  key={index}
                  className="border-2 border-[var(--neutral-200)] hover:border-[var(--brand-teal-dark)] hover:shadow-lg transition-all text-center"
                >
                  <CardHeader>
                    <div className="w-16 h-16 bg-[var(--brand-teal-dark)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-[var(--brand-teal-dark)]" />
                    </div>
                    <CardTitle className="text-xl text-[var(--neutral-900)]">
                      {action.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-[var(--neutral-600)] mb-6">
                      {action.description}
                    </p>
                    <Button
                      asChild
                      variant="outline"
                      className="w-full border-[var(--brand-teal-dark)] text-[var(--brand-teal-dark)] hover:bg-[var(--brand-teal-dark)] hover:text-white"
                    >
                      <Link to={action.link}>{action.cta}</Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function DownloadsSection() {
  const downloads = [
    {
      title: "Coalition Position Statement",
      description: "Official policy positions on federal hemp beverage regulation",
      type: "PDF",
      size: "2.4 MB",
    },
    {
      title: "Louisiana Regulatory Overview",
      description: "Comprehensive guide to Louisiana's hemp beverage framework",
      type: "PDF",
      size: "1.8 MB",
    },
    {
      title: "Federal Ban Timeline & Analysis",
      description: "Timeline and business impact of the November 2026 ban",
      type: "PDF",
      size: "1.2 MB",
    },
    {
      title: "Talking Points for Lawmakers",
      description: "Key messages for engaging state and federal representatives",
      type: "PDF",
      size: "800 KB",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-[var(--neutral-50)]" id="downloads">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-[var(--neutral-900)]">
              Downloadable Policy Briefs
            </h2>
            <p className="text-lg text-[var(--neutral-600)]">
              Resources to support your advocacy and education efforts
            </p>
          </div>

          <div className="space-y-4">
            {downloads.map((download, index) => (
              <Card
                key={index}
                className="border-2 border-[var(--neutral-200)] hover:border-[var(--brand-teal-dark)] hover:shadow-md transition-all"
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-start gap-4 flex-1">
                      <div className="w-12 h-12 bg-[var(--brand-teal-dark)]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <FileText className="w-6 h-6 text-[var(--brand-teal-dark)]" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg text-[var(--neutral-900)] mb-1">
                          {download.title}
                        </h3>
                        <p className="text-sm text-[var(--neutral-600)] mb-2">
                          {download.description}
                        </p>
                        <div className="flex items-center gap-3 text-xs text-[var(--neutral-500)]">
                          <span className="px-2 py-1 bg-[var(--neutral-100)] rounded">
                            {download.type}
                          </span>
                          <span>{download.size}</span>
                        </div>
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-[var(--brand-teal-dark)] text-[var(--brand-teal-dark)] hover:bg-[var(--brand-teal-dark)] hover:text-white flex-shrink-0"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-[var(--neutral-600)]">
              Members have access to additional research and advocacy materials.{" "}
              <Link
                to="/get-involved"
                className="text-[var(--brand-teal-dark)] hover:underline font-semibold"
              >
                Join the coalition
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
