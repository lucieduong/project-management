import { useState } from "react";
import { Link } from "react-router";
import { Mail, MapPin, Send, CheckCircle2 } from "lucide-react";
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

export function Contact() {
  return (
    <div>
      <HeroSection />
      <ContactFormSection />
      <InfoSection />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-[var(--brand-teal-dark)] to-[var(--brand-teal)] text-white py-20 lg:py-32">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--brand-lime)] rounded-full blur-3xl" />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white">
            Contact Us
          </h1>
          <p className="text-lg lg:text-xl text-white/90 leading-relaxed">
            Questions about the coalition, membership, or advocacy? We're here to
            help.
          </p>
        </div>
      </div>
    </section>
  );
}

function ContactFormSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Contact form submitted:", formData);
    alert("Thank you for your message! We'll be in touch soon.");
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
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-[var(--neutral-900)]">
                Send Us a Message
              </h2>
              <Card className="border-2 border-[var(--neutral-200)]">
                <CardContent className="p-6 lg:p-8">
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <Label htmlFor="name" className="text-[var(--neutral-900)]">
                        Name <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="mt-1"
                      />
                    </div>

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
                        Provide a phone number only if you prefer a phone call
                      </p>
                    </div>

                    <div>
                      <Label
                        htmlFor="subject"
                        className="text-[var(--neutral-900)]"
                      >
                        Subject <span className="text-red-500">*</span>
                      </Label>
                      <Select
                        required
                        onValueChange={(value) =>
                          setFormData({ ...formData, subject: value })
                        }
                      >
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select a subject" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="membership">
                            Membership Inquiry
                          </SelectItem>
                          <SelectItem value="media">Media Request</SelectItem>
                          <SelectItem value="partnership">
                            Partnership Opportunity
                          </SelectItem>
                          <SelectItem value="advocacy">
                            Advocacy Question
                          </SelectItem>
                          <SelectItem value="general">
                            General Question
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label
                        htmlFor="message"
                        className="text-[var(--neutral-900)]"
                      >
                        Message <span className="text-red-500">*</span>
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="mt-1"
                        placeholder="Tell us how we can help..."
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-[var(--brand-teal-dark)] hover:bg-[var(--brand-teal)] text-white h-12"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </Button>

                    <p className="text-xs text-[var(--neutral-500)] text-center">
                      We typically respond within 1-2 business days
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info & FAQ */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-[var(--neutral-900)]">
                  Contact Information
                </h2>

                <Card className="border-2 border-[var(--neutral-200)] mb-6">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[var(--brand-teal-dark)]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-[var(--brand-teal-dark)]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg text-[var(--neutral-900)] mb-1">
                          Email
                        </h3>
                        <a
                          href="mailto:info@louisianahempbeveragecoalition.com"
                          className="text-[var(--brand-teal-dark)] hover:underline"
                        >
                          info@louisianahempbeveragecoalition.com
                        </a>
                        <p className="text-sm text-[var(--neutral-600)] mt-1">
                          For general inquiries and membership questions
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[var(--brand-green-dark)]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-[var(--brand-green-dark)]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg text-[var(--neutral-900)] mb-1">
                          Coverage Area
                        </h3>
                        <p className="text-[var(--neutral-600)]">
                          Statewide across Louisiana
                        </p>
                        <p className="text-sm text-[var(--neutral-600)] mt-1">
                          We represent businesses and advocate for policy
                          throughout the state
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-[var(--neutral-50)] border-2 border-[var(--neutral-200)]">
                  <CardHeader>
                    <CardTitle className="text-xl text-[var(--neutral-900)]">
                      Quick Questions?
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-[var(--neutral-900)] mb-1">
                        Who can join the coalition?
                      </h4>
                      <p className="text-sm text-[var(--neutral-600)]">
                        Membership is open to Louisiana businesses with a stake
                        in hemp beverage policy.{" "}
                        <Link
                          to="/get-involved"
                          className="text-[var(--brand-teal-dark)] hover:underline"
                        >
                          Learn more
                        </Link>
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[var(--neutral-900)] mb-1">
                        Are there membership fees?
                      </h4>
                      <p className="text-sm text-[var(--neutral-600)]">
                        Contact us for information about membership structure and
                        dues.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[var(--neutral-900)] mb-1">
                        How can I help as an individual?
                      </h4>
                      <p className="text-sm text-[var(--neutral-600)]">
                        While membership is business-focused, individuals can
                        contact their representatives and share our resources.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoSection() {
  return (
    <section className="py-16 lg:py-24 bg-[var(--neutral-50)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-[var(--brand-navy-dark)] to-[var(--brand-navy)] text-white border-0">
            <CardContent className="p-8 lg:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-4 text-white">
                    Ready to Join?
                  </h2>
                  <p className="text-white/90 mb-6">
                    If you represent a Louisiana hemp business, we want to work
                    with you. Apply for coalition membership and add your voice to
                    our advocacy.
                  </p>
                  <Button
                    asChild
                    size="lg"
                    className="bg-[var(--brand-teal-dark)] hover:bg-[var(--brand-teal)] text-white"
                  >
                    <Link to="/get-involved">Apply for Membership</Link>
                  </Button>
                </div>
                <div className="space-y-4">
                  {[
                    "Join Louisiana's unified business voice",
                    "Access exclusive advocacy resources",
                    "Connect with industry leaders",
                    "Shape policy priorities",
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle2 className="w-6 h-6 text-[var(--brand-lime)] flex-shrink-0" />
                      <span className="text-white/90">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
