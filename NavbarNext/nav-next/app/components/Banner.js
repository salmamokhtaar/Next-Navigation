// components/Banner.js
import React from "react";

const Banner = () => {
  return (
    <div
      className="h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: "url('https://render.fineartamerica.com/images/images-profile-flow/400/images/artworkimages/mediumlarge/2/tropical-landscape-palm-trees-and-blue-levente-bodo.jpg')", // Update with your image path
      }}
    >
      <div className="bg-black bg-opacity-50 p-8 rounded-lg">
        <h1 className="text-white text-3xl font-bold">Welcome to Our Website!</h1>
        <p className="text-white mt-2">Discover amazing content and services.</p>
      </div>
    </div>
  );
};

export default Banner;
