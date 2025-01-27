import React from "react";

import { Bed, Bath, Wifi, Star } from "lucide-react";
import { Link } from "react-router-dom";

const HomesListingCard = () => {
  return (
    <div className="max-w-md mx-auto rounded-md overflow-hidden shadow-md hover:shadow-lg">
      <div className="relative">
        <img
          className="w-full"
          src="https://firebasestorage.googleapis.com/v0/b/sarah-homestay.firebasestorage.app/o/web%20assets%2FIMG-20250124-WA0017.jpg?alt=media&token=7f633a1d-1bbc-4322-ab16-50df53c07e78"
          alt="Product Image"
        />
      </div>
      <div className="relative">
        <div className="absolute -top-3 left-4 bg-yellow-500 text-white px-3 py-1 rounded-md text-sm font-medium shadow-lg z-10">
          $100/Night
        </div>
        <div className="p-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium">Product Title</h3>
            <div className="flex items-center gap-1">
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-medium">4.8</span>
            </div>
          </div>
          <div className="flex items-center justify-between mb-4 text-gray-600">
            <div className="flex items-center gap-2">
              <Bed className="w-5 h-5" />
              <span className="text-sm">Bed</span>
            </div>
            <div className="flex items-center gap-2">
              <Bath className="w-5 h-5" />
              <span className="text-sm">Bath</span>
            </div>
            <div className="flex items-center gap-2">
              <Wifi className="w-5 h-5" />
              <span className="text-sm">Wifi</span>
            </div>
          </div>
          <p className="text-gray-600 text-sm mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae
            ante vel eros fermentum faucibus sit amet euismod lorem.
          </p>
          <div className="flex items-center justify-between">
            <span className="font-bold text-lg">$19.99</span>
            <Link to="/home-details/1" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              Buy Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomesListingCard;
