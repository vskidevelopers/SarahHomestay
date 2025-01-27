import HomeDetailsBookingSection from "@/sections/HomeDetailsBookingSection";
import ProductImageSection from "@/sections/ProductImageSection";

const HomeDetails = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-8">
        <div className="md:col-span-2">
          <ProductImageSection />
        </div>
        <div className="md:col-span-1">
          <HomeDetailsBookingSection />
        </div>
      </div>
    </div>
  );
};


export default HomeDetails;
