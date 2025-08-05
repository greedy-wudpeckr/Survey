"use client";
import React, { useState } from 'react';

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className = '' }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log('Newsletter signup:', email);
  };

  return (
    <footer className={`py-16 px-8 ${className}`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left Section */}
          <div className="space-y-8 inline-block">
            {/* Logo */}
    <div className="flex items-center space-x-1">
     <img src="logo.png" className='h-10 w-40' alt="" />
     </div>

            {/* Description */}
            <p className="text-gray-600 text-sm leading-relaxed max-w-md">
              TheySaid recommends questions, delivers via your existing channels, engages your audience, and summarizes results through AI surveys.
            </p>

            {/* Newsletter Section */}
            <div className="space-y-4 rounded-lg border p-6 w-4/6 bg-white">
              <h3 className="text-lg font-semibold text-black">Join Newsletter</h3>
              <form onSubmit={handleSubmit} className="space-y-3">
                <div>
                  <label htmlFor="email" className="block text-sm text-gray-700 mb-1">
                    Email*
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full max-w-sm px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded font-medium transition-colors duration-200"
                >
                  Get your copy
                </button>
              </form>
            </div>
          </div>

          {/* Right Section - Navigation Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Product Column */}
            <div>
              <h4 className="text-lg font-semibold text-black mb-6">Product</h4>
              <ul className="space-y-4">
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
                    Product Overview
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
                    Integration Videos
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
                    Win / Loss Analysis
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources Column */}
            <div>
              <h4 className="text-lg font-semibold text-black mb-6">Resources</h4>
              <ul className="space-y-4">
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
                    Videos
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
                    Case Studies
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
                    NRR Whitepaper
                  </a>
                </li>
              </ul>
            </div>

            {/* Pages Column */}
            <div>
              <h4 className="text-lg font-semibold text-black mb-6">Pages</h4>
              <ul className="space-y-4">
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
                    Sign In
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
                    Sign Up
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-wrap items-center justify-start gap-6 text-sm text-gray-500">
            <span>Copyright © 2025 TheySaid</span>
            
            <a href="#" className="hover:text-gray-700 transition-colors duration-200">
              Privacy
            </a>
            
            <a href="#" className="hover:text-gray-700 transition-colors duration-200">
              Terms
            </a>
            
            <a href="#" className="hover:text-gray-700 transition-colors duration-200">
              Security
            </a>
            
            <a href="#" className="hover:text-gray-700 transition-colors duration-200">
              DPA
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;