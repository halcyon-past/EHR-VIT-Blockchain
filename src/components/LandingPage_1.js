import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';

// Assuming you have images in a folder named `images` inside the `src` directory.
import lp_11 from './lp_11.png';
import lp_10 from './lp_10.png';
import lp_12 from './lp_12.png';

const LandingPage = () => {
  const [currentImage, setCurrentImage] = useState(lp_10);

  useEffect(() => {
    const interval = setInterval(() => {
      switch (currentImage) {
        case lp_10:
          setCurrentImage(lp_11);
          break;
        case lp_11:
          setCurrentImage(lp_12);
          break;
        case lp_12:
          setCurrentImage(lp_10);
          break;
        default:
          setCurrentImage(lp_10);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [currentImage]);

  return (
    <div>
      <NavBar />
      <main className="bg-gray-900 text-white font-sans">
        {/* Hero Section */}
        <section className="relative flex items-center justify-center h-screen">
          <img
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-in-out transform"
            src={currentImage}
            alt="Hero illustration"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-80"></div>
          <div className="max-w-6xl px-8 py-12 z-10">
            <div className="space-y-8 w-1/2">
              <h1 className="text-6xl font-bold leading-tight">
                Revolutionize Healthcare Data Management
              </h1>
              <p className="text-xl">
                The Secure Electronic Health Records App leverages blockchain
                technology to enhance security, improve accessibility, and
                transform healthcare data management.
              </p>
              <a
                href="#"
                className="inline-flex items-center bg-indigo-600 text-white px-8 py-4 rounded-full hover:bg-indigo-700 transition-colors duration-300 text-lg font-medium"
              >
                Get Started
                <svg xmlns="http://www.w3.org/2000/svg" className="ml-3" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </a>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-32 bg-gray-800">
          <div className="max-w-6xl px-8 mx-auto grid grid-cols-3 gap-8">
            <div className="bg-gray-700 p-8 rounded-2xl shadow-2xl">
              <img
                className="w-full h-48 object-cover rounded-xl mb-6"
                src={lp_10}
                alt="Feature 1"
              />
              <h3 className="text-2xl font-bold mb-4">Secure Data Storage</h3>
              <p className="text-lg">
                Blockchain technology ensures secure and transparent data storage
                for enhanced privacy and integrity.
              </p>
            </div>
            <div className="bg-gray-700 p-8 rounded-2xl shadow-2xl">
              <img
                className="w-full h-48 object-cover rounded-xl mb-6"
                src={lp_11}
                alt="Feature 2"
              />
              <h3 className="text-2xl font-bold mb-4">Improved Accessibility</h3>
              <p className="text-lg">
                Access your health records anytime, anywhere with our user-friendly
                app and seamless blockchain integration.
              </p>
            </div>
            <div className="bg-gray-700 p-8 rounded-2xl shadow-2xl">
              <img
                className="w-full h-48 object-cover rounded-xl mb-6"
                src={lp_12}
                alt="Feature 3"
              />
              <h3 className="text-2xl font-bold mb-4">Data Interoperability</h3>
              <p className="text-lg">
                Leverage the power of blockchain to enable seamless data sharing
                and collaboration among healthcare providers.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default LandingPage;