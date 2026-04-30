import { Link } from "react-router";
import { Button } from "../components/ui/button";
import {
  Hotel,
  Heart,
  Building2,
  GraduationCap,
  Building,
  CheckCircle2,
  Eye,
  ArrowRight,
} from "lucide-react";

export function Solutions() {
  const solutions = [
    {
      icon: Hotel,
      title: "Small Hotels",
      description: "Detect unusual behavior and improve guest safety.",
      status: "Operational Testing Completed",
      isActive: true,
      benefits: [
        "Monitor guest safety in common areas",
        "Detect suspicious behavior patterns",
        "Improve emergency response times",
        "Protect staff and property",
      ],
    },
    {
      icon: Heart,
      title: "Nursing Homes",
      description: "Monitor safety conditions and reduce operational risks.",
      status: "Operational Testing Completed",
      isActive: true,
      benefits: [
        "Monitor resident safety 24/7",
        "Detect falls and emergencies",
        "Ensure proper care delivery",
        "Reduce liability and risk",
      ],
    },
    {
      icon: Building2,
      title: "Office Buildings",
      description: "Improve security with real-time behavior detection.",
      status: "Operational Testing Completed",
      isActive: true,
      benefits: [
        "Secure entry and exit points",
        "Monitor unauthorized access",
        "Improve workplace safety",
        "Track security incidents",
      ],
    },
    {
      icon: GraduationCap,
      title: "Schools",
      description: "Enhance safety monitoring with local data processing.",
      status: "Testing Phase",
      isActive: false,
      benefits: [
        "Monitor campus safety",
        "Detect unusual behavior patterns",
        "Protect students and staff",
        "Maintain complete data privacy",
      ],
    },
    {
      icon: Building,
      title: "Residential Buildings",
      description:
        "Provide reliable and private security solutions for property managers.",
      status: "Testing Phase",
      isActive: false,
      benefits: [
        "Secure common areas",
        "Monitor building entrances",
        "Protect resident privacy",
        "Reduce security costs",
      ],
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl mb-6">Designed for Small Businesses</h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            ARRT focuses on practical solutions rather than complicated AI
            systems. Our software is tailored for businesses that need reliable
            video monitoring without the complexity of enterprise platforms.
          </p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4">Solutions by Industry</h2>
            <p className="text-xl text-gray-600">
              Proven results across multiple sectors
            </p>
          </div>

          <div className="space-y-6">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className={`p-8 rounded-lg border transition-all ${
                  solution.isActive
                    ? "bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200 hover:shadow-lg"
                    : "bg-white border-gray-200 hover:border-gray-300"
                }`}
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div
                      className={`w-16 h-16 rounded-lg flex items-center justify-center ${
                        solution.isActive
                          ? "bg-gradient-to-br from-blue-100 to-cyan-100"
                          : "bg-gray-100"
                      }`}
                    >
                      <solution.icon
                        className={`w-8 h-8 ${
                          solution.isActive ? "text-blue-600" : "text-gray-400"
                        }`}
                      />
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div>
                        <h3 className="text-2xl mb-2">{solution.title}</h3>
                        <p className="text-gray-600 mb-3">
                          {solution.description}
                        </p>
                        <div className="flex items-center gap-2">
                          {solution.isActive ? (
                            <>
                              <CheckCircle2 className="w-5 h-5 text-green-600" />
                              <span className="text-sm font-medium text-green-600">
                                {solution.status}
                              </span>
                            </>
                          ) : (
                            <>
                              <Eye className="w-5 h-5 text-gray-400" />
                              <span className="text-sm font-medium text-gray-600">
                                {solution.status}
                              </span>
                            </>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-3 mt-4">
                      {solution.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <span
                            className={`${
                              solution.isActive
                                ? "text-blue-600"
                                : "text-gray-400"
                            } mt-0.5`}
                          >
                            •
                          </span>
                          <span className="text-sm text-gray-600">
                            {benefit}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose ARRT */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4">Why Small Businesses Choose ARRT</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="text-xl mb-3">Simple Deployment</h3>
              <p className="text-gray-600">
                No complicated setup or extensive training required. Works with
                your existing camera systems.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="text-xl mb-3">Predictable Costs</h3>
              <p className="text-gray-600">
                One-time installation with no recurring cloud fees. Perfect for
                budget-conscious businesses.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="text-xl mb-3">Complete Privacy</h3>
              <p className="text-gray-600">
                All processing happens locally. Your data never leaves your
                premises, ensuring complete privacy.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="text-xl mb-3">Real Results</h3>
              <p className="text-gray-600">
                Proven effectiveness in hotels, nursing homes, and office
                buildings with operational testing completed.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="text-xl mb-3">Local Support</h3>
              <p className="text-gray-600">
                Developed and supported by a Canadian team that understands your
                needs and compliance requirements.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <h3 className="text-xl mb-3">Customizable</h3>
              <p className="text-gray-600">
                Tailor behavior detection to your specific business needs and
                operational requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testing Program CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl mb-4">Interested in testing ARRT?</h2>
          <p className="text-xl text-gray-600 mb-8">
            We're currently arranging testing partnerships for schools and
            residential buildings.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/testing">
              <Button size="lg" variant="outline" className="border-gray-300">
                Testing Program
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
