// src/components/Contact.js

import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    setFormData({ name: '', email: '', message: '' }); // Reset form
  };

  return (
    <section className="bg-gray-50 py-20 px-6 md:px-12 lg:px-24" id="contact">
      <div className="container mx-auto max-w-2xl bg-white p-10 rounded-2xl shadow-xl">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">Get in Touch</h2>
        <p className="text-center text-gray-600 mb-10">
          Have questions? Fill out the form below, and we’ll get back to you shortly.
        </p>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name Input */}
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder=" "
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 peer"
              />
              <label
                htmlFor="name"
                className="absolute top-0 left-3 p-1 bg-white text-gray-600 transform -translate-y-1/2 transition-all duration-200 peer-placeholder-shown:top-1/2 peer-placeholder-shown:left-3 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:bg-transparent peer-focus:top-0 peer-focus:left-3 peer-focus:bg-white peer-focus:text-blue-500"
              >
                Name
              </label>
            </div>

            {/* Email Input */}
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder=" "
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 peer"
              />
              <label
                htmlFor="email"
                className="absolute top-0 left-3 p-1 bg-white text-gray-600 transform -translate-y-1/2 transition-all duration-200 peer-placeholder-shown:top-1/2 peer-placeholder-shown:left-3 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:bg-transparent peer-focus:top-0 peer-focus:left-3 peer-focus:bg-white peer-focus:text-blue-500"
              >
                Email
              </label>
            </div>
          </div>

          {/* Message Input */}
          <div className="relative">
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder=" "
              rows="5"
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 peer"
            ></textarea>
            <label
              htmlFor="message"
              className="absolute top-0 left-3 p-1 bg-white text-gray-600 transform -translate-y-1/2 transition-all duration-200 peer-placeholder-shown:top-1/2 peer-placeholder-shown:left-3 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:bg-transparent peer-focus:top-0 peer-focus:left-3 peer-focus:bg-white peer-focus:text-blue-500"
            >
              Message
            </label>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-green-500 text-white font-semibold rounded-lg shadow-md hover:from-blue-700 hover:to-green-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
