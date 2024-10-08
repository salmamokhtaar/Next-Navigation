import React from 'react';
import Navbar from '../Navbar';

const page = () => {
  return (
    <>
    <Navbar/>
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
        <h1 className="text-4xl font-bold mb-4 text-center">page Us</h1>
        <p className="text-gray-700 text-lg mb-6 text-center">
          We are a dedicated team of professionals focused on delivering the best services to our clients. With years of experience in our field, we aim to innovate and provide exceptional solutions to all your needs.
        </p>

        <h2 className="text-2xl font-semibold mb-3">Our Mission</h2>
        <p className="text-gray-600 mb-6">
          Our mission is to bring innovative and user-friendly products to the market while maintaining the highest standards of customer service and satisfaction.
        </p>

        <h2 className="text-2xl font-semibold mb-3">Our Values</h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-600">
          <li>Customer Satisfaction</li>
          <li>Innovation and Creativity</li>
          <li>Integrity and Honesty</li>
          <li>Teamwork and Collaboration</li>
        </ul>
      </div>
    </div>
    </>
  );
};

export default page;
