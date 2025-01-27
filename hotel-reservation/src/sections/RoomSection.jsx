import FeaturedRoomBookingForm from "@/components/forms/FeaturedRoomBookingForm";
import {
  Dialog,
  DialogContent,

  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"; 

const RoomSection = () => {

  return (
    <div className="p-8 lg:p-16">
      {/* Featured Room Title */}
      <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-12 text-center relative">
        {/* Decorative lines before and after the text */}
        <span className="absolute left-0 top-1/2 transform -translate-y-1/2 w-20 lg:w-32 h-1 bg-gray-300"></span>

        <span className="px-4 lg:px-6 bg-white relative z-10">
          Featured Home
        </span>

        <span className="absolute right-0 top-1/2 transform -translate-y-1/2 w-20 lg:w-32 h-1 bg-gray-300"></span>
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Image Section */}
        <div className="relative">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/sarah-homestay.firebasestorage.app/o/web%20assets%2FIMG-20250122-WA0027.jpg?alt=media&token=44bd27d0-52e3-4e37-ad5e-899383757da4"
            alt="lavish studio apartment"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="flex flex-col justify-center space-y-6">
          {/* Title */}
          <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-gray-900 leading-tight">
            lavish studio apartment
          </h1>
          <h2 className="text-4xl lg:text-6xl font-semibold text-gray-700">
            KILIMANI
          </h2>

          {/* Description */}
          <p className="text-gray-600">
            Experience the luxury of our lavish studio apartment, located in the
            heart of Kilimani, Nairobi. Perfect for both short and long stays.
          </p>

          {/* Features List */}
          <ul className="list-disc pl-6 text-gray-700">
            <li>Fully Equipped Gym</li>
            <li>Spacious Lifts</li>
            <li>Ample Parking</li>
            <li>Backup Generator</li>
            <li>Natural Lighting</li>
            <li>Crisp Clean Linens and Towels</li>
            <li>High-Speed WiFi</li>
            <li>
              Close Proximity to Restaurants, Yaya Center, Adlife, and Prestige
              Malls
            </li>
          </ul>

          {/* Price and Button */}
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
            {/* Short Stay Price */}
            <span className="text-white bg-gray-900 px-6 py-3 rounded-lg text-xl font-semibold">
              4500/day
            </span>
            {/* Long Stay Price */}
            <span className="text-white bg-gray-800 px-6 py-3 rounded-lg text-xl font-semibold">
              110k/month
            </span>

            {/* Book Now Button */}
            <Dialog>
      <DialogTrigger asChild>
      <Button
              variant="outline"
              className="text-white bg-gray-700 hover:bg-gray-900 px-6 py-3 rounded-lg text-lg font-medium"
            >
              Book Now
            </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Book This Room</DialogTitle>

        </DialogHeader>
<FeaturedRoomBookingForm / >

      </DialogContent>
    </Dialog>

          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomSection;
