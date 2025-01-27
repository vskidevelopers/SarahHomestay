import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardFooter } from "../ui/card";
import { ScrollArea } from "../ui/scroll-area";
import { useForm } from "react-hook-form";
import { useRoomFunctions, useUploadImage } from "@/utils/firebase";

function AddRoomForm() {
    const [loading, setLoading] = useState(false);
    const [imageUploadStatus, setImageUploadStatus] = useState(null);
    const [roomPhoto, setRoomPhoto] = useState(null);

    const { uploadImage } = useUploadImage()
    const { addRoom } = useRoomFunctions()
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const localHotelProfileId = localStorage.getItem("hotelId")

    const currentDate = new Date();
    const options = {
        year: "numeric",
        month: "short",
        day: "2-digit",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        timeZoneName: "short",
    };

    const formattedDate = currentDate.toLocaleString("en-US", options);

    const handleImageUpload = async (event) => {
        const file = event.target.files[0];
        if (file) {
            try {
                setImageUploadStatus("pending");
                const bucketName = "rooms/"
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
        const amenitiesArray = data?.amenities.split(',').map((amenity) => amenity.trim());
        // Send the data to your backend API or handle it as needed
        const roomType = data?.roomType
        try {
            if (roomPhoto) {
                const roomData = { ...data, amenities: amenitiesArray, roomPhoto, createdAt: formattedDate };
                console.log("room data for submission >> ", roomData);

                const addRoomResponse = await addRoom(roomData, localHotelProfileId, roomType)
                console.log("add room response >> ", addRoomResponse);
                reset()
                setLoading(false)
            } else {
                alert("Please upload a photo")
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
            <ScrollArea className="h-[80vh]">
                <Card className="w-full max-w-2xl">
                <form onSubmit={handleSubmit(onSubmit)}>
    <CardHeader>
        <CardDescription>Fill out the details below to add a new home.</CardDescription>
    </CardHeader>
    <CardContent className="grid gap-4">
        {/* Home Image */}
        <div className="grid gap-2">
            <label htmlFor="homeImage">Home Image</label>
            <input type="file" id="homeImage" onChange={handleImageUpload} />
            {errors?.homeImage && (
                <span className="text-red-500">This field is required</span>
            )}
        </div>

        {/* Unit Type */}
        <div className="grid gap-2">
            <label htmlFor="unitType">Unit Type</label>
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

        {/* Name of the Home */}
        <div className="grid gap-2">
            <label htmlFor="homeName">Name of the Home</label>
            <input
                id="homeName"
                type="text"
                placeholder="Name of the Home"
                {...register("homeName", { required: true })}
            />
            {errors?.homeName && (
                <span className="text-red-500">This field is required</span>
            )}
        </div>

        {/* Location */}
        <div className="grid gap-2">
            <label htmlFor="location">Location</label>
            <input
                id="location"
                type="text"
                placeholder="Location"
                {...register("location", { required: true })}
            />
            {errors?.location && (
                <span className="text-red-500">This field is required</span>
            )}
        </div>

        {/* Price Per Night */}
        <div className="grid gap-2">
            <label htmlFor="priceNight">Price Per Night</label>
            <input
                id="priceNight"
                type="number"
                placeholder="Price Per Night"
                {...register("priceNight", { required: true })}
            />
            {errors?.priceNight && (
                <span className="text-red-500">This field is required</span>
            )}
        </div>

        {/* Price Per Month */}
        <div className="grid gap-2">
            <label htmlFor="priceMonth">Price Per Month</label>
            <input
                id="priceMonth"
                type="number"
                placeholder="Price Per Month"
                {...register("priceMonth", { required: true })}
            />
            {errors?.priceMonth && (
                <span className="text-red-500">This field is required</span>
            )}
        </div>

        {/* Home Description */}
        <div className="grid gap-2">
            <label htmlFor="description">Home Description</label>
            <textarea
                id="description"
                placeholder="Describe the home"
                rows="3"
                {...register("description", { required: true })}
            ></textarea>
            {errors?.description && (
                <span className="text-red-500">This field is required</span>
            )}
        </div>

        {/* Amenities (Text Input) */}
        <div className="grid gap-2">
            <label htmlFor="amenities">Amenities (separate by commas)</label>
            <input
                id="amenities"
                type="text"
                placeholder="e.g., Wi-Fi, Pool, Air Conditioning"
                {...register("amenities", { required: true, maxLength: 100 })}
            />
            {errors?.amenities && (
                <span className="text-red-500">This field is required</span>
            )}
            <span className="text-gray-500">Max 5 amenities, separate by commas.</span>
        </div>

        {/* Amenities Tags */}
        <div className="grid gap-2">
            <label>Amenities Tags</label>
            <div className="grid grid-cols-2 gap-2">
                <label>
                    <input type="checkbox" {...register("amenitiesTags")} value="Bed" /> Bed
                </label>
                <label>
                    <input type="checkbox" {...register("amenitiesTags")} value="Bath" /> Bath
                </label>
                <label>
                    <input type="checkbox" {...register("amenitiesTags")} value="WiFi" /> WiFi
                </label>
                <label>
                    <input type="checkbox" {...register("amenitiesTags")} value="TV" /> TV
                </label>
                <label>
                    <input type="checkbox" {...register("amenitiesTags")} value="Gym" /> Gym
                </label>
                <label>
                    <input type="checkbox" {...register("amenitiesTags")} value="Parking" /> Parking
                </label>
                <label>
                    <input type="checkbox" {...register("amenitiesTags")} value="Pool" /> Pool
                </label>
                <label>
                    <input type="checkbox" {...register("amenitiesTags")} value="Air Conditioning" /> Air Conditioning
                </label>
            </div>
        </div>

        {/* Ratings */}
        <div className="grid gap-2">
            <label htmlFor="ratings">Ratings</label>
            <input
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
        >
            {loading ? "Submitting..." : "Add Home"}
        </button>
    </CardFooter>
</form>

                </Card>
            </ScrollArea>
        </div>
    );
}

export default AddRoomForm;
