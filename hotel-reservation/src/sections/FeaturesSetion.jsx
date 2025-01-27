import React from "react";
import { DollarSign, Home, Headphones } from "lucide-react";

const FeaturesSection = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="flex flex-wrap -mx-6 items-center">
        {/* Left Column */}
        <div className="w-full md:w-1/2 px-6 flex justify-center mb-8 md:mb-0">
          <img
            className="rounded-xl shadow-lg w-full md:w-3/4"
            src="https://firebasestorage.googleapis.com/v0/b/sarah-homestay.firebasestorage.app/o/web%20assets%2FIMG-20250122-WA0019.jpg?alt=media&token=a89b674d-3402-4f79-8bc8-76c5764ffeb1"
            alt="Why Choose Us"
          />
        </div>

        {/* Right Column */}
        <div className="w-full md:w-1/2 px-6">
          <div className="text-component">
            <h2 className="text-4xl font-bold mb-6">Why Choose Us</h2>
            <p className="mb-8 text-lg text-gray-700">
              At Sarah Homestay, we prioritize comfort, affordability, and
              quality, ensuring your stay is unforgettable.
            </p>
            <ul className="space-y-6">
              <li className="flex items-start">
                <DollarSign className="text-3xl text-blue-500 mr-4" />
                <div>
                  <h3 className="text-xl font-bold">Affordable Prices</h3>
                  <p className="text-gray-700">
                    Enjoy premium stays without breaking the bank.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <Home className="text-3xl text-blue-500 mr-4" />
                <div>
                  <h3 className="text-xl font-bold">Comfort & Quality</h3>
                  <p className="text-gray-700">
                    Our homes are designed to offer the utmost comfort and
                    elegance.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <Headphones className="text-3xl text-blue-500 mr-4" />
                <div>
                  <h3 className="text-xl font-bold">Customer Support</h3>
                  <p className="text-gray-700">
                    We’re here for you 24/7 to make your stay hassle-free.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
