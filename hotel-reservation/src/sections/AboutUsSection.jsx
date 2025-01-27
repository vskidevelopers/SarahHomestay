import {Link} from "react-router-dom";
import CountUp from "react-countup";
import { Home, Users, Star } from "lucide-react";

const AboutUsSection = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-20 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-wrap">
        <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
          <div className="text-center lg:text-left">
            <h2 className="text-2xl font-bold text-gray-700 mb-4">ABOUT US</h2>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Welcome to <span className="text-indigo-600">Sarah Homestay</span>
            </h1>
            <p className="text-gray-600 text-lg max-w-3xl leading-relaxed">
              Discover the comfort and warmth of a home away from home. At Sarah
              Homestay, we pride ourselves on offering exceptional hospitality,
              cozy accommodations, and unforgettable experiences. Whether you're
              here for leisure or work, we ensure your stay feels just like
              home.
            </p>
            <div className="flex justify-between max-w-md mx-auto lg:mx-0">
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Home className="w-8 h-auto text-blue-600" />{" "}
                  {/* Home Icon */}
                </div>
                <p className="text-3xl font-bold text-blue-600">
                  <CountUp start={0} end={10} duration={2.5} /> {"+"}
                </p>
                <p className="text-gray-700">Home</p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Users className="w-8 h-auto text-blue-600" />{" "}
                  {/* Users Icon */}
                </div>
                <p className="text-3xl font-bold text-blue-600">
                  <CountUp start={0} end={500} duration={2.5} /> {"+"}
                </p>
                <p className="text-gray-700">Clients</p>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Star className="w-8 h-auto text-blue-600" />{" "}
                  {/* Star Icon */}
                </div>
                <p className="text-3xl font-bold text-blue-600">
                  <CountUp start={0} end={100} duration={2.5} /> {"+"}
                </p>
                <p className="text-gray-700">Reviews</p>
              </div>
            </div>
            <Link to="/explore" className="mt-10 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300">
              EXPLORE MORE
            </Link>
          </div>
        </div>
        <div className="w-full lg:w-1/2 px-4 flex items-center justify-center">
          <div className="relative w-full h-96">
            <img
              className="absolute w-1/2 h-1/2 top-0 left-0 animate-fadeIn"
              src="https://firebasestorage.googleapis.com/v0/b/sarah-homestay.firebasestorage.app/o/web%20assets%2FIMG-20250124-WA0004.jpg?alt=media&token=6808a541-5250-4a10-88b9-dff49e89f87c"
              alt="Description 1"
            />
            <img
              className="absolute w-1/3 h-1/3 top-1/4 right-0 animate-fadeIn delay-500"
              src="https://firebasestorage.googleapis.com/v0/b/sarah-homestay.firebasestorage.app/o/web%20assets%2FIMG-20250124-WA0005.jpg?alt=media&token=4e28fe05-22da-4803-90d9-8d8cae9bb37c"
              alt="Description 2"
            />
            <img
              className="absolute w-1/4 h-1/4 bottom-0 left-1/4 animate-fadeIn delay-1000"
              src="https://firebasestorage.googleapis.com/v0/b/sarah-homestay.firebasestorage.app/o/web%20assets%2FIMG-20250124-WA0009.jpg?alt=media&token=5cda3c22-5ffe-4a25-8bfc-7a1d189dee39"
              alt="Description 3"
            />
            <img
              className="absolute w-1/6 h-1/6 bottom-1/4 right-1/4 animate-fadeIn delay-1500"
              src="https://firebasestorage.googleapis.com/v0/b/sarah-homestay.firebasestorage.app/o/web%20assets%2FIMG-20250124-WA0017.jpg?alt=media&token=7f633a1d-1bbc-4322-ab16-50df53c07e78"
              alt="Description 4"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;
