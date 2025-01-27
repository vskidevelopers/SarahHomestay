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
  className="max-w-2xl mx-auto bg-white shadow-lg p-6 rounded-2xl space-y-6 max-h-screen overflow-y-auto"
>
  <h2 className="text-2xl font-bold text-center text-gray-800">
    Room Booking Form
  </h2>

  {/* Name and Email */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div>
      <label className="block text-gray-700 font-medium mb-1" htmlFor="name">
        Name
      </label>
      <input
        {...register("name", { required: "Name is required" })}
        type="text"
        id="name"
        aria-label="Name"
        className="w-full p-2 border border-gray-300 rounded-lg"
        placeholder="Enter your name"
      />
      {errors.name && (
        <span className="text-sm text-red-600">{errors.name.message}</span>
      )}
    </div>

    <div>
      <label className="block text-gray-700 font-medium mb-1" htmlFor="email">
        Email
      </label>
      <input
        {...register("email", { required: "Email is required" })}
        type="email"
        id="email"
        aria-label="Email"
        className="w-full p-2 border border-gray-300 rounded-lg"
        placeholder="Enter your email"
      />
      {errors.email && (
        <span className="text-sm text-red-600">{errors.email.message}</span>
      )}
    </div>
  </div>

  {/* Phone Number */}
  <div>
    <label className="block text-gray-700 font-medium mb-1" htmlFor="phone">
      Phone Number
    </label>
    <input
      {...register("phone", { required: "Phone number is required" })}
      type="tel"
      id="phone"
      aria-label="Phone Number"
      className="w-full p-2 border border-gray-300 rounded-lg"
      placeholder="Enter your phone number"
    />
    {errors.phone && (
      <span className="text-sm text-red-600">{errors.phone.message}</span>
    )}
  </div>

  {/* Dates */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div>
      <label
        className="block text-gray-700 font-medium mb-1"
        htmlFor="checkIn"
      >
        Check-in Date
      </label>
      <input
        {...register("checkIn", { required: "Check-in date is required" })}
        type="date"
        id="checkIn"
        aria-label="Check-in Date"
        className="w-full p-2 border border-gray-300 rounded-lg"
      />
      {errors.checkIn && (
        <span className="text-sm text-red-600">{errors.checkIn.message}</span>
      )}
    </div>

    <div>
      <label
        className="block text-gray-700 font-medium mb-1"
        htmlFor="checkOut"
      >
        Check-out Date
      </label>
      <input
        {...register("checkOut", { required: "Check-out date is required" })}
        type="date"
        id="checkOut"
        aria-label="Check-out Date"
        className="w-full p-2 border border-gray-300 rounded-lg"
      />
      {errors.checkOut && (
        <span className="text-sm text-red-600">{errors.checkOut.message}</span>
      )}
    </div>
  </div>

  {/* Guests */}
  <div>
    <label
      className="block text-gray-700 font-medium mb-1"
      htmlFor="guests"
    >
      Number of Guests
    </label>
    <input
      {...register("guests", { required: "Number of guests is required" })}
      type="number"
      id="guests"
      aria-label="Number of Guests"
      className="w-full p-2 border border-gray-300 rounded-lg"
      placeholder="Enter number of guests"
    />
    {errors.guests && (
      <span className="text-sm text-red-600">{errors.guests.message}</span>
    )}
  </div>

  {/* Room Type */}
  <div>
    <label
      className="block text-gray-700 font-medium mb-1"
      htmlFor="roomType"
    >
      Room Type
    </label>
    <select
      {...register("roomType")}
      id="roomType"
      aria-label="Room Type"
      className="w-full p-2 border border-gray-300 rounded-lg bg-gray-100 cursor-not-allowed"
      disabled
      defaultValue="studio"
    >
      <option value="studio">Studio</option>
      <option value="one-bedroom">One Bedroom</option>
      <option value="villa">Villa</option>
    </select>
  </div>

  {/* Notes */}
  <div>
    <label
      className="block text-gray-700 font-medium mb-1"
      htmlFor="notes"
    >
      Special Requirements/Notes
    </label>
    <textarea
      {...register("notes")}
      id="notes"
      aria-label="Special Notes"
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
