import React from "react";

import RoomTypeCard from "@/components/RoomTypeCard";

export const roomTypes = [
  {
    id: 1,
    title: "Studio Homes",
    imageUrl:
      "https://scontent.fnbo10-1.fna.fbcdn.net/v/t39.30808-6/449215247_792461526415897_5776204812862345309_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=t9gYAfZUmnEQ7kNvgGdkPXf&_nc_zt=23&_nc_ht=scontent.fnbo10-1.fna&_nc_gid=A_A2aOZHWQXLzPtaJcKmF2i&oh=00_AYB5tTtPNqKKTY0DfOnEmaFfDFhFSgTqaTlhcnwoH-OA5g&oe=6792A7C6",
    price: "Ksh 4,500/night",
    roomType: "Studio",
  },
  {
    id: 2,
    title: "1 Bedroom Homes",
    imageUrl:
      "https://scontent.fnbo10-1.fna.fbcdn.net/v/t39.30808-6/449214329_794899642838752_6470155883780976995_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=pYNN8VYpQp0Q7kNvgHLNb3V&_nc_zt=23&_nc_ht=scontent.fnbo10-1.fna&_nc_gid=AFjl8wSFxvC-cZz11DVd_HD&oh=00_AYADq0a1TcnSYxqpCvW1i2LQJdDu5E6IhfdHlWgaYT0TCw&oe=6792AEC8",
    price: "Ksh 6,500/night",
    roomType: "1 bed Homes",
  },
  {
    id: 3,
    title: "2 Bedroom Homes",
    imageUrl:
      "https://scontent.fnbo10-1.fna.fbcdn.net/v/t39.30808-6/448878807_789001623428554_9020769618283150796_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=t1bKZUlU0MkQ7kNvgECqaMD&_nc_zt=23&_nc_ht=scontent.fnbo10-1.fna&_nc_gid=AKKwXB4ftWjegCPmjIyH1I_&oh=00_AYBRzgKobBy6MPsfp9ntrduDw4wBGTJZXrkfgxa7kio0ZA&oe=6792A9FB",
    price: "Ksh 8,500 /night",
    roomType: "family",
  },
  {
    id: 4,
    title: "Lux Room",
    imageUrl:
      "https://images.pexels.com/photos/2506990/pexels-photo-2506990.jpeg",
    price: "coming soon",
    roomType: "lux",
  },
];

function RoomTypes() {
  return (
    <div>
      {/* Header Section */}
      <div className="h-32 md:h-48 flex flex-col justify-center items-center before:absolute before:content-[''] before:bg-emerald-50 before:rounded-full before:h-96 before:w-96 before:lg:h-[1200px] before:lg:w-[1200px] before:-z-10 before:left-1/2 before:top-0 before:transform before:translate-x-[-50%]">
        <h5 className="font-sans text-xl text-gray-600">Our Rooms</h5>
        <h1 className="font-serif text-5xl font-extrabold text-gray-900">
          <span className="relative inline-block">
            <span className="absolute inset-0 bg-yellow-300 h-2/3 w-full skew-y-2"></span>
            <span className="relative">Types of Rooms</span>
          </span>
        </h1>
      </div>

      {/* Features Decorative Section */}
      <div className="relative bg-emerald-50 py-16">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-50 to-white -z-10"></div>
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-lg text-gray-600">
            Explore our unique room options, crafted to provide comfort and
            luxury for every type of traveler.
          </p>
        </div>
      </div>

      {/* Rooms Section with Circular Blue Decoration */}
      <div className="relative container mx-auto">
        {/* Circular Blue Decoration */}

        {/* Room Cards Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 lg:p-16">
          <div className="absolute -z-10 top-[-100px] left-1/2 transform -translate-x-1/2 bg-blue-200 rounded-full h-[500px] w-[500px] lg:h-[700px] lg:w-[700px]"></div>
          {roomTypes.map((room, index) => {
            const isLarge =
              (index % 2 === 0 && index < 2) || (index % 2 === 1 && index >= 2);

            return (
              <div key={room.id} className="lg:col-span-1">
                <RoomTypeCard
                  id={room.id}
                  title={room.title}
                  imageUrl={room.imageUrl}
                  price={room.price}
                  roomType={room.roomType}
                  small={!isLarge}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default RoomTypes;
