import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#f5f5f5] rounded-md text-gray-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2">
          {/* Brand/Logo */}
            {/* <img src="/logo.svg" alt="Logo" className="h-10 w-10" /> */}
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
      </div>
    </footer>
  );
};

export default Footer;