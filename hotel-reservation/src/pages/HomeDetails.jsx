import { useHomeFunctions } from "@/firebase/firebase";
import HomeDetailsBookingSection from "@/sections/HomeDetailsBookingSection";
import ProductImageSection from "@/sections/ProductImageSection";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const HomeDetails = () => {
  const { getHomeById } = useHomeFunctions();
  const [home, setHome] = useState(null);
  const { homeId } = useParams();
  console.log("home id selected >> ", homeId);

  const getHomeDetails = async () => {
    try {
      const getHomeDetailsResponse = await getHomeById(homeId);
      if (getHomeDetailsResponse?.success) {
        console.log("HomeDetails >> ", getHomeDetailsResponse?.data);
        setHome(getHomeDetailsResponse?.data);
      }
    } catch (error) {
      console.error("error getting home details >> ", error);
    }
  };

  useEffect(() => {
    getHomeDetails();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-8">
        <div className="md:col-span-2">
          <ProductImageSection home={home} />
        </div>
        <div className="md:col-span-1">
          <HomeDetailsBookingSection home={home} />
        </div>
      </div>
    </div>
  );
};

export default HomeDetails;
