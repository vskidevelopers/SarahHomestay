import { Star, MapPin, Bed, Bath, Wifi, Tv, Dumbbell, Car } from "lucide-react";

const ProductImageSection = ({ home }) => {
  return (
    <div className="w-full bg-white rounded-lg">
      <div className="relative w-full h-[400px] overflow-hidden rounded-lg">
        <img
          src={home?.roomPhoto}
          alt={home?.homeName}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="mt-6 px-6 mx-auto">
        <div className="flex items-center justify-between">
          <h1 className="text-4xl font-bold">{home?.homeName}</h1>
          <div className="flex items-center gap-1">
            <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
            <span className="text-lg font-semibold">{home?.ratings}</span>
          </div>
        </div>

        <div className="flex items-center gap-2 mt-3 text-gray-600">
          <MapPin className="w-5 h-5" />
          <span>{home?.location}</span>
        </div>

        <div className="flex items-center gap-8 mt-6 pb-6 border-b">
          {[
            {
              icon: Bed,
              label: "Bed",
              isAvailable: home?.amenitiesTags.includes("Bed"),
            },
            {
              icon: Bath,
              label: "Bath",
              isAvailable: home?.amenitiesTags.includes("Bath"),
            },
            {
              icon: Wifi,
              label: "WiFi",
              isAvailable: home?.amenitiesTags.includes("WiFi"),
            },
            {
              icon: Tv,
              label: "TV",
              isAvailable: home?.amenitiesTags.includes("TV"),
            },
            {
              icon: Dumbbell,
              label: "Gym",
              isAvailable: home?.amenitiesTags.includes("Gym"),
            },
            {
              icon: Car,
              label: "Parking",
              isAvailable: home?.amenitiesTags.includes("Parking"),
            },
          ].map((item, index) =>
            item.isAvailable ? (
              <div key={index} className="flex flex-col items-center gap-1">
                <item.icon className="w-6 h-6 text-gray-600" />
                <span className="text-sm text-gray-600">{item.label}</span>
              </div>
            ) : null
          )}
        </div>

        <p className="mt-6 text-gray-600 leading-relaxed">
          {home?.description}
        </p>
      </div>
    </div>
  );
};

export default ProductImageSection;
