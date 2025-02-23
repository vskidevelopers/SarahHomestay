import HomeBookingForm from "@/components/forms/HomeBookingForm";
import { Phone } from "lucide-react";

const HomeDetailsBookingSection = ({ home }) => {
  return (
    <div className="w-full space-y-8 bg-white p-6 rounded-lg">
      <div className="flex items-baseline gap-1">
        <span className="text-2xl font-bold">
          Ksh {home?.priceNight.toLocaleString()}
        </span>
        <span className="text-sm text-gray-600">/night</span>
      </div>

      <HomeBookingForm home={home} />

      <div className="space-y-4">
        <h3 className="font-semibold text-lg">Amenities</h3>
        <ul className="list-disc pl-5 space-y-2 text-gray-600">
          {home?.amenities?.map((amenity, index) => (
            <li key={index}>{amenity}</li>
          ))}
        </ul>
      </div>

      <div className="space-y-3 pt-4 border-t">
        <h3 className="font-semibold text-lg">Help & Support</h3>
        <p className="text-gray-600 text-sm">
          Need assistance? Our support team is available 24/7 to help you with
          your booking.
        </p>
        <div className="flex items-center gap-2 p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
          <Phone className="w-5 h-5 text-gray-600" />
          <span className="font-medium">+254 722 323 471</span>
        </div>
      </div>
    </div>
  );
};

export default HomeDetailsBookingSection;
