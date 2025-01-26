import HomesListingCard from "@/components/ui/HomesListingCard";
import React from "react";

// Mock product data
const mockData = [1, 2, 3, 4, 5, 6];

const HomeGrids = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16">
      <div className="text-center my-8">
        <h2 className="text-yellow-500 relative inline-block before:content-[''] before:block before:w-12 before:h-1 before:bg-gray-400 before:absolute before:left-0 before:top-1/2 before:transform before:translate-x-full before:translate-y-1/2 after:content-[''] after:block after:w-12 after:h-1 after:bg-gray-400 after:absolute after:right-0 after:top-1/2 after:transform after:-translate-x-full after:translate-y-1/2">
          OUR HOMES
        </h2>
        <h1 className="text-4xl font-bold">Explore Our Homes</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {mockData.map((number) => (
          <HomesListingCard key={number} number={number} />
        ))}
      </div>
    </div>
  );
};

export default HomeGrids;
