import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const locations = [
  {
    value: "nanyuki",
    label: "Nanyuki",
  },
  {
    value: "kilimani",
    label: "Kilimani",
  },
];
const unitTypes = [
  {
    value: "studio",
    label: "Studio",
  },
  {
    value: "1bedroom",
    label: "1 Bedroom",
  },
  {
    value: "2bedroom",
    label: "2 Bedroom",
  },
  {
    value: "villa",
    label: "Villa",
  },
];

const ReservationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [location, setLocation] = React.useState("");
  const [unitType, setUnitType] = React.useState("");
  const [isPopoverOpen, setIsPopoverOpen] = React.useState(false);
  const [isUnitPopoverOpen, setIsUnitPopoverOpen] = React.useState(false);

  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log("reservation data >> ", { ...data, location });
    navigate(`/explore?type=${location}`);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mt-8 p-6 bg-white bg-opacity-90 rounded-lg shadow-lg w-full max-w-5xl flex flex-col md:flex-row justify-between items-center gap-4"
    >
      
{/* Location and Unit Type Inputs */}
<div className="flex flex-row gap-4 w-full">
  {/* Location Input */}
  <div className="flex flex-col w-full md:w-auto">
    <label className="text-gray-700">Select Location</label>
    <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={isPopoverOpen}
          className="w-full md:w-[200px] justify-between"
        >
          {location
            ? locations.find((loc) => loc.value === location)?.label
            : "Select location..."}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full md:w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search location..." />
          <CommandList>
            <CommandEmpty>No location found.</CommandEmpty>
            <CommandGroup>
              {locations.map((loc) => (
                <CommandItem
                  key={loc.value}
                  value={loc.value}
                  onSelect={(currentValue) => {
                    setLocation(currentValue === location ? "" : currentValue);
                    setIsPopoverOpen(false);
                  }}
                >
                  {loc.label}
                  <Check
                    className={cn(
                      "ml-auto",
                      location === loc.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  </div>

  {/* Unit Type Input */}
  <div className="flex flex-col w-full md:w-auto">
    <label className="text-gray-700">Unit Type</label>
    <Popover open={isUnitPopoverOpen} onOpenChange={setIsUnitPopoverOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={isUnitPopoverOpen}
          className="w-full md:w-[200px] justify-between"
        >
          {unitType
            ? unitTypes.find((unit) => unit.value === unitType)?.label
            : "Select Unit Type..."}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full md:w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search Unit..." />
          <CommandList>
            <CommandEmpty>No Unit Type found.</CommandEmpty>
            <CommandGroup>
              {unitTypes.map((unit) => (
                <CommandItem
                  key={unit.value}
                  value={unit.value}
                  onSelect={(currentValue) => {
                    setUnitType(currentValue === unitType ? "" : currentValue);
                    setIsPopoverOpen(false);
                  }}
                >
                  {unit.label}
                  <Check
                    className={cn(
                      "ml-auto",
                      unitType === unit.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  </div>
</div>


      {/* Check-in Date Input */}
      <div className="flex flex-col w-full md:w-auto">
        <label className="text-gray-700">Check-in Date</label>
        <input
          type="date"
          {...register("checkInDate", { required: true })}
          className="px-4 py-2 rounded-md border border-gray-300 w-full"
        />
        {errors.checkInDate && (
          <span className="text-red-500">Check-in date is required</span>
        )}
      </div>

      {/* Check-out Date Input */}
      <div className="flex flex-col w-full md:w-auto">
        <label className="text-gray-700">Check-out Date</label>
        <input
          type="date"
          {...register("checkOutDate", { required: true })}
          className="px-4 py-2 rounded-md border border-gray-300 w-full"
        />
        {errors.checkOutDate && (
          <span className="text-red-500">Check-out date is required</span>
        )}
      </div>

      {/* Submit Button */}
      <div className="w-full md:w-auto">
        <button
          type="submit"
          className="bg-black text-white px-6 py-2 rounded-md w-full hover:bg-gray-800"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default ReservationForm;
