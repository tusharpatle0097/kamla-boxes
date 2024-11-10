import React from "react";
import MadhurSir from '../Assets/MadhurSir.jpeg';


const AboutUs = () => {
  return (
    <section className="bg-gray-50 pb-20">
      {/* Hero Section */}
      <div className="relative bg-cover bg-center h-96 flex items-center justify-center text-center bg-[url('https://cdn.shopify.com/s/files/1/0070/7032/articles/how_20to_20measure_20a_20box_20for_20shipping.png?v=1727451497')]">
        <div className="bg-black bg-opacity-50 absolute inset-0"></div>
        <div className="relative z-10 max-w-4xl px-4">
          <h1 className="text-5xl font-bold text-white mb-4">About BoxCo</h1>
          <p className="text-lg text-gray-200">
            At BoxCo, we’re redefining packaging with solutions that combine functionality, aesthetics, and sustainability.
          </p>
        </div>
      </div>

      <div className="container mx-auto mt-20 px-6 lg:px-16">
        {/* Mission, Vision, Values - Stack Design */}
        <div className="grid gap-12 lg:grid-cols-3 mb-20">
          <div className="bg-white shadow-lg rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Our Mission
            </h3>
            <p className="text-gray-600">
              To provide eco-friendly packaging solutions that support both our clients’ needs and environmental responsibility.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Our Vision
            </h3>
            <p className="text-gray-600">
              To be a global leader in sustainable packaging, empowering brands to make a difference through responsible choices.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Our Values
            </h3>
            <p className="text-gray-600">
              Integrity, sustainability, and client satisfaction are at the core of every solution we design.
            </p>
          </div>
        </div>

        {/* Features Section with Horizontal Cards */}
        <div className="text-center mb-20">
          <h4 className="text-4xl font-semibold text-gray-800 mb-12">
            Why Choose BoxCo?
          </h4>
          <div className="flex flex-wrap justify-center items-start gap-8">
            <div className="flex bg-white shadow-md rounded-lg overflow-hidden w-full md:w-1/2 lg:w-1/3">
              <div className="p-6">
                <h5 className="text-xl font-medium text-gray-800 mb-2">
                  Eco-Friendly Materials
                </h5>
                <p className="text-gray-600">
                  Our products use recyclable, biodegradable materials, aligning with modern sustainability goals.
                </p>
              </div>
            </div>
            <div className="flex bg-white shadow-md rounded-lg overflow-hidden w-full md:w-1/2 lg:w-1/3">
              <div className="p-6">
                <h5 className="text-xl font-medium text-gray-800 mb-2">
                  Custom Designs
                </h5>
                <p className="text-gray-600">
                  Packaging tailored to reflect your brand's unique identity and meet your functional needs.
                </p>
              </div>
            </div>
            <div className="flex bg-white shadow-md rounded-lg overflow-hidden w-full md:w-1/2 lg:w-1/3">
              <div className="p-6">
                <h5 className="text-xl font-medium text-gray-800 mb-2">
                  High Durability
                </h5>
                <p className="text-gray-600">
                  Our boxes are crafted to endure transport and handling, keeping products safe and secure.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center">
          <h4 className="text-4xl font-semibold text-gray-800 mb-12">
            Meet the Team
          </h4>
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden text-center p-8">
              <img
                src={MadhurSir}
                alt="Team Member"
                className="w-80 h-80 rounded-full mx-auto mb-4"
              />
              <h5 className="text-xl font-medium text-gray-800">Arun Bhandari</h5>
              <p className="text-xl text-red-600">CEO</p>
              <p className="text-gray-600 pt-3">One of the distinguished creed of the first generation entrepreneurs, who has, thorough vision & dedication carved a niche for himself in the field of corrugated boxes & duplex cartons manufacturing. He is one of the leading names in the corrugated industry in India.</p>
            </div>

            <div className="bg-white shadow-lg rounded-lg overflow-hidden text-center p-8">
              <img
                src={MadhurSir}
                alt="Team Member"
                className="w-80 h-80 rounded-full mx-auto mb-4"
              />
              <h5 className="text-xl font-medium text-gray-800">Arun Bhandari</h5>
              <p className="text-xl text-red-600">CEO</p>
              <p className="text-gray-600 pt-3">One of the distinguished creed of the first generation entrepreneurs, who has, thorough vision & dedication carved a niche for himself in the field of corrugated boxes & duplex cartons manufacturing. He is one of the leading names in the corrugated industry in India.</p>
            </div>

            <div className="bg-white shadow-lg rounded-lg overflow-hidden text-center p-8">
              <img
                src={MadhurSir}
                alt="Team Member"
                className="w-80 h-80 rounded-full mx-auto mb-4"
              />
              <h5 className="text-xl font-medium text-gray-800">Arun Bhandari</h5>
              <p className="text-xl text-red-600">CEO</p>
              <p className="text-gray-600 pt-3">One of the distinguished creed of the first generation entrepreneurs, who has, thorough vision & dedication carved a niche for himself in the field of corrugated boxes & duplex cartons manufacturing. He is one of the leading names in the corrugated industry in India.</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
