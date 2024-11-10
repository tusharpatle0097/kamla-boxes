// src/components/Footer.js

import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* About Section */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">About Us</h3>
          <p className="text-gray-400">
            Box Company specializes in eco-friendly packaging solutions, committed to providing quality products while reducing environmental impact.
          </p>
        </div>

        {/* Quick Links Section */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#home" className="hover:text-blue-400 transition duration-300">Home</a></li>
            <li><a href="#about" className="hover:text-blue-400 transition duration-300">About Us</a></li>
            <li><a href="#products" className="hover:text-blue-400 transition duration-300">Products</a></li>
            <li><a href="#clients" className="hover:text-blue-400 transition duration-300">Clients</a></li>
            <li><a href="#contact" className="hover:text-blue-400 transition duration-300">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info Section */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Contact Us</h3>
          <p className="text-gray-400">123 Box Lane, Packaging City, PC 12345</p>
          <p className="text-gray-400 mt-2">Phone: +1 (123) 456-7890</p>
          <p className="text-gray-400 mt-2">Email: info@boxcompany.com</p>
          <div className="flex space-x-4 mt-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition duration-300">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition duration-300">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-500 transition duration-300">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 transition duration-300">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Box Company. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
