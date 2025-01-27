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
    <div className="md:col-span-2">
          <label className="block text-gray-700 font-medium mb-1">Name</label>
          <input
            type="text"
            {...register("name", { required: "Name is required" })}
            className="w-full p-2 border border-gray-300 rounded-lg"
            placeholder="Enter your name"
          />
          {errors.name && (
            <span className="text-red-500 text-sm">{errors.name.message}</span>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">Email</label>
          <input
            type="email"
            {...register("email", { required: "Email is required" })}
            className="w-full p-2 border border-gray-300 rounded-lg"
            placeholder="Enter your email"
          />
          {errors.email && (
            <span className="text-red-500 text-sm">{errors.email.message}</span>
          )}
        </div>

        {/* Phone Number */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            {...register("phone", {
              required: "Phone number is required",
              pattern: {
                value: /^[0-9]{10}$/,
                message: "Enter a valid 10-digit phone number",
              },
            })}
            className="w-full p-2 border border-gray-300 rounded-lg"
            placeholder="Enter your phone number"
          />
          {errors.phone && (
            <span className="text-red-500 text-sm">{errors.phone.message}</span>
          )}
        </div>

        {/* Check-in Date */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Check-in Date
          </label>
          <input
            type="date"
            {...register("checkIn", { required: "Check-in date is required" })}
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
          {errors.checkIn && (
            <span className="text-red-500 text-sm">{errors.checkIn.message}</span>
          )}
        </div>

        {/* Check-out Date */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Check-out Date
          </label>
          <input
            type="date"
            {...register("checkOut", { required: "Check-out date is required" })}
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
          {errors.checkOut && (
            <span className="text-red-500 text-sm">
              {errors.checkOut.message}
            </span>
          )}
        </div>

        {/* Number of Guests */}
        <div className="md:col-span-2">
          <label className="block text-gray-700 font-medium mb-1">
            Number of Guests
          </label>
          <input
            type="number"
            {...register("guests", { required: "Number of guests is required" })}
            className="w-full p-2 border border-gray-300 rounded-lg"
            placeholder="Enter number of guests"
          />
          {errors.guests && (
            <span className="text-red-500 text-sm">
              {errors.guests.message}
            </span>
          )}
        </div>

{/* Room Type */}
<div className="md:col-span-2">
  <label className="block text-gray-700 font-medium mb-1">
    Room Type
  </label>
  <select
    {...register("roomType")}
    className="w-full p-2 border border-gray-300 rounded-lg bg-gray-100 cursor-not-allowed"
    disabled
     defaultValue="studio"
  >
    <option value="">Select a room type</option>
    <option value="studio">Studio</option>
    <option value="one-bedroom">One Bedroom</option>
    <option value="villa">Villa</option>
  </select>
</div>


        {/* Extra Notes */}
        <div className="md:col-span-2">
          <label className="block text-gray-700 font-medium mb-1">
            Special Requirements/Notes
          </label>
          <textarea
            {...register("notes")}
            className="w-full p-2 border border-gray-300 rounded-lg"
            placeholder="Enter any special requests or notes"
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
