import { useState } from "react";
import { Link } from "react-router";
import {
  CheckCircle2,
  Users,
  FileText,
  Target,
  Megaphone,
  ArrowRight,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";

export function GetInvolved() {
  return (
    <div>
      <HeroSection />
      <BenefitsSection />
      <WhoShouldJoinSection />
      <ApplicationSection />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-[var(--brand-green-dark)] to-[var(--brand-teal-dark)] text-white py-20 lg:py-32">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--brand-lime)] rounded-full blur-3xl" />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white">
            Join the Coalition
          </h1>
          <p className="text-lg lg:text-xl text-white/90 leading-relaxed mb-8">
            Become part of Louisiana's unified voice for smart hemp beverage
            policy. Membership is open to businesses with a stake in the
            industry's future.
          </p>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-2 border-white text-white hover:bg-white hover:text-[var(--brand-teal-dark)] h-14 px-8"
          >
            <a href="#application">
              Apply Now <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

function BenefitsSection() {
  const benefits = [
    {
      icon: Megaphone,
      title: "Direct Policy Advocacy",
      description:
        "Participate in coalition meetings with state and federal lawmakers. Your voice will be heard where it matters.",
    },
    {
      icon: FileText,
      title: "Research & Resources",
      description:
        "Access policy briefs, regulatory updates, and industry analysis to stay ahead of the curve.",
    },
    {
      icon: Users,
      title: "Industry Networking",
      description:
        "Connect with business leaders across hemp, alcohol, and retail sectors throughout Louisiana.",
    },
    {
      icon: Target,
      title: "Strategic Influence",
      description:
        "Help shape coalition priorities and policy positions that will guide our advocacy efforts.",
    },
    {
      icon: CheckCircle2,
      title: "Coalition Credibility",
      description:
        "Stand with a unified industry voice that carries weight with policymakers and the media.",
    },
    {
      icon: FileText,
      title: "Priority Updates",
      description:
        "Receive real-time alerts on legislative developments, regulatory changes, and advocacy opportunities.",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-[var(--neutral-900)]">
              Membership Benefits
            </h2>
            <p className="text-lg text-[var(--neutral-600)]">
              Coalition members gain access to advocacy, resources, and a network
              of industry leaders
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card
                  key={index}
                  className="border-2 border-[var(--neutral-200)] hover:border-[var(--brand-teal-dark)] hover:shadow-lg transition-all"
                >
                  <CardHeader>
                    <div className="w-12 h-12 bg-[var(--brand-teal-dark)]/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-[var(--brand-teal-dark)]" />
                    </div>
                    <CardTitle className="text-lg text-[var(--neutral-900)]">
                      {benefit.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-[var(--neutral-600)]">
                      {benefit.description}
                    </p>
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

function WhoShouldJoinSection() {
  const sectors = [
    {
      title: "Hemp Manufacturers & Brands",
      description:
        "Companies producing, packaging, or distributing hemp-derived beverages in Louisiana.",
      examples: [
        "Beverage manufacturers",
        "Product formulators",
        "Brand owners",
        "Wholesale distributors",
      ],
    },
    {
      title: "Alcohol Industry",
      description:
        "Businesses with expertise in regulated adult beverage distribution and retail.",
      examples: [
        "Alcohol distributors",
        "Licensed beverage wholesalers",
        "Bar & restaurant owners",
        "Beverage industry consultants",
      ],
    },
    {
      title: "Retail & Grocery",
      description:
        "Retailers selling hemp beverages or other adult-use products to Louisiana consumers.",
      examples: [
        "Grocery chains",
        "Convenience stores",
        "Specialty retailers",
        "E-commerce platforms",
      ],
    },
    {
      title: "Business & Civic Leadership",
      description:
        "Executive and civic leaders with relationships in government and business.",
      examples: [
        "Business association executives",
        "Former elected officials",
        "Government relations professionals",
        "Economic development leaders",
      ],
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-[var(--neutral-50)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-[var(--neutral-900)]">
              Who Should Join
            </h2>
            <p className="text-lg text-[var(--neutral-600)]">
              Membership is open to Louisiana businesses and leaders with a stake
              in hemp beverage policy
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {sectors.map((sector, index) => (
              <Card key={index} className="border-2 border-[var(--neutral-200)]">
                <CardHeader>
                  <CardTitle className="text-xl text-[var(--neutral-900)]">
                    {sector.title}
                  </CardTitle>
                  <p className="text-[var(--neutral-600)]">{sector.description}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm font-semibold text-[var(--neutral-700)] mb-2">
                    Examples:
                  </p>
                  <ul className="space-y-1">
                    {sector.examples.map((example, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 text-sm text-[var(--neutral-600)]"
                      >
                        <div className="w-1.5 h-1.5 bg-[var(--brand-teal-dark)] rounded-full" />
                        {example}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mt-8 bg-[var(--brand-navy-dark)] text-white border-0">
            <CardContent className="p-8 text-center">
              <h3 className="text-xl font-bold mb-3">Not Sure If You Qualify?</h3>
              <p className="text-white/90 mb-4">
                If your business operates in Louisiana and has a stake in hemp
                beverage policy, we want to hear from you.
              </p>
              <Button
                asChild
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-[var(--brand-navy-dark)]"
              >
                <Link to="/contact">Contact Us</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

function ApplicationSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    title: "",
    businessType: "",
    location: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted:", formData);
    alert(
      "Thank you for your interest! We'll review your application and be in touch soon."
    );
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
    <section className="py-16 lg:py-24 bg-white" id="application">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-[var(--neutral-900)]">
              Membership Application
            </h2>
            <p className="text-lg text-[var(--neutral-600)]">
              Complete the form below to apply for coalition membership. We'll be
              in touch within 48 hours.
            </p>
          </div>

          <Card className="border-2 border-[var(--neutral-200)]">
            <CardContent className="p-8 lg:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName" className="text-[var(--neutral-900)]">
                      First Name <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-[var(--neutral-900)]">
                      Last Name <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="mt-1"
                    />
                  </div>
                </div>

                {/* Contact Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email" className="text-[var(--neutral-900)]">
                      Email <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-[var(--neutral-900)]">
                      Phone{" "}
                      <span className="text-sm font-normal text-[var(--neutral-500)]">
                        (Optional)
                      </span>
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="mt-1"
                    />
                    <p className="text-xs text-[var(--neutral-500)] mt-1">
                      Only for time-sensitive coordination
                    </p>
                  </div>
                </div>

                {/* Company Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="company" className="text-[var(--neutral-900)]">
                      Company Name <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="title" className="text-[var(--neutral-900)]">
                      Job Title <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="title"
                      name="title"
                      value={formData.title}
                      onChange={handleChange}
                      required
                      className="mt-1"
                    />
                  </div>
                </div>

                {/* Business Type */}
                <div>
                  <Label htmlFor="businessType" className="text-[var(--neutral-900)]">
                    Business Type <span className="text-red-500">*</span>
                  </Label>
                  <Select
                    required
                    onValueChange={(value) =>
                      setFormData({ ...formData, businessType: value })
                    }
                  >
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select your business type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="hemp-manufacturer">
                        Hemp Manufacturer/Brand
                      </SelectItem>
                      <SelectItem value="hemp-distributor">
                        Hemp Distributor
                      </SelectItem>
                      <SelectItem value="alcohol-distributor">
                        Alcohol Distributor
                      </SelectItem>
                      <SelectItem value="retail-grocery">
                        Retail/Grocery
                      </SelectItem>
                      <SelectItem value="hospitality">
                        Bar/Restaurant/Hospitality
                      </SelectItem>
                      <SelectItem value="business-leadership">
                        Business/Civic Leadership
                      </SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Location */}
                <div>
                  <Label htmlFor="location" className="text-[var(--neutral-900)]">
                    Louisiana Location(s) <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    required
                    className="mt-1"
                    placeholder="City/Parish or 'Statewide'"
                  />
                </div>

                {/* Message */}
                <div>
                  <Label htmlFor="message" className="text-[var(--neutral-900)]">
                    Why do you want to join the coalition?{" "}
                    <span className="text-red-500">*</span>
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="mt-1"
                    placeholder="Tell us about your interest in coalition membership and how you'd like to contribute to our advocacy efforts..."
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-[var(--brand-teal-dark)] hover:bg-[var(--brand-teal)] text-white h-12"
                  >
                    Submit Application
                  </Button>
                  <p className="text-sm text-[var(--neutral-500)] mt-4 text-center">
                    By submitting this form, you agree to be contacted by the
                    Louisiana Hemp Beverage Coalition regarding membership.
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Trust Signal */}
          <div className="mt-8 text-center">
            <p className="text-sm text-[var(--neutral-600)]">
              Your information will be kept confidential and used only for
              coalition membership purposes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
