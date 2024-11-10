// src/components/Clients.js

import React from 'react';

const clients = [
  { id: 1, name: 'Client One', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVRoLY3SSqU0HpNAP_-uwfp98RSCrxFqk5Gw&s' },
  { id: 2, name: 'Client Two', logo: 'https://c8.alamy.com/comp/TACMXH/three-red-rose-flower-buds-and-petals-from-a-vase-TACMXH.jpg' },
  { id: 3, name: 'Client Three', logo: 'https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg?cs=srgb&dl=pexels-pixabay-56866.jpg&fm=jpg' },
  { id: 4, name: 'Client Four', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS58Lz3IlmiOohnNXMu8IN8U1RNDFxyWYBIxg&s' },
  { id: 5, name: 'Client Five', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrBwARZpC1OVgQCHh9JbNmL52o4rWFjVwlEw&s' },
  { id: 6, name: 'Client Six', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdpSupiI7Tw289HomG-whiYwnXcB15Gb0U0A&s' },
  { id: 7, name: 'Client Seven', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqG3xvnBfia6BBSpZRqngW4DZgeUTBTmUwZQ&s' },
  { id: 8, name: 'Client Eight', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPCnjtYHR-JqDzR0UHJduZ_pHI9LveRmtYug&s' },
];

const Clients = () => {
  return (
    <section className="bg-gray-100 py-20 px-6 md:px-12 lg:px-24" id="clients">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">Our Clients</h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            We’re proud to have partnered with industry leaders and renowned brands to deliver exceptional packaging solutions.
          </p>
        </div>

        {/* Grid Layout for Client Logos */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {clients.map((client) => (
            <div
              key={client.id}
              className="relative group flex items-center justify-center w-32 h-32 bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-50"
              />
              <div className="absolute inset-0 bg-gray-900 bg-opacity-0 flex items-center justify-center transition-opacity duration-300 group-hover:bg-opacity-50">
                <span className="text-white text-sm font-semibold opacity-0 group-hover:opacity-100">
                  {client.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
