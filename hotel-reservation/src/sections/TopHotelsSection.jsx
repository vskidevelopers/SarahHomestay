import TopHotelsCarousel from "@/components/TopHotelsCarousel";
import React from "react";
import "./topHotels.css";

function TopHotelsSection() {
  const OPTIONS = { loop: true };

  const SLIDES = [
    {
      title: "Kilimani 1 Bedrooms",
      imageUrl:
        "https://scontent.fnbo9-1.fna.fbcdn.net/v/t39.30808-6/449210207_794899509505432_6712595482820437597_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=sP4lvMtq_BgQ7kNvgEfPV3h&_nc_zt=23&_nc_ht=scontent.fnbo9-1.fna&_nc_gid=Ac_HNDOjIsQpkYNuX7bKx-Q&oh=00_AYBrxJYjuB262m2wycStOuEg60-VISn3AY8mX_CS8LytEg&oe=67928454",
      description: "A luxury experience.",
    },
    {
      title: "Kilimani Studios",
      imageUrl:
        "https://scontent.fnbo10-1.fna.fbcdn.net/v/t39.30808-6/448640822_789008196761230_3420697524755947412_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=wGZkCivzK3wQ7kNvgH1N9fr&_nc_zt=23&_nc_ht=scontent.fnbo10-1.fna&_nc_gid=AdJlGg4chz_FkKwttPJYbdj&oh=00_AYDrPxTfUu_kHy4Y0II-uEi02OgHNvkeFBUOoGBLXx0UJw&oe=67928380",
      description: "Stunning City views.",
    },
    {
      title: "Kilimani 2 Bedrooms",
      imageUrl:
        "https://scontent.fnbo10-1.fna.fbcdn.net/v/t39.30808-6/437089173_750706800591370_665872303567978995_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=IxbTGgQLyS4Q7kNvgEzFGuM&_nc_zt=23&_nc_ht=scontent.fnbo10-1.fna&_nc_gid=ARvTsItFAp3ssDRUHKtyIVP&oh=00_AYDjWN9q53j6ZlbA1p3szQL0L6euyIuAUOX00UMvExSUMA&oe=67928C2F",
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
