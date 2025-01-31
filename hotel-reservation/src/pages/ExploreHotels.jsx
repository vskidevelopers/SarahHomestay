import HeroSection from "@/components/HeroSection";

import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import HomeGrids from "@/sections/HomesGrid";
import { useHomeFunctions } from "@/firebase/firebase";

function ExploreHotels() {
  const [searchParams] = useSearchParams();
  const type = searchParams.get("type");

  const { getHomes, getHomesByLocation } = useHomeFunctions();
  const [hotels, setHotels] = useState([]);
  const [hotelsByParams, setHotelsByParams] = useState([]);
  const [error, setError] = useState("");

  const FetchHotelsByParams = async (searchParams) => {
    try {
      const hotelResponse = await getHomesByLocation(searchParams);

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
      const hotelResponse = await getHomes();

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
          image="https://firebasestorage.googleapis.com/v0/b/sarah-homestay.firebasestorage.app/o/web%20assets%2FIMG-20250122-WA0023.jpg?alt=media&token=713433e8-698a-4300-9593-d11b0312566c"
        />{" "}
      </div>

      <div>
        <HomeGrids homes={hotels} />
      </div>
    </div>
  );
}

export default ExploreHotels;
