import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-900 py-8 mt-16">
      <div className="container mx-auto px-4 sm:px-8 lg:px-16">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-6 md:space-y-0">
          {/* Blog Title / Logo */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Shezan Blogs</h2>
            <p className="mt-2 text-gray-900">Your go-to platform for insightful blogs!</p>
          </div>

          {/* Navigation Links */}
          <div className="flex space-x-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="hover:text-blue-500 transition">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-blue-500 transition">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/blogs" className="hover:text-blue-500 transition">
                    Blogs
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-blue-500 transition">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Connect With Us</h3>
              <ul className="flex space-x-4">
                <li>
                  <a
                    href="https://github.com/shezanusman08"
                    target="_blank"
                    className="hover:text-gray-700 transition"
                    aria-label="github"
                  >
                    <FaGithub size={20} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/muhammad-shezan/"
                    target="_blank"
                    className="hover:text-blue-500 transition"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedinIn size={20} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Horizontal Line */}
        <div className="border-t border-gray-700 mt-8"></div>

        {/* Copyright Section */}
        <div className="text-center mt-4 text-sm">
          <p>&copy; {new Date().getFullYear()} Shezan Blogs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
