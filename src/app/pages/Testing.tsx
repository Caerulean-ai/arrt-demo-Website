import { Link } from "react-router";
import { Button } from "../components/ui/button";
import {
  CheckCircle2,
  Eye,
  Hotel,
  Heart,
  Building2,
  GraduationCap,
  Building,
  ArrowRight,
} from "lucide-react";

export function Testing() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl mb-6">Now Open for Testing Partnerships</h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Join our testing program and help shape the future of local video
            behavior analysis technology.
          </p>
        </div>
      </section>

      {/* Testing Status */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4">Testing Status</h2>
          </div>

          {/* Completed Testing */}
          <div className="mb-12">
            <h3 className="text-2xl mb-6 text-green-600 flex items-center justify-center gap-2">
              <CheckCircle2 className="w-8 h-8" />
              Operational Testing Completed
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-lg border border-green-200">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Hotel className="w-6 h-6 text-green-600" />
                </div>
                <h4 className="text-xl mb-2">Small Hotels</h4>
                <p className="text-gray-600">
                  Successfully deployed and tested in hotel environments with
                  proven results.
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-lg border border-green-200">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-green-600" />
                </div>
                <h4 className="text-xl mb-2">Nursing Homes</h4>
                <p className="text-gray-600">
                  Validated safety monitoring capabilities in senior care
                  facilities.
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-lg border border-green-200">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Building2 className="w-6 h-6 text-green-600" />
                </div>
                <h4 className="text-xl mb-2">Office Buildings</h4>
                <p className="text-gray-600">
                  Proven effectiveness in corporate security applications.
                </p>
              </div>
            </div>
          </div>

          {/* New Testing Opportunities */}
          <div>
            <h3 className="text-2xl mb-6 text-blue-600 flex items-center justify-center gap-2">
              <Eye className="w-8 h-8" />
              Now Arranging Testing For
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-lg border border-blue-200">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <GraduationCap className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="text-xl mb-3">Schools</h4>
                <p className="text-gray-600 mb-4">
                  Enhance campus safety with local, privacy-focused video
                  behavior analysis. Perfect for monitoring common areas,
                  entrances, and ensuring student and staff safety.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-0.5">•</span>
                    <span>Campus safety monitoring</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-0.5">•</span>
                    <span>Unusual behavior detection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-0.5">•</span>
                    <span>Complete data privacy compliance</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-lg border border-blue-200">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Building className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="text-xl mb-3">Residential Buildings</h4>
                <p className="text-gray-600 mb-4">
                  Provide residents with reliable security while maintaining
                  complete privacy. Ideal for property managers looking to
                  improve safety without cloud-based systems.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-0.5">•</span>
                    <span>Common area security</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-0.5">•</span>
                    <span>Entry/exit monitoring</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-0.5">•</span>
                    <span>Resident privacy protection</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testing Partnership Benefits */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4">Testing Partnership Benefits</h2>
            <p className="text-xl text-gray-600">
              What you get as a testing partner
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="text-xl mb-3">Preferred Pricing</h3>
              <p className="text-gray-600">
                Testing partners receive special pricing considerations and
                early access to new features.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="text-xl mb-3">Direct Technical Support</h3>
              <p className="text-gray-600">
                Work directly with our development team for setup, training, and
                customization.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="text-xl mb-3">Customized Configuration</h3>
              <p className="text-gray-600">
                Behavior detection tailored specifically to your facility's
                unique needs and requirements.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="text-xl mb-3">Feature Input</h3>
              <p className="text-gray-600">
                Your feedback directly influences product development and future
                features.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="text-xl mb-3">Complete Data Privacy</h3>
              <p className="text-gray-600">
                All video data remains on your premises. No data is shared or
                transmitted for testing purposes.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="text-xl mb-3">No Long-Term Commitment</h3>
              <p className="text-gray-600">
                Flexible testing arrangements that work with your schedule and
                needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testing Process */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">Simple testing process</p>
          </div>

          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="text-xl mb-2">Initial Consultation</h3>
                <p className="text-gray-600">
                  We discuss your facility's needs, current infrastructure, and
                  specific use cases.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="text-xl mb-2">System Assessment</h3>
                <p className="text-gray-600">
                  We evaluate your existing camera systems and network setup for
                  compatibility.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="text-xl mb-2">Installation & Configuration</h3>
                <p className="text-gray-600">
                  Our team installs ARRT and configures it for your specific
                  requirements.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center flex-shrink-0">
                4
              </div>
              <div>
                <h3 className="text-xl mb-2">Testing Period</h3>
                <p className="text-gray-600">
                  We work together to test the system, gather feedback, and make
                  adjustments.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-green-600 text-white rounded-lg flex items-center justify-center flex-shrink-0">
                ✓
              </div>
              <div>
                <h3 className="text-xl mb-2 text-green-600">
                  Full Deployment or Feedback
                </h3>
                <p className="text-gray-600">
                  Based on testing results, decide on full deployment or provide
                  feedback for improvements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-cyan-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl mb-4">Interested in becoming a testing partner?</h2>
          <p className="text-xl mb-8 text-blue-100">
            If you are interested in testing ARRT in your business, please
            contact us to discuss the opportunity.
          </p>
          <Link to="/contact">
            <Button
              size="lg"
              variant="outline"
              className="bg-white text-blue-600 hover:bg-gray-50 border-0"
            >
              Contact Us to Get Started
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
