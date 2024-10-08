// app/services/page.js or pages/services.js (depending on your Next.js version)
import React from 'react';
import Navbar from '../Navbar';

const page = () => {
  return (
    <>
    <Navbar/>
     <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="max-w-6xl mx-auto p-6 bg-white shadow-md rounded-lg">
        <h1 className="text-4xl font-bold mb-6 text-center">Our Services</h1>
        <p className="text-gray-700 text-lg mb-6 text-center">
          We offer a wide range of high-quality services to meet all your business needs.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-200 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-3">Web Development</h2>
            <p className="text-gray-600">
              We build high-performance websites that are fast, responsive, and visually appealing.
            </p>
          </div>

          <div className="bg-gray-200 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-3">Mobile App Development</h2>
            <p className="text-gray-600">
              Our team creates user-friendly mobile applications for iOS and Android platforms.
            </p>
          </div>

          <div className="bg-gray-200 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-3">UI/UX Design</h2>
            <p className="text-gray-600">
              We design intuitive and engaging user interfaces that enhance user experience.
            </p>
          </div>

          <div className="bg-gray-200 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-3">SEO Optimization</h2>
            <p className="text-gray-600">
              Improve your website’s visibility and ranking with our expert SEO services.
            </p>
          </div>

          <div className="bg-gray-200 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-3">E-Commerce Solutions</h2>
            <p className="text-gray-600">
              We develop full-featured e-commerce platforms with secure payment gateways.
            </p>
          </div>

          <div className="bg-gray-200 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-3">Cloud Solutions</h2>
            <p className="text-gray-600">
              We offer scalable cloud solutions that improve operational efficiency and reduce costs.
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
   
  );
};

export default page;
