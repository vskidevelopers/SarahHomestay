const RoomSection = () => {
  const handleBookFeatured = () => {
    alert("booking of featured rooms is still under maintanence");
  };
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
            src="https://scontent.fnbo10-1.fna.fbcdn.net/v/t39.30808-6/449124185_792461506415899_7889414116639670666_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=X8Zj1V49uAAQ7kNvgGdzipA&_nc_zt=23&_nc_ht=scontent.fnbo10-1.fna&_nc_gid=A8fdgkWdlILJyXr_3XGtMod&oh=00_AYBxzhcDvK7jKsYukpCWcg4sE9L7I-OyYM9BGkz4gtkDGA&oe=6792A380"
            alt="Lake-view King Size Room"
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
            <button
              onClick={handleBookFeatured}
              className="text-white bg-gray-700 hover:bg-gray-900 px-6 py-3 rounded-lg text-lg font-medium"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomSection;
