import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-white py-12 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className=" flex items-center gap-2 mb-2">
              <div className="text-white p-2 rounded-lg">
                <Image
                  src="/grass/grass-logo-gif.gif"
                  alt="Grass Venture Logo"
                  width={60}
                  height={60}
                  className="w-48 h-24"
                />
              </div>
            </div>
            <p className="text-gray-400">
              Your trusted partner for property investments in Madhya Pradesh.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/" className="hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/properties" className="hover:text-white">
                  Properties
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Property Types</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link
                  href="/properties/agricultural"
                  className="hover:text-white"
                >
                  Agricultural Land
                </Link>
              </li>
              <li>
                <Link
                  href="/properties/commercial"
                  className="hover:text-white"
                >
                  Commercial Plots
                </Link>
              </li>
              <li>
                <Link
                  href="properties/residential"
                  className="hover:text-white"
                >
                  Residential Land
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-400">
              <p className="flex items-center gap-2">
                <Phone size={16} />
                <Link href="tel:+91 97547 31939">+91 97547 31939</Link>
              </p>
              <p className="flex items-center gap-2">
                <Mail size={16} />
                <a href="mailto:grassventure@gmail.com">
                  grassventure@gmail.com
                </a>
              </p>
              <p className="flex items-center gap-2">
                <MapPin size={16} />
                Indore, Madhya Pradesh
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Grass Venture. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
