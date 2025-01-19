import HeroSection from "@/components/HeroSection";
import HotelListings from "@/sections/HotelListings";
import { useHotelFunctions } from "@/utils/firebase";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import homeStayLogo from "/sarahome-logo.svg";
import { Construction } from "lucide-react";

function ExploreHotels() {
  const [searchParams] = useSearchParams();
  const type = searchParams.get("type");

  const { getAllApprovedHotels, getHotelByLocation } = useHotelFunctions();
  const [hotels, setHotels] = useState([]);
  const [hotelsByParams, setHotelsByParams] = useState([]);
  const [error, setError] = useState("");

  const FetchHotelsByParams = async (searchParams) => {
    try {
      const hotelResponse = await getHotelByLocation(searchParams);

      if (hotelResponse?.success) {
        console.log("hotelResponse by params >> ", hotelResponse);

        setHotelsByParams(hotelResponse?.data);
      } else {
        setError(hotelResponse?.message);
        console.log("hotelResponse by params >> ", hotelResponse);
        console.log("hotelByParams State >> ", hotelsByParams);

        // Set error message if no hotels exist
      }
    } catch (error) {
      console.error("Error fetching hotels:", error);
      setError("An error occurred while fetching hotels.");
    }
  };

  const fetchHotels = async () => {
    try {
      const hotelResponse = await getAllApprovedHotels();

      if (hotelResponse?.success) {
        console.log("hotelResponse >> ", hotelResponse);

        setHotels(hotelResponse?.data);
      } else {
        setError(hotelResponse?.message); // Set error message if no hotels exist
      }
    } catch (error) {
      console.error("Error fetching hotels:", error);
      setError("An error occurred while fetching hotels.");
    }
  };

  useEffect(() => {
    if (type) {
      console.log("Type exists from URL:", type);
      FetchHotelsByParams(type);
      if (hotelsByParams?.length > 0) {
        console.log("hotelsByParams?.length >> ", hotelsByParams?.length);
        console.log("use hotel by params ", hotelsByParams?.length);
      } else {
        console.log("hotelsByParams?.length >> ", hotelsByParams?.length);
        console.log("do not use by params.  fetch hotels()");
        fetchHotels();
      }
    } else {
      console.log("Type does not exist from URL:", type);
      fetchHotels();
    }
  }, []);

  return (
    <div className="">
      <div>
        <HeroSection
          title="Explore Our Homes"
          image="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg"
        />{" "}
      </div>
      {/*<div className="px-10 md:px-20">
         {type && hotelsByParams?.length !== 0 ? (
          <HotelListings hotels={hotelsByParams} />
        ) : (
          <HotelListings hotels={hotels} />
        )} */}
      <div>
        <div className="relative w-full h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 overflow-hidden">
          {/* Logo Background */}
          <div className="absolute inset-0 flex items-center justify-center opacity-30">
            <img
              src={homeStayLogo}
              alt="Logo"
              className="w-1/2 md:w-1/3 lg:w-1/2"
            />
          </div>

          {/* Overlay Text */}
          <div className="relative text-center space-y-4">
            {/* Icon */}
            <Construction className="mx-auto text-white w-12 h-12 md:w-16 md:h-16" />

            {/* Heading */}
            <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg">
              This page is currently under maintenance
            </h1>

            {/* Subheading */}
            <p className="text-lg md:text-xl text-white/80">
              Please check back soon. We’re working hard to improve your
              experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExploreHotels;
