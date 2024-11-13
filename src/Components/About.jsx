import React, { useState, useEffect } from "react";
import MadhurSir from '../Assets/MadhurSir.jpeg';
import Footer from "./Footer";


const AboutUs = () => {

  const [slides] = useState([
    {
      imgSrc: 'https://www.smartpkg.in/subimages/about_us.jpg',
    },
    {
      imgSrc: 'https://www.smartpkg.in/images/slide_1.jpg',
    },
    {
      imgSrc: 'https://www.aopackmachine.com/wp-content/uploads/2022/08/Packaging-Box-Manufacturing-Business01.jpg',
    },
  ]);

  const autoplayIntervalTime = 4000;
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        nextSlide();
      }
    }, autoplayIntervalTime);

    return () => clearInterval(interval);
  }, [isPaused, currentSlideIndex]);

  const nextSlide = () => {
    setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const previousSlide = () => {
    setCurrentSlideIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  const togglePause = () => {
    setIsPaused((prev) => !prev);
  };


  return (
    <>
      <section className="bg-gray-50 pb-20 mt-[6.3rem]">
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

        <div className="grid grid-cols-2 gap-4 px-10 pt-10">
          <div className="bg-red-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, neque ad cupiditate, molestiae recusandae provident odio reiciendis ea explicabo, accusamus animi veniam! Blanditiis similique adipisci excepturi. Minima harum placeat vel.
            Neque nostrum, eligendi repudiandae sed consectetur molestias accusamus est expedita dolorem, perferendis, esse impedit non! Quam saepe quaerat placeat tempore maxime corrupti, praesentium modi molestiae, excepturi dolore iure adipisci reiciendis.
            Corporis minima ea provident eaque repellendus aperiam ab vero distinctio nesciunt, quidem dignissimos accusantium voluptatibus cupiditate esse dolores nam obcaecati accusamus amet a cumque veniam. Praesentium quas voluptatibus unde maiores?
            Maiores labore necessitatibus ipsum minima ab quos accusantium est placeat voluptatibus incidunt rem dignissimos sequi, dolore eveniet. Assumenda rem eveniet ratione, porro obcaecati expedita, reiciendis asperiores incidunt odit et minima?</div>
          <div className="bg-red-500">
            <div className="relative w-full overflow-hidden">
              {/* Slides */}
              <div className="relative min-h-[80svh] w-full">
                {slides.map((slide, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${currentSlideIndex === index ? 'opacity-100' : 'opacity-0'
                      }`}
                  >
                    {/* Central Text Overlay for Company Name */}
                    <div className="absolute inset-0 flex items-center justify-center z-10">
                    </div>
                    <img
                      className="absolute w-full h-full object-cover inset-0 object-cover text-neutral-600 dark:text-neutral-300"
                      src={slide.imgSrc}
                      alt=""
                    />
                  </div>
                ))}
              </div>

              <div className="absolute rounded-md bottom-3 md:bottom-5 left-1/2 z-20 flex -translate-x-1/2 gap-4 md:gap-3 px-1.5 py-1 md:px-2" role="group" aria-label="slides">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    className={`size-2 cursor-pointer rounded-full transition ${currentSlideIndex === index ? 'bg-neutral-300' : 'bg-neutral-300/50'}`}
                    onClick={() => setCurrentSlideIndex(index)}
                    aria-label={`slide ${index + 1}`}
                  ></button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* <div className="container mx-auto mt-20 px-6 lg:px-16">
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
        </div> */}
      </section>
      <Footer />
    </>

  );
};

export default AboutUs;
