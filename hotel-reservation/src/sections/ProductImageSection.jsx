import { Star, MapPin, Bed, Bath, Wifi, Tv, Dumbbell, Car } from "lucide-react";

const ProductImageSection = ({
  image = "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=2070",
  title = "Luxury Suite with Ocean View",
  rating = 4.8,
  location = "Mombasa, Kenya",
  description = "Experience luxury living in our spacious suite overlooking the Indian Ocean. Modern amenities meet traditional coastal charm in this carefully curated space.",
}) => {
  return (
    <div className="w-full bg-white rounded-lg">
      <div className="relative w-full h-[400px] overflow-hidden rounded-lg">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>

      <div className="mt-6">
        <div className="flex items-center justify-between">
          <h1 className="text-4xl font-bold">{title}</h1>
          <div className="flex items-center gap-1">
            <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
            <span className="text-lg font-semibold">{rating}</span>
          </div>
        </div>

        <div className="flex items-center gap-2 mt-3 text-gray-600">
          <MapPin className="w-5 h-5" />
          <span>{location}</span>
        </div>

        <div className="flex items-center gap-8 mt-6 pb-6 border-b">
          {[
            { icon: Bed, label: "Bed" },
            { icon: Bath, label: "Bath" },
            { icon: Wifi, label: "Wifi" },
            { icon: Tv, label: "TV" },
            { icon: Dumbbell, label: "Gym" },
            { icon: Car, label: "Parking" },
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center gap-1">
              <item.icon className="w-6 h-6 text-gray-600" />
              <span className="text-sm text-gray-600">{item.label}</span>
            </div>
          ))}
        </div>

        <p className="mt-6 text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default ProductImageSection;
