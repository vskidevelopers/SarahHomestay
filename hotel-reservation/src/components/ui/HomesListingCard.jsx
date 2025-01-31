import React from "react";

import { Bed, Bath, Wifi, Star } from "lucide-react";
import { Link } from "react-router-dom";
import truncate from "@/utils/Truncate";

const HomesListingCard = ({ home }) => {
  return (
    <div className="max-w-md mx-auto rounded-md overflow-hidden shadow-md hover:shadow-lg">
      <div className="relative">
        <img
          className="w-full h-48 object-cover"
          src={home?.roomPhoto}
          alt="Home Image"
        />
      </div>

      <div className="relative">
        {home?.featured && (
          <div className="absolute -top-3 left-4 bg-yellow-500 text-white px-3 py-1 rounded-md text-sm font-medium shadow-lg z-10">
            Featured
          </div>
        )}
        <div className="p-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium">{home?.homeName}</h3>
            <div className="flex items-center gap-1">
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-medium">{home?.ratings}</span>
            </div>
          </div>
          <div className="flex items-center justify-between mb-4 text-gray-600">
            <div className="flex items-center gap-2">
              <Bed className="w-5 h-5" />
              <span className="text-sm">
                {home?.amenitiesTags.includes("Bed") ? "Bed" : ""}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Bath className="w-5 h-5" />
              <span className="text-sm">
                {home?.amenitiesTags.includes("Bath") ? "Bath" : ""}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Wifi className="w-5 h-5" />
              <span className="text-sm">
                {home?.amenitiesTags.includes("WiFi") ? "WiFi" : ""}
              </span>
            </div>
          </div>
          <p className="text-gray-600 text-sm mb-4">
            {truncate(home?.description)} {/* Truncate description */}
          </p>
          <div className="flex items-center justify-between">
            <span className="font-bold text-lg">Ksh {home?.priceNight}</span>
            <Link
              to={`/home-details/${home?.id}`}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomesListingCard;
