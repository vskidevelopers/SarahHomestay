import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const HomeBookingForm = ({ unitType = "Luxury Suite" }) => {
  return (
    <form className="w-full space-y-4">
      <Input placeholder="Full Name" className="w-full" />

      <div className="grid grid-cols-2 gap-4">
        <Input type="tel" placeholder="Phone Number" />
        <Input type="email" placeholder="Email Address" />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Input type="date" placeholder="Check In" />
        <Input type="date" placeholder="Check Out" />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Input type="number" placeholder="Number of Guests" min="1" />
        <Input value={unitType} disabled className="bg-gray-50" />
      </div>

      <Button className="w-full" size="lg">
        Book Now
      </Button>
    </form>
  );
};

export default HomeBookingForm;
