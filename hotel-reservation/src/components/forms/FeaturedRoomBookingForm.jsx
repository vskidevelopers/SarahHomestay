import { useForm } from "react-hook-form";

function FeaturedRoomBookingForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    
      const onSubmit = (data) => {
        console.log("Form Data:", data);
        alert("Booking Submitted!");
      };
    
      return (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="max-w-2xl mx-auto bg-white shadow-lg p-6 rounded-2xl space-y-6"
        >
          <h2 className="text-2xl font-bold text-center text-gray-800">
            Room Booking Form
          </h2>
    
          {/* Name */}
          <div className="flex flex-col">
            <label className="text-gray-700 font-medium">Full Name</label>
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              className={`border rounded-lg px-4 py-2 ${
                errors.name ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Enter your full name"
            />
            {errors.name && (
              <span className="text-red-500 text-sm mt-1">
                {errors.name.message}
              </span>
            )}
          </div>
    
          {/* Email */}
          <div className="flex flex-col">
            <label className="text-gray-700 font-medium">Email Address</label>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email format",
                },
              })}
              className={`border rounded-lg px-4 py-2 ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Enter your email address"
            />
            {errors.email && (
              <span className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </span>
            )}
          </div>
    
          {/* Phone Number */}
          <div className="flex flex-col">
            <label className="text-gray-700 font-medium">Phone Number</label>
            <input
              type="tel"
              {...register("phone", {
                required: "Phone number is required",
                pattern: {
                  value: /^[0-9]{10,15}$/,
                  message: "Invalid phone number",
                },
              })}
              className={`border rounded-lg px-4 py-2 ${
                errors.phone ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Enter your phone number"
            />
            {errors.phone && (
              <span className="text-red-500 text-sm mt-1">
                {errors.phone.message}
              </span>
            )}
          </div>
    
          {/* Check-In Date */}
          <div className="flex flex-col">
            <label className="text-gray-700 font-medium">Check-In Date</label>
            <input
              type="date"
              {...register("checkInDate", { required: "Check-in date is required" })}
              className={`border rounded-lg px-4 py-2 ${
                errors.checkInDate ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.checkInDate && (
              <span className="text-red-500 text-sm mt-1">
                {errors.checkInDate.message}
              </span>
            )}
          </div>
    
          {/* Check-Out Date */}
          <div className="flex flex-col">
            <label className="text-gray-700 font-medium">Check-Out Date</label>
            <input
              type="date"
              {...register("checkOutDate", { required: "Check-out date is required" })}
              className={`border rounded-lg px-4 py-2 ${
                errors.checkOutDate ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.checkOutDate && (
              <span className="text-red-500 text-sm mt-1">
                {errors.checkOutDate.message}
              </span>
            )}
          </div>
    
          {/* Number of Guests */}
          <div className="flex flex-col">
            <label className="text-gray-700 font-medium">Number of Guests</label>
            <input
              type="number"
              {...register("guests", {
                required: "Number of guests is required",
                min: { value: 1, message: "At least 1 guest is required" },
              })}
              className={`border rounded-lg px-4 py-2 ${
                errors.guests ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Enter number of guests"
            />
            {errors.guests && (
              <span className="text-red-500 text-sm mt-1">
                {errors.guests.message}
              </span>
            )}
          </div>
    
          {/* Special Requirements */}
          <div className="flex flex-col">
            <label className="text-gray-700 font-medium">
              Special Requirements / Notes
            </label>
            <textarea
              {...register("notes")}
              className="border rounded-lg px-4 py-2 border-gray-300"
              placeholder="Add any additional notes (optional)"
              rows="4"
            ></textarea>
          </div>
    
          {/* Submit Button */}
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
          >
            Submit Booking
          </button>
        </form>
      );    
}

export default FeaturedRoomBookingForm
