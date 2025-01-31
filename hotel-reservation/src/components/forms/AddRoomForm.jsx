import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardFooter,
} from "../ui/card";
import { ScrollArea } from "../ui/scroll-area";
import { useForm } from "react-hook-form";
import { useHomeFunctions, useUploadImage } from "@/firebase/firebase";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Progress } from "../ui/progress";
import { useToast } from "@/hooks/use-toast";

function AddRoomForm() {
  const [loading, setLoading] = useState(false);
  const [imageUploadStatus, setImageUploadStatus] = useState("idle");
  const [roomPhoto, setRoomPhoto] = useState(null);
  const { toast } = useToast();

  const { uploadImage, imageUploadProgress } = useUploadImage();
  const { postHome } = useHomeFunctions();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const localHotelProfileId = localStorage.getItem("hotelId");

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    if (file) {
      try {
        setImageUploadStatus("pending");
        const bucketName = "Homes/";
        const uploadResult = await uploadImage(file, bucketName);

        if (uploadResult?.status === "success") {
          console.log("uploadResult >> ", uploadResult);

          setRoomPhoto(uploadResult.data);
          setImageUploadStatus("success");
        } else {
          setImageUploadStatus("error");
          console.log("uploadResult >> ", uploadResult);
        }
      } catch (error) {
        console.error("Upload error: ", error);
        setImageUploadStatus("error");
      }
    }
  };

  const onSubmit = async (data) => {
    setLoading(true);

    // Process the form data, including imageURL and amenities as an array
    const amenitiesArray = data?.amenities
      .split(",")
      .map((amenity) => amenity.trim());
    // Send the data to your backend API or handle it as needed
    const roomType = data?.roomType;
    try {
      if (roomPhoto) {
        const roomData = {
          ...data,
          amenities: amenitiesArray,
          roomPhoto,
        };
        console.log("room data for submission >> ", roomData);

        const addRoomResponse = await postHome(
          roomData,
          localHotelProfileId,
          roomType
        );
        console.log("add room response >> ", addRoomResponse);
        toast({
          title: "Home Added Successfully!",
          description: "The new home has been added to the listings.",
        });

        reset();
        setLoading(false);
      } else {
        toast({
          title: "Photo Upload Required!",
          description: "Please upload a photo to proceed.",
          variant: "destructive", // Optional: Makes it stand out if using shadcn/ui
        });
      }
    } catch (error) {
      console.log("ann errror occured >> ", error);
      setLoading(false);
    }

    setLoading(false);
    reset();
  };

  return (
    <div className="flex w-full justify-center items-center">
      <ScrollArea className="h-[80vh] w-full">
        <Card className="">
          <form onSubmit={handleSubmit(onSubmit)}>
            <CardHeader>
              <CardDescription>
                Fill out the details below to add a new home.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              {/* Home Image */}
              <div className="grid gap-2">
                <Label htmlFor="homeImage">Home Image</Label>
                <Input
                  type="file"
                  id="homeImage"
                  onChange={handleImageUpload}
                />
                {errors?.homeImage && (
                  <span className="text-red-500">This field is required</span>
                )}
                {imageUploadStatus === "pending" && (
                  <Progress
                    value={imageUploadProgress}
                    className="w-[80%] mt-2"
                  />
                )}
              </div>

              {/* Unit Type and Name of the Home */}
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="unitType">Unit Type</Label>
                  <select
                    id="unitType"
                    {...register("unitType", { required: true })}
                    className="border border-gray-300 rounded px-2 py-1"
                  >
                    <option value="">Select Unit Type</option>
                    <option value="studio">Studio</option>
                    <option value="1_bedroom">1 Bedroom</option>
                    <option value="2_bedroom">2 Bedroom</option>
                    <option value="villa">Villa</option>
                  </select>
                  {errors?.unitType && (
                    <span className="text-red-500">This field is required</span>
                  )}
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="homeName">Name of the Home</Label>
                  <Input
                    id="homeName"
                    type="text"
                    placeholder="Name of the Home"
                    {...register("homeName", { required: true })}
                  />
                  {errors?.homeName && (
                    <span className="text-red-500">This field is required</span>
                  )}
                </div>
              </div>
              {/* Location */}
              <div className="grid gap-2">
                <Label htmlFor="location">Location</Label>
                <select
                  id="location"
                  className="w-full border rounded p-2"
                  {...register("location", { required: true })}
                >
                  <option value="">Select a location</option>
                  <option value="Nanyuki">Nanyuki</option>
                  <option value="Kilimani">Kilimani</option>
                </select>
                {errors?.location && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>

              {/* Price Per Night and Price Per Month */}
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="priceNight">Price Per Night</Label>
                  <Input
                    id="priceNight"
                    type="number"
                    placeholder="Price Per Night"
                    {...register("priceNight", { required: true })}
                  />
                  {errors?.priceNight && (
                    <span className="text-red-500">This field is required</span>
                  )}
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="priceMonth">Price Per Month</Label>
                  <Input
                    id="priceMonth"
                    type="number"
                    placeholder="Price Per Month"
                    {...register("priceMonth", { required: true })}
                  />
                  {errors?.priceMonth && (
                    <span className="text-red-500">This field is required</span>
                  )}
                </div>
              </div>

              {/* Home Description */}
              <div className="grid gap-2">
                <Label htmlFor="description">Home Description</Label>
                <Input
                  id="description"
                  as="textarea"
                  placeholder="Describe the home"
                  rows="3"
                  {...register("description", { required: true })}
                />
                {errors?.description && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>

              {/* Amenities (Text Input) */}
              <div className="grid gap-2">
                <Label htmlFor="amenities">
                  Amenities (separate by commas)
                </Label>
                <Input
                  id="amenities"
                  type="text"
                  placeholder="e.g., Wi-Fi, Pool, Air Conditioning"
                  {...register("amenities", { required: true, maxLength: 100 })}
                />
                {errors?.amenities && (
                  <span className="text-red-500">This field is required</span>
                )}
                <span className="text-gray-500">
                  Max 5 amenities, separate by commas.
                </span>
              </div>

              {/* Amenities Tags */}
              <div className="grid gap-2">
                <Label>Amenities Tags Icons</Label>
                <div className="grid grid-cols-2 gap-2">
                  <label>
                    <input
                      type="checkbox"
                      {...register("amenitiesTags")}
                      value="Bed"
                    />{" "}
                    Bed
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      {...register("amenitiesTags")}
                      value="Bath"
                    />{" "}
                    Bath
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      {...register("amenitiesTags")}
                      value="WiFi"
                    />{" "}
                    WiFi
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      {...register("amenitiesTags")}
                      value="TV"
                    />{" "}
                    TV
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      {...register("amenitiesTags")}
                      value="Gym"
                    />{" "}
                    Gym
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      {...register("amenitiesTags")}
                      value="Parking"
                    />{" "}
                    Parking
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      {...register("amenitiesTags")}
                      value="Pool"
                    />{" "}
                    Pool
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      {...register("amenitiesTags")}
                      value="Air Conditioning"
                    />{" "}
                    Air Conditioning
                  </label>
                </div>
              </div>

              {/* Ratings */}
              <div className="grid gap-2">
                <Label htmlFor="ratings">Ratings</Label>
                <Input
                  id="ratings"
                  type="number"
                  min="1"
                  max="5"
                  placeholder="Rating (1-5)"
                  {...register("ratings", { required: true })}
                />
                {errors?.ratings && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
            </CardContent>
            <CardFooter>
              <button
                className="border border-sky-500 rounded w-full py-2 hover:bg-sky-500"
                type="submit"
                disabled={loading}
              >
                Add Home
              </button>
            </CardFooter>
          </form>
        </Card>
      </ScrollArea>
    </div>
  );
}

export default AddRoomForm;
