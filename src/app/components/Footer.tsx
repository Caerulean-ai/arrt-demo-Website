import { Link } from "react-router";

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-4">
              ARRT
            </div>
            <p className="text-sm text-gray-600">
              Real-Time Video Behavior Analysis Software
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/product" className="text-gray-600 hover:text-gray-900">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/security" className="text-gray-600 hover:text-gray-900">
                  Security
                </Link>
              </li>
              <li>
                <Link to="/system-requirements" className="text-gray-600 hover:text-gray-900">
                  System Requirements
                </Link>
              </li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/solutions" className="text-gray-600 hover:text-gray-900">
                  All Solutions
                </Link>
              </li>
              <li>
                <Link to="/testing" className="text-gray-600 hover:text-gray-900">
                  Testing Program
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-gray-900">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-sm text-gray-600 text-center">
          <p>© {new Date().getFullYear()} ARRT. All rights reserved. Made in Canada.</p>
        </div>
      </div>
    </footer>
  );
}
