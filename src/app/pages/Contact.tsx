import { Mail, Phone, MapPin, MessageSquare } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";

export function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    alert("Thank you for your interest! We'll be in touch soon.");
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl mb-6">Contact Us</h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            For sales inquiries, testing requests, and installation support,
            please contact us.
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl mb-6">Get in Touch</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    required
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    required
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="(555) 123-4567"
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="company">Company / Organization</Label>
                  <Input
                    id="company"
                    type="text"
                    placeholder="Your company name"
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="industry">Industry</Label>
                  <select
                    id="industry"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select your industry</option>
                    <option value="hotel">Small Hotel</option>
                    <option value="nursing">Nursing Home</option>
                    <option value="office">Office Building</option>
                    <option value="school">School</option>
                    <option value="residential">Residential Building</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="inquiry">Inquiry Type *</Label>
                  <select
                    id="inquiry"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select inquiry type</option>
                    <option value="sales">Sales Inquiry</option>
                    <option value="testing">Testing Partnership</option>
                    <option value="support">Installation Support</option>
                    <option value="general">General Question</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your needs..."
                    rows={6}
                    required
                    className="mt-1"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-blue-600 hover:bg-blue-700"
                >
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl mb-6">How We Can Help</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Whether you're interested in learning more about ARRT, becoming
                a testing partner, or need installation support, we're here to
                help.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg mb-1">Sales Inquiries</h3>
                    <p className="text-gray-600">
                      Learn about pricing, features, and how ARRT can work for
                      your business.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-cyan-600" />
                  </div>
                  <div>
                    <h3 className="text-lg mb-1">Testing Partnerships</h3>
                    <p className="text-gray-600">
                      Join our testing program for schools and residential
                      buildings.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg mb-1">Installation Support</h3>
                    <p className="text-gray-600">
                      Get help with deployment, configuration, and technical
                      questions.
                    </p>
                  </div>
                </div>
              </div>

              {/* Additional Info */}
              <div className="mt-12 p-8 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg border border-blue-200">
                <h3 className="text-xl mb-4">Made in Canada</h3>
                <div className="flex items-start gap-3 text-gray-700">
                  <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                  <p>
                    ARRT is developed and maintained by a local Canadian
                    programming team. We provide reliable support and secure
                    customization for businesses across North America.
                  </p>
                </div>
              </div>

              {/* Response Time */}
              <div className="mt-6 p-6 bg-white rounded-lg border border-gray-200">
                <h3 className="text-lg mb-2">Response Time</h3>
                <p className="text-gray-600">
                  We typically respond to inquiries within 1-2 business days.
                  For urgent matters, please indicate this in your message.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4">Common Questions</h2>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="text-xl mb-3">
                How long does installation take?
              </h3>
              <p className="text-gray-600">
                Installation typically takes 1-3 days depending on the number of
                cameras and complexity of your setup. We work with your schedule
                to minimize disruption.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="text-xl mb-3">Do you offer training?</h3>
              <p className="text-gray-600">
                Yes, we provide comprehensive training for your team as part of
                the installation process. We ensure your staff is comfortable
                using and maintaining the system.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="text-xl mb-3">
                What kind of ongoing support do you provide?
              </h3>
              <p className="text-gray-600">
                We offer technical support, system updates, and customization
                services. Our Canadian-based team is available to help with any
                questions or issues that arise.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="text-xl mb-3">
                Can ARRT work with my existing cameras?
              </h3>
              <p className="text-gray-600">
                ARRT works with any RTSP-compatible IP cameras. If you're
                unsure about compatibility, contact us and we'll assess your
                current setup.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
