import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "../ui/scroll-area";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "../ui/card";
import { useForm } from "react-hook-form";
import { Label } from "../ui/label";
import { useBookingFunctions } from "@/firebase/firebase";
import { useToast } from "@/hooks/use-toast";
import { useParams } from "react-router-dom";

const HomeBookingForm = ({ home }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { homeId } = useParams();
  const { toast } = useToast();
  const { postBooking } = useBookingFunctions();

  const onSubmit = async (data) => {
    console.log("booking data >> ", data); // Handle form submission (e.g., send data to an API)
    try {
      const postBookingResponse = await postBooking({
        ...data,
        homeId: homeId,
        unitType: home?.unitType,
      });
      if (postBookingResponse?.success) {
        toast({
          title: "✅Success!",
          description: `${postBookingResponse?.message}`,
        });
        reset();
      } else {
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: `${postBookingResponse?.message}`,
        });
      }
    } catch (error) {
      console.error("error posting a booking >> ", error);
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: `${error}`,
      });
      reset();
    }
  };

  return (
    <div className="flex w-full justify-center items-center">
      <ScrollArea className="h-[80vh]">
        <Card className="w-full max-w-2xl">
          <form onSubmit={handleSubmit(onSubmit)}>
            <CardHeader>
              <CardTitle>Book Your Stay</CardTitle>
              <CardDescription>
                Fill out the details below to book your desired home.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              {/* Full Name */}
              <div className="grid gap-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Full Name"
                  className="w-full"
                  {...register("name", { required: true })}
                />
                {errors?.name && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>

              {/* Phone Number and Email */}
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Phone Number"
                    {...register("phone", { required: true })}
                  />
                  {errors?.phone && (
                    <span className="text-red-500">This field is required</span>
                  )}
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Email Address"
                    {...register("email", { required: true })}
                  />
                  {errors?.email && (
                    <span className="text-red-500">This field is required</span>
                  )}
                </div>
              </div>

              {/* Check-In and Check-Out Dates */}
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="checkIn">Check-In Date</Label>
                  <Input
                    id="checkIn"
                    type="date"
                    {...register("checkIn", { required: true })}
                  />
                  {errors?.checkIn && (
                    <span className="text-red-500">This field is required</span>
                  )}
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="checkOut">Check-Out Date</Label>
                  <Input
                    id="checkOut"
                    type="date"
                    {...register("checkOut", { required: true })}
                  />
                  {errors?.checkOut && (
                    <span className="text-red-500">This field is required</span>
                  )}
                </div>
              </div>

              {/* Number of Guests and Unit Type */}
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="guests">Number of Guests</Label>
                  <Input
                    id="guests"
                    type="number"
                    placeholder="Number of Guests"
                    min="1"
                    {...register("guests", { required: true })}
                  />
                  {errors?.guests && (
                    <span className="text-red-500">This field is required</span>
                  )}
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="unitType">Unit Type</Label>
                  <Input
                    id="unitType"
                    value={home?.unitType}
                    disabled
                    className="bg-gray-50"
                  />
                </div>
              </div>

              {/* Additional Notes */}
              <div className="grid gap-2">
                <Label htmlFor="notes">Additional Notes</Label>
                <Input
                  id="notes"
                  as="textarea"
                  placeholder="Any special requests or notes?"
                  rows="3"
                  {...register("notes")}
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button
                className="border border-sky-500 rounded w-full py-2 hover:bg-sky-500"
                type="submit"
              >
                Submit Booking
              </Button>
            </CardFooter>
          </form>
        </Card>
      </ScrollArea>
    </div>
  );
};

export default HomeBookingForm;
