import { Link } from "react-router";
import { Button } from "../components/ui/button";
import heroVideo from "../../assets/video.mp4";
import {
  Shield,
  Zap,
  HardDrive,
  Eye,
  ArrowRight,
  Server,
  Lock,
  CheckCircle2,
} from "lucide-react";

export function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-cyan-50 -z-10" />
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm mb-6">MAX Security · Real Time Monitoring · Instant Response Options</div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent font-bold">
              ARRT
            </span>
          </h1>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-6 text-gray-900">
            Real-Time Video Behavior Analysis Software
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Designed for small businesses that need reliable video monitoring
            without complicated systems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Get Started
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Link to="/product">
              <Button
                size="lg"
                variant="outline"
                className="border-gray-300 hover:bg-gray-50"
              >
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl mb-4">See ARRT in Action</h2>
            <p className="text-gray-600">Watch how our real-time video analysis works</p>
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-2xl border border-gray-200">
            <video
              className="w-full block bg-black"
              src={heroVideo}
              autoPlay
              muted
              controls
              preload="metadata"
              playsInline
            />
            <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none" />
          </div>
        </div>
      </section>

      {/* Short Description */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xl text-gray-700 leading-relaxed">
            ARRT is a real-time video data analysis software that detects human
            behavior and responds instantly. The system runs entirely on the
            client's local machine and uses existing cameras and databases.{" "}
            <span className="font-semibold text-blue-600">
              No cloud connection is required.
            </span>
          </p>
        </div>
      </section>

      {/* Key Advantages */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4">Key Advantages</h2>
            <p className="text-xl text-gray-600">
              Built for security, performance, and simplicity
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* 100% Local Operation */}
            <div className="bg-white p-8 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Lock className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl mb-3">100% Local Operation</h3>
              <p className="text-gray-600">
                All programs run on the customer's local computer. No video
                data is uploaded to the cloud.
              </p>
            </div>

            {/* Works With Existing Hardware */}
            <div className="bg-white p-8 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors">
              <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                <HardDrive className="w-6 h-6 text-cyan-600" />
              </div>
              <h3 className="text-xl mb-3">Works With Majority of Protocols in the Market</h3>
              <p className="text-gray-600">
                ARRT works with your current surveillance cameras and database
                systems.
              </p>
            </div>

            {/* Simple Architecture */}
            <div className="bg-white p-8 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Server className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl mb-3">Reliable System Architecture</h3>
              <p className="text-gray-600">
                The software is designed to be stable, fast, and easy to
                deploy.
              </p>
            </div>

            {/* Real-Time Response */}
            <div className="bg-white p-8 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors">
              <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-cyan-600" />
              </div>
              <h3 className="text-xl mb-3">Real-Time Response</h3>
              <p className="text-gray-600">
                Supports real-time analysis of up to 64 video data streams.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Designed For */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4">Designed For</h2>
            <p className="text-xl text-gray-600">
              Practical solutions for small and medium-sized businesses
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex items-start gap-3 p-6 rounded-lg bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100">
              <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-lg mb-1">Small Hotels</h3>
                <p className="text-sm text-gray-600">
                  Operational testing completed
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-6 rounded-lg bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100">
              <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-lg mb-1">Nursing Homes</h3>
                <p className="text-sm text-gray-600">
                  Operational testing completed
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-6 rounded-lg bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100">
              <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-lg mb-1">Office Buildings</h3>
                <p className="text-sm text-gray-600">
                  Operational testing completed
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-6 rounded-lg bg-gray-50 border border-gray-200">
              <Eye className="w-6 h-6 text-gray-400 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-lg mb-1">Schools</h3>
                <p className="text-sm text-gray-600">Testing Phase</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-6 rounded-lg bg-gray-50 border border-gray-200">
              <Eye className="w-6 h-6 text-gray-400 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-lg mb-1">Residential Buildings</h3>
                <p className="text-sm text-gray-600">Testing Phase</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/solutions">
              <Button
                variant="outline"
                size="lg"
                className="border-gray-300"
              >
                View All Solutions
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-cyan-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl mb-4">Ready to get started?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Contact us to learn more about ARRT or arrange a testing
            partnership.
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
