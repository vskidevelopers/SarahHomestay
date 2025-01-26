import HomeDetailsBookingSection from "@/sections/HomeDetailsBookingSection";
import ProductImageSection from "@/sections/ProductImageSection";

const HomeDetails = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <ProductImageSection />
        </div>
        <div className="col-span-1">
          <HomeDetailsBookingSection />
        </div>
      </div>
    </div>
  );
};

export default HomeDetails;
