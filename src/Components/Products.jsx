// src/components/Products.js

import React from 'react';
import { motion } from 'framer-motion';

const products = [
  {
    id: 1,
    title: 'Eco-friendly Box',
    description: 'A sustainable and durable packaging solution made from recycled materials.',
    image: 'https://via.placeholder.com/600x400',
  },
  {
    id: 2,
    title: 'Custom Printed Box',
    description: 'High-quality printing with custom designs to showcase your brand.',
    image: 'https://via.placeholder.com/600x400',
  },
  {
    id: 3,
    title: 'Premium Gift Box',
    description: 'Luxurious and elegant packaging for high-end products and gifts.',
    image: 'https://via.placeholder.com/600x400',
  },
  {
    id: 4,
    title: 'Shipping Box',
    description: 'Strong, corrugated boxes designed for secure shipping and handling.',
    image: 'https://via.placeholder.com/600x400',
  },
  {
    id: 5,
    title: 'Storage Box',
    description: 'Robust storage boxes for organizing and protecting your items.',
    image: 'https://via.placeholder.com/600x400',
  },
  {
    id: 6,
    title: 'Subscription Box',
    description: 'Customizable boxes perfect for subscription services and product sets.',
    image: 'https://via.placeholder.com/600x400',
  },
];

const Products = () => {
  return (
    <section className="bg-gray-50 py-20 px-6 md:px-12 lg:px-24" id="products">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">Our Products</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Discover our range of eco-friendly and customizable packaging solutions crafted to elevate your brand.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product) => (
            <motion.div
              key={product.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:shadow-2xl hover:-translate-y-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              {/* Product Image */}
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-64 object-cover"
              />

              {/* Product Info */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.title}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <a
                  href="#"
                  className="inline-block px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition duration-300"
                >
                  Learn More
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
