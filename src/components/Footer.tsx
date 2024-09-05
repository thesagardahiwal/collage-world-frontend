import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 rounded-md text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Brand/Logo */}
          <div className="flex items-center space-x-2">
            <img src="/logo.svg" alt="Logo" className="h-10 w-10" />
            <span className="text-xl font-semibold">Collage World</span>
          </div>

          {/* Navigation Links */}
          <div className="mt-6 md:mt-0 flex space-x-6">
            <Link href="/" className="hover:underline">Home</Link>
            <Link href="/about" className="hover:underline">About</Link>
            <Link href="/" className="hover:underline">Contact</Link>
            <Link href="/" className="hover:underline">Privacy Policy</Link>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-between items-center">
          {/* Copyright */}
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} MyApp. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="mt-4 md:mt-0 flex space-x-4">
            <a href="#" className="hover:text-gray-300">
              <img src="/icons/facebook.svg" alt="Facebook" className="h-5 w-5" />
            </a>
            <a href="#" className="hover:text-gray-300">
              <img src="/icons/twitter.svg" alt="Twitter" className="h-5 w-5" />
            </a>
            <a href="#" className="hover:text-gray-300">
              <img src="/icons/linkedin.svg" alt="LinkedIn" className="h-5 w-5" />
            </a>
            <a href="#" className="hover:text-gray-300">
              <img src="/icons/github.svg" alt="GitHub" className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;