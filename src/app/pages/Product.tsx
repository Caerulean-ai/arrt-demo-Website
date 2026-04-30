import { Link } from "react-router";
import { Button } from "../components/ui/button";
import {
  Eye,
  Settings,
  Zap,
  Brain,
  Cloud,
  Monitor,
  Video,
  ArrowRight,
} from "lucide-react";

export function Product() {
  const features = [
    {
      icon: Eye,
      title: "Real-Time Human Behavior Detection",
      description:
        "Advanced algorithms detect and analyze human behavior patterns as they happen.",
    },
    {
      icon: Settings,
      title: "Custom Behavior Monitoring Based on Client Needs",
      description:
        "Tailored monitoring configurations designed specifically for your business requirements.",
    },
    {
      icon: Zap,
      title: "Instant Response System",
      description:
        "Automated alerts and responses triggered immediately when specific behaviors are detected.",
    },
    {
      icon: Brain,
      title: "Local Machine Learning Training",
      description:
        "Train and refine detection models directly on your own hardware without external dependencies.",
    },
    {
      icon: Cloud,
      title: "No Cloud Required",
      description:
        "Complete independence from cloud services ensures data sovereignty and eliminates recurring cloud costs.",
    },
    {
      icon: Monitor,
      title: "Compatible With Existing Surveillance Systems",
      description:
        "Seamlessly integrates with your current RTSP-compatible camera infrastructure.",
    },
    {
      icon: Video,
      title: "Supports Up To 64 Video Streams",
      description:
        "Process and analyze up to 64 simultaneous video feeds in real-time on a single machine.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl mb-6">
            ARRT Real-Time Video Behavior Analysis System
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            ARRT is a lightweight real-time video behavior analysis software
            designed for small and medium-sized businesses. The system analyzes
            surveillance video data streams and detects human behavior patterns
            in real time.
          </p>
          <p className="text-xl text-gray-700 leading-relaxed">
            Unlike traditional AI surveillance platforms, ARRT does not rely on
            cloud computing.{" "}
            <span className="font-semibold text-blue-600">
              All processing is completed locally, ensuring fast performance and
              maximum data security.
            </span>
          </p>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4">Core Features</h2>
            <p className="text-xl text-gray-600">
              Everything you need for intelligent video analysis
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-8 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Highlights */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4">Why ARRT?</h2>
            <p className="text-xl text-gray-600">
              Built different for better performance
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="text-2xl mb-4 text-blue-600">
                Traditional Cloud-Based Systems
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">✕</span>
                  <span>Ongoing cloud subscription costs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">✕</span>
                  <span>Video data sent to external servers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">✕</span>
                  <span>Internet dependency</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">✕</span>
                  <span>Latency in processing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">✕</span>
                  <span>Privacy and compliance concerns</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-lg border border-blue-200">
              <h3 className="text-2xl mb-4 text-blue-600">ARRT</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>One-time installation, no recurring fees</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>All data stays on your local machine</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>Works offline, no internet needed</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>Instant real-time processing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  <span>Complete data sovereignty</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl mb-4">See ARRT in action</h2>
          <p className="text-xl text-gray-600 mb-8">
            Learn more about our system requirements or get in touch to discuss
            your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/system-requirements">
              <Button size="lg" variant="outline" className="border-gray-300">
                System Requirements
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
