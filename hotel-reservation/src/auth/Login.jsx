import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

import { useState } from "react";

import { useNavigate } from "react-router-dom";
import { useAuthenticationFunctions } from "@/utils/firebase";

export default function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const navigate = useNavigate();
    const { login } = useAuthenticationFunctions();
    const [loading, setLoading] = useState(false);

    const onSubmit = async (data) => {
        setLoading(true);
        console.log(data); // Handle form submission logic here
        try {
            const loginResponse = await login(data?.email, data?.password);
            console.log("loginResponse >> ", loginResponse);
            if (loginResponse?.success) {
                setLoading(false);
                alert("Login successfull");
                navigate("/admin");
            } else {
                console.error("loginResponse >> ", loginResponse);

                alert("error trying to login");
                setLoading(false);
            }
        } catch (error) {
            console.log(`Error in submit handler: ${error}`);
            setLoading(false);
        }
    };

    return (
        <div className="flex w-screen h-screen justify-center items-center bg-[url('https://firebasestorage.googleapis.com/v0/b/sarah-homestay.firebasestorage.app/o/web%20assets%2FIMG-20250124-WA0004.jpg?alt=media&token=6808a541-5250-4a10-88b9-dff49e89f87c')] bg-cover bg-center">
          <Card className="w-full max-w-sm bg-white shadow-lg rounded-2xl">
            <form onSubmit={handleSubmit(onSubmit)}>
              <CardHeader>
                <CardTitle className="text-2xl text-center font-bold text-gray-900">
                  Sarah Homestay Login
                </CardTitle>
                <CardDescription className="text-center text-gray-600">
                  Access your rental management dashboard.
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-6 p-6">
                <div className="grid gap-2">
                  <label htmlFor="email" className="font-medium text-gray-800">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your-email@example.com"
                    {...register("email", { required: true })}
                  />
                  {errors.email && (
                    <span className="text-sm text-red-500">Email is required</span>
                  )}
                </div>
                <div className="grid gap-2">
                  <label htmlFor="password" className="font-medium text-gray-800">
                    Password
                  </label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    {...register("password", { required: true })}
                  />
                  {errors.password && (
                    <span className="text-sm text-red-500">Password is required</span>
                  )}
                </div>
              </CardContent>
              <CardFooter className="flex flex-col items-center gap-4 p-6">
                <Button
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg"
                  type="submit"
                >
                  {loading ? "Logging in..." : "Log in"}
                </Button>

              </CardFooter>
            </form>
          </Card>
        </div>
      );
}
