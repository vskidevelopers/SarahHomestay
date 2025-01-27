import { Star, MapPin, Bed, Bath, Wifi, Tv, Dumbbell, Car } from "lucide-react";

const ProductImageSection = ({
  image = "https://firebasestorage.googleapis.com/v0/b/sarah-homestay.firebasestorage.app/o/web%20assets%2FIMG-20250122-WA0019.jpg?alt=media&token=a89b674d-3402-4f79-8bc8-76c5764ffeb1",
  title = "lavish one-bedroom apartment",
  rating = 4.8,
  location = " Kilimani Nairobi",
  description = "Book your stay at our lavish one-bedroom apartment in the heart of Kilimani, Nairobi. Priced at 6500 Ksh per night or 150k per month, this centrally located gem is just 15 minutes from Jomo Kenyatta International Airport, 10 minutes from the CBD, and Nairobi National Park. Enjoy modern living with close proximity to social amenities like Yaya Center, Adlife, and Prestige Malls, as well as a variety of restaurants. Comfort and convenience await you in this prime location."
}) => {
  return (
    <div className="w-full bg-white rounded-lg">
      <div className="relative w-full h-[400px] overflow-hidden rounded-lg">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>

      <div className="mt-6 container mx-auto">
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
