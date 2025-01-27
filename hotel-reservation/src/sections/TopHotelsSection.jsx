import TopHotelsCarousel from "@/components/TopHotelsCarousel";
import React from "react";
import "./topHotels.css";

function TopHotelsSection() {
  const OPTIONS = { loop: true };

  const SLIDES = [
    {
      title: "Kilimani 1 Bedrooms",
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/sarah-homestay.firebasestorage.app/o/web%20assets%2FIMG-20250122-WA0019.jpg?alt=media&token=a89b674d-3402-4f79-8bc8-76c5764ffeb1",
      description: "A luxury experience.",
    },
    {
      title: "Kilimani Studios",
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/sarah-homestay.firebasestorage.app/o/web%20assets%2FIMG-20250124-WA0012.jpg?alt=media&token=396b247e-5f8e-4457-8af0-61a22ae2c3af",
      description: "Stunning City views.",
    },
    {
      title: "Nanyuki Villas",
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/sarah-homestay.firebasestorage.app/o/web%20assets%2FIMG-20241028-WA0001.jpg?alt=media&token=695f725c-9d2b-4b75-a644-66aec53c46ed",
      description: "Relax, You are Home",
    },
  ];

  return (
    <div className="py-12 ">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-extrabold text-gray-900">
          <span className="relative inline-block">
            <span className="absolute inset-0 bg-yellow-300 h-2/3 w-full -skew-y-2"></span>
            <span className="relative">Our Categories</span>
          </span>
        </h2>
        <p className="text-lg text-gray-500 mt-3">
          Explore our hand-picked selection of premium homes
        </p>
      </div>
      <TopHotelsCarousel slides={SLIDES} options={OPTIONS} />
    </div>
  );
}

export default TopHotelsSection;
