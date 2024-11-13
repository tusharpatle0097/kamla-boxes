import React, { useState } from 'react';
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';

const ContactUs = () => {
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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-amber-100 to-teal-100 p-6">
      {/* Contact Info Section */}
      <div className="max-w-4xl w-full bg-white shadow-2xl rounded-lg p-8 border border-gray-300 mb-12">
        <h2 className="text-4xl font-bold text-center text-teal-700 mb-10">Get in Touch</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center border border-gray-200 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <FiPhone className="w-10 h-10 mx-auto text-teal-600 mb-4" />
            <h3 className="text-2xl font-semibold text-gray-700">Call Us</h3>
            <p className="text-gray-600 text-lg mt-2">+91-98198039989</p>
          </div>
          <div className="text-center border border-gray-200 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <FiMail className="w-10 h-10 mx-auto text-teal-600 mb-4" />
            <h3 className="text-2xl font-semibold text-gray-700">Email Us</h3>
            <a href="mailto:info@arihantpack.com" className="text-amber-600 text-lg mt-2 hover:underline">
              info@arihantpack.com
            </a>
          </div>
          <div className="text-center border border-gray-200 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <FiMapPin className="w-10 h-10 mx-auto text-teal-600 mb-4" />
            <h3 className="text-2xl font-semibold text-gray-700">Visit Us</h3>
            <p className="text-gray-600 text-lg mt-2">See our locations below</p>
          </div>
        </div>

        {/* Locations Section */}
        <div className="mt-10 space-y-6">
          <div className="p-6 bg-teal-50 border border-teal-200 rounded-lg shadow-md">
            <h4 className="text-xl font-semibold text-teal-700">1st Location (Howrah, West Bengal)</h4>
            <p className="text-gray-600 mt-2">Jalan Complex, Jangalpur Gate No. 1, Gali No.9, NH-6, Mouza - Baniara, Biprannapara, Howrah - West Bengal, 711411.</p>
          </div>
          <div className="p-6 bg-teal-50 border border-teal-200 rounded-lg shadow-md">
            <h4 className="text-xl font-semibold text-teal-700">2nd Location (Vapi, Gujarat)</h4>
            <p className="text-gray-600 mt-2">Plot No. 64, DamanGanga Industrial Park, Vapi, Gujarat 396193.</p>
          </div>
          <div className="p-6 bg-teal-50 border border-teal-200 rounded-lg shadow-md">
            <h4 className="text-xl font-semibold text-teal-700">3rd Location (Noida, Uttar Pradesh)</h4>
            <p className="text-gray-600 mt-2">C-5, Sector 11, Noida, U.P. 201301</p>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      {/* <section className="bg-gray-50 py-12 px-6 md:px-12 lg:px-24 w-full max-w-4xl">
        <div className="bg-white p-10 rounded-2xl shadow-xl">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Send Us a Message</h2>
          <p className="text-center text-gray-600 mb-8">Have questions? Fill out the form below, and we’ll get back to you shortly.</p>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder=" "
                  className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 peer"
                />
                <label
                  htmlFor="name"
                  className="absolute top-0 left-3 p-1 bg-white text-gray-600 transform -translate-y-1/2 transition-all duration-200 peer-placeholder-shown:top-1/2 peer-placeholder-shown:left-3 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:bg-transparent peer-focus:top-0 peer-focus:left-3 peer-focus:bg-white peer-focus:text-teal-500"
                >
                  Name
                </label>
              </div>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder=" "
                  className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 peer"
                />
                <label
                  htmlFor="email"
                  className="absolute top-0 left-3 p-1 bg-white text-gray-600 transform -translate-y-1/2 transition-all duration-200 peer-placeholder-shown:top-1/2 peer-placeholder-shown:left-3 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:bg-transparent peer-focus:top-0 peer-focus:left-3 peer-focus:bg-white peer-focus:text-teal-500"
                >
                  Email
                </label>
              </div>
            </div>

            <div className="relative">
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder=" "
                rows="5"
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 peer"
              ></textarea>
              <label
                htmlFor="message"
                className="absolute top-0 left-3 p-1 bg-white text-gray-600 transform -translate-y-1/2 transition-all duration-200 peer-placeholder-shown:top-1/2 peer-placeholder-shown:left-3 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:bg-transparent peer-focus:top-0 peer-focus:left-3 peer-focus:bg-white peer-focus:text-teal-500"
              >
                Message
              </label>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="px-8 py-3 bg-gradient-to-r from-teal-600 to-amber-500 text-white font-semibold rounded-lg shadow-md hover:from-teal-700 hover:to-amber-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section> */}
    </div>
  );
};

export default ContactUs;
