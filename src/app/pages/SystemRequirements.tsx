import { Link } from "react-router";
import { Button } from "../components/ui/button";
import {
  CheckCircle2,
  Server,
  MonitorPlay,
  HardDrive,
  Cloud,
  Video,
  ArrowRight,
} from "lucide-react";

export function SystemRequirements() {
  const requirements = [
    {
      icon: Video,
      title: "Supports RTSP video surveillance systems",
      description:
        "Works seamlessly with standard RTSP protocol cameras and video streams.",
    },
    {
      icon: Server,
      title: "Requires a Linux-based monitoring terminal",
      description:
        "Optimized for Linux environments for maximum stability and performance.",
    },
    {
      icon: HardDrive,
      title: "Runs entirely on a local machine",
      description:
        "All processing happens on your hardware with no external dependencies.",
    },
    {
      icon: MonitorPlay,
      title: "Supports real-time analysis of up to 64 video streams",
      description:
        "Simultaneous processing of multiple camera feeds on a single machine.",
    },
    {
      icon: Cloud,
      title: "No cloud service required",
      description:
        "Operates completely offline with no internet connection needed.",
    },
    {
      icon: CheckCircle2,
      title: "No additional hardware needed",
      description:
        "Works with your existing infrastructure and camera systems.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl mb-6">Installation Requirements</h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            ARRT is designed to work with your existing system. Simple
            requirements, powerful results.
          </p>
        </div>
      </section>

      {/* Requirements List */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4">What You Need</h2>
            <p className="text-xl text-gray-600">
              Minimal requirements for maximum compatibility
            </p>
          </div>

          <div className="space-y-6">
            {requirements.map((requirement, index) => (
              <div
                key={index}
                className="flex items-start gap-6 p-8 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all bg-white"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <requirement.icon className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl mb-2">{requirement.title}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {requirement.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4">Technical Specifications</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="text-2xl mb-6 text-blue-600">
                Hardware Requirements
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Recommended</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>
                        Modern multi-core processor (Intel/AMD x86-64)
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Minimum 16GB RAM (32GB+ recommended)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>
                        SSD storage for optimal performance
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Dedicated GPU for processing acceleration (optional)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="text-2xl mb-6 text-blue-600">
                Software Requirements
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Operating System</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Linux-based OS (Ubuntu, CentOS, or similar)</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-6">
                  <h4 className="font-semibold mb-2">Camera Compatibility</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>RTSP-compatible IP cameras</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Standard H.264/H.265 video encoding</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Network Requirements */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4">Network Setup</h2>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-lg border border-blue-200">
            <h3 className="text-2xl mb-6">Simple Local Network Configuration</h3>
            <div className="space-y-4 text-gray-700">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="mb-2">
                    <strong>Local Network Only:</strong> ARRT operates on your
                    local network. Cameras and the ARRT machine must be on the
                    same network or have network access to each other.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="mb-2">
                    <strong>No Internet Required:</strong> The system can
                    operate completely offline. Internet is not needed for core
                    functionality.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="mb-2">
                    <strong>Database Integration:</strong> Works with your
                    existing database systems for storing analysis results and
                    event logs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scalability */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4">Scalability</h2>
            <p className="text-xl text-gray-600">
              Designed to grow with your needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-lg border border-gray-200 text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">1-16</div>
              <h3 className="text-lg mb-2">Small Deployment</h3>
              <p className="text-gray-600">
                Ideal for small businesses with limited camera coverage
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-lg border border-blue-200 text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">17-32</div>
              <h3 className="text-lg mb-2">Medium Deployment</h3>
              <p className="text-gray-600">
                Perfect for most small to medium-sized businesses
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200 text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">33-64</div>
              <h3 className="text-lg mb-2">Large Deployment</h3>
              <p className="text-gray-600">
                Maximum capacity on a single ARRT machine
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600">
              Need more than 64 streams? Deploy multiple ARRT instances for
              larger facilities.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl mb-4">Ready to deploy ARRT?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Contact us to discuss your specific requirements and get a
            customized deployment plan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/product">
              <Button size="lg" variant="outline" className="border-gray-300">
                View Features
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Contact Us
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
