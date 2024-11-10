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

        {/* Scrolling Client Logos */}
        <div className="overflow-hidden py-6">
          <div className="flex items-center space-x-8 animate-scroll">
            {clients.concat(clients).map((client, index) => (
              <img
                key={`${client.id}-${index}`} // Unique key
                src={client.logo}
                alt={client.name}
                className="w-24 h-16 object-contain"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Animation for marquee effect */}
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          display: flex;
          animation: scroll 30s linear infinite;
          width: calc(200% + 16px); /* Ensure seamless scrolling */
        }
      `}</style>
    </section>
  );
};

export default Clients;
