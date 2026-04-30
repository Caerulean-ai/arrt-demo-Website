import { Link } from "react-router";
import { Button } from "../components/ui/button";
import {
  Shield,
  Lock,
  Server,
  HardDrive,
  MapPin,
  Users,
  ArrowRight,
} from "lucide-react";

export function Security() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Shield className="w-10 h-10 text-blue-600" />
          </div>
          <h1 className="text-5xl mb-6">
            Maximum Data Security – Fully Local System
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Data security is the core design principle of ARRT.
          </p>
        </div>
      </section>

      {/* Core Security Principles */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-blue-600 to-cyan-600 text-white p-12 rounded-2xl mb-16">
            <h2 className="text-3xl mb-6 text-center">Our Security Promise</h2>
            <p className="text-xl text-center leading-relaxed text-blue-50 max-w-3xl mx-auto">
              All software programs run locally on the client's machine. Video
              data is never uploaded to the cloud and never leaves the
              customer's physical environment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Local Processing */}
            <div className="p-8 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <HardDrive className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-2xl mb-3">100% Local Processing</h3>
              <p className="text-gray-600 leading-relaxed">
                Every component of ARRT runs on your hardware. From video
                capture to behavior analysis, everything stays within your
                infrastructure.
              </p>
            </div>

            {/* No Cloud Connection */}
            <div className="p-8 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors">
              <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                <Lock className="w-6 h-6 text-cyan-600" />
              </div>
              <h3 className="text-2xl mb-3">No Cloud Connection</h3>
              <p className="text-gray-600 leading-relaxed">
                ARRT operates completely offline. No data transmission to
                external servers means zero exposure to cloud-based security
                risks.
              </p>
            </div>

            {/* Physical Isolation */}
            <div className="p-8 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Server className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-2xl mb-3">Physical Isolation</h3>
              <p className="text-gray-600 leading-relaxed">
                The system is physically isolated, which makes it ideal for
                businesses that require strong data protection and compliance
                with privacy regulations.
              </p>
            </div>

            {/* Canadian Development */}
            <div className="p-8 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors">
              <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-cyan-600" />
              </div>
              <h3 className="text-2xl mb-3">Canadian Development Team</h3>
              <p className="text-gray-600 leading-relaxed">
                ARRT is developed and maintained by a local Canadian programming
                team, ensuring reliability and secure customization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Security Benefits */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4">Why Local Processing Matters</h2>
            <p className="text-xl text-gray-600">
              Complete control over your sensitive data
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl mb-3">No Data Breaches</h3>
              <p className="text-gray-600">
                Your video data never travels over the internet, eliminating the
                risk of interception or unauthorized access.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lock className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl mb-3">Privacy Compliance</h3>
              <p className="text-gray-600">
                Meet strict privacy regulations by keeping all data within your
                own controlled environment.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl mb-3">Customer Trust</h3>
              <p className="text-gray-600">
                Demonstrate your commitment to privacy and security with a
                system that respects data boundaries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Data Flow Diagram */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4">How ARRT Protects Your Data</h2>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-12 rounded-2xl border border-gray-200">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center flex-shrink-0">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="text-lg mb-1">Video Capture</h3>
                  <p className="text-gray-600">
                    Cameras send RTSP streams to your local ARRT machine
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center flex-shrink-0">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="text-lg mb-1">Local Processing</h3>
                  <p className="text-gray-600">
                    ARRT analyzes behavior patterns on your hardware
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center flex-shrink-0">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="text-lg mb-1">Local Storage</h3>
                  <p className="text-gray-600">
                    Results saved to your existing database system
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-600 text-white rounded-lg flex items-center justify-center flex-shrink-0">
                  ✓
                </div>
                <div className="flex-1">
                  <h3 className="text-lg mb-1 text-green-600">
                    Complete Data Sovereignty
                  </h3>
                  <p className="text-gray-600">
                    All data remains within your physical premises
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-cyan-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl mb-4">
            Ready to secure your video surveillance?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Contact us to learn more about ARRT's security features and local
            processing capabilities.
          </p>
          <Link to="/contact">
            <Button
              size="lg"
              variant="outline"
              className="bg-white text-blue-600 hover:bg-gray-50 border-0"
            >
              Contact Us
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
