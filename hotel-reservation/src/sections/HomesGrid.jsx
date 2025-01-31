import HomesListingCard from "@/components/ui/HomesListingCard";
import React from "react";

// Mock product data

const HomeGrids = ({ homes }) => {
  return (
    <div className="px-4 md:px-8 lg:px-16">
      <div className="text-center my-8">
        <h2 className="text-yellow-500 relative inline-block before:content-[''] before:block before:w-12 before:h-1 before:bg-gray-400 before:absolute before:left-0 before:top-1/2 before:transform before:translate-x-full before:translate-y-1/2 after:content-[''] after:block after:w-12 after:h-1 after:bg-gray-400 after:absolute after:right-0 after:top-1/2 after:transform after:-translate-x-full after:translate-y-1/2">
          OUR HOMES
        </h2>
        <h1 className="text-4xl font-bold">Explore Our Homes</h1>
      </div>

      <div>
        {homes?.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {homes?.map((home, i) => (
              <HomesListingCard key={i} home={home} />
            ))}
          </div>
        ) : (
          <div className="relative flex flex-col items-center justify-center py-32">
            {/* Huge Fallback Text */}
            <div className="absolute top-0 left-0 h-full w-full flex justify-start items-center opacity-10">
              <h1 className="text-[4rem] md:text-[6rem] pl-5 font-black text-gray-900 uppercase">
                No Homes
              </h1>
            </div>
            <p className="text-2xl md:text-3xl font-bold text-gray-700 mb-4">
              Sorry, No Homes Available Right Now!
            </p>
            <p className="text-lg md:text-xl text-gray-500">
              Check back later or contact us for assistance.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomeGrids;
