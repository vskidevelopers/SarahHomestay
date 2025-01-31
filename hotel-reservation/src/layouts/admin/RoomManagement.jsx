import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import AddRoomForm from "@/components/forms/AddRoomForm";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RotateCcw } from "lucide-react";

import { useEffect, useState } from "react";
import { useHomeFunctions } from "@/firebase/firebase";

function RoomManagement() {
  const { getHomesByUnitType, getHomes } = useHomeFunctions();

  const [roomsData, setRoomsData] = useState([]);

  const getAllHomes = async () => {
    const getHomesResponse = await getHomes();
    console.log("homes response >> ", getHomesResponse);

    setRoomsData(getHomesResponse?.data);
  };

  useEffect(() => {
    getAllHomes();
  }, []);

  console.log("roomsData >> ", roomsData);

  return (
    <div className="h-full  w-full ">
      <Tabs default-value="all">
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-2 ">
          <div className="grid auto-rows-max items-start gap-4 md:gap-8 sm:col-span-2">
            <div className="grid gap-4 sm:grid-cols-2 ">
              <Dialog>
                <Card
                  className="flex items-center justify-center h-full"
                  x-chunk="dashboard-05-chunk-0"
                >
                  <div className="w-full flex flex-col gap-4">
                    <CardHeader className="pb-3">
                      <CardTitle>Homes</CardTitle>
                      <CardDescription className="max-w-lg text-balance leading-relaxed">
                        Efficiently manage your rental homes with ease. From
                        listing properties and tracking bookings to overseeing
                        guest details and payments, Sarah Homestay provides the
                        tools you need to streamline operations and offer
                        exceptional experiences.
                      </CardDescription>
                    </CardHeader>
                    <CardFooter className="mt-auto">
                      <DialogTrigger asChild>
                        <Button>Add A Home</Button>
                      </DialogTrigger>
                    </CardFooter>

                    <DialogContent className="max-w-2xl">
                      <DialogHeader>
                        <DialogTitle className="text-center py-9">
                          Add A Home
                        </DialogTitle>
                      </DialogHeader>
                      <AddRoomForm />
                      {/* Add ew Single-Bed Room Form will be used here */}
                    </DialogContent>
                  </div>
                </Card>
              </Dialog>

              <div className="grid gap-4 sm:grid-cols-2">
                {roomsData?.length > 0 ? (
                  // Render room cards for each available room type
                  <div className="grid gap-4 sm:grid-cols-1">
                    <h2 className="text-2xl font-semibold text-center">
                      Homes Available
                    </h2>
                  </div>
                ) : (
                  // Show "No Rooms" message if no rooms are available
                  <div className="flex items-center justify-center h-full">
                    <h2 className="text-2xl font-semibold text-center">
                      No Homes
                    </h2>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="grid auto-rows-max items-start gap-4 md:gap-8 sm:col-span-2">
            <div className="flex items-center">
              <TabsList>
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="studio">Studio</TabsTrigger>
                <TabsTrigger value="1bedroom">1 Bedroom</TabsTrigger>
                <TabsTrigger value="2bedroom">2 Bedrooms</TabsTrigger>
                <TabsTrigger value="villa">Villa</TabsTrigger>
              </TabsList>
              <div className="ml-auto flex items-center gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  className="h-7 gap-1 text-sm"
                >
                  <RotateCcw className="h-3.5 w-3.5" />
                  <span className="sr-only sm:not-sr-only">Refresh</span>
                </Button>
              </div>
            </div>

            <TabsContent value="all">
              <Card x-chunk="dashboard-05-chunk-3">
                <CardHeader className="px-7">
                  <CardTitle>Home Listings</CardTitle>
                  <CardDescription>
                    Latest rental properties available on Sarah Homestay.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>#</TableHead>
                        <TableHead>Image</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead className="hidden sm:table-cell">
                          Location
                        </TableHead>
                        <TableHead className="hidden sm:table-cell">
                          Unit Type
                        </TableHead>
                        <TableHead className="hidden sm:table-cell">
                          Featured
                        </TableHead>
                        <TableHead className="text-right">
                          Price/Night
                        </TableHead>
                        <TableHead className="text-right">Ratings</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {roomsData.map((home, index) => (
                        <TableRow key={home.id}>
                          <TableCell>{index + 1}</TableCell>
                          <TableCell>
                            <img
                              src={home.roomPhoto}
                              alt={home.homeName}
                              className="w-12 h-12 rounded-md"
                            />
                          </TableCell>
                          <TableCell className="font-medium">
                            {home.homeName}
                          </TableCell>
                          <TableCell className="hidden sm:table-cell">
                            {home.location}
                          </TableCell>
                          <TableCell className="hidden sm:table-cell">
                            {home.unitType}
                          </TableCell>
                          <TableCell className="hidden sm:table-cell">
                            {home.featured ? (
                              <Badge className="text-xs" variant="secondary">
                                Yes
                              </Badge>
                            ) : (
                              <Badge className="text-xs" variant="outline">
                                No
                              </Badge>
                            )}
                          </TableCell>
                          <TableCell className="text-right">
                            Ksh {home.priceNight}
                          </TableCell>
                          <TableCell className="text-right">
                            {home.ratings} ★
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="studio">
              <Card x-chunk="dashboard-05-chunk-3">
                <CardHeader className="px-7">
                  <CardTitle>Studio Homes</CardTitle>
                  <CardDescription>
                    Latest studio rental properties available on Sarah Homestay.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>#</TableHead>
                        <TableHead>Image</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead className="hidden sm:table-cell">
                          Location
                        </TableHead>
                        <TableHead className="hidden sm:table-cell">
                          Unit Type
                        </TableHead>
                        <TableHead className="hidden sm:table-cell">
                          Featured
                        </TableHead>
                        <TableHead className="text-right">
                          Price/Night
                        </TableHead>
                        <TableHead className="text-right">Ratings</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {roomsData
                        .filter((home) => home.unitType === "studio") // Filter for studio unit type
                        .map((home, index) => (
                          <TableRow key={home.id}>
                            <TableCell>{index + 1}</TableCell>
                            <TableCell>
                              <img
                                src={home.roomPhoto}
                                alt={home.homeName}
                                className="w-12 h-12 rounded-md"
                              />
                            </TableCell>
                            <TableCell className="font-medium">
                              {home.homeName}
                            </TableCell>
                            <TableCell className="hidden sm:table-cell">
                              {home.location}
                            </TableCell>
                            <TableCell className="hidden sm:table-cell">
                              {home.unitType}
                            </TableCell>
                            <TableCell className="hidden sm:table-cell">
                              {home.featured ? (
                                <Badge className="text-xs" variant="secondary">
                                  Yes
                                </Badge>
                              ) : (
                                <Badge className="text-xs" variant="outline">
                                  No
                                </Badge>
                              )}
                            </TableCell>
                            <TableCell className="text-right">
                              Ksh {home.priceNight}
                            </TableCell>
                            <TableCell className="text-right">
                              {home.ratings} ★
                            </TableCell>
                          </TableRow>
                        ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="1bedroom">
              <Card x-chunk="dashboard-05-chunk-3">
                <CardHeader className="px-7">
                  <CardTitle>1 Bedroom Homes</CardTitle>
                  <CardDescription>
                    Latest 1 bedroom rental properties available on Sarah
                    Homestay.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>#</TableHead>
                        <TableHead>Image</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead className="hidden sm:table-cell">
                          Location
                        </TableHead>
                        <TableHead className="hidden sm:table-cell">
                          Unit Type
                        </TableHead>
                        <TableHead className="hidden sm:table-cell">
                          Featured
                        </TableHead>
                        <TableHead className="text-right">
                          Price/Night
                        </TableHead>
                        <TableHead className="text-right">Ratings</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {roomsData
                        .filter((home) => home.unitType === "1_bedroom") // Filter for 1bedroom unit type
                        .map((home, index) => (
                          <TableRow key={home.id}>
                            <TableCell>{index + 1}</TableCell>
                            <TableCell>
                              <img
                                src={home.roomPhoto}
                                alt={home.homeName}
                                className="w-12 h-12 rounded-md"
                              />
                            </TableCell>
                            <TableCell className="font-medium">
                              {home.homeName}
                            </TableCell>
                            <TableCell className="hidden sm:table-cell">
                              {home.location}
                            </TableCell>
                            <TableCell className="hidden sm:table-cell">
                              {home.unitType}
                            </TableCell>
                            <TableCell className="hidden sm:table-cell">
                              {home.featured ? (
                                <Badge className="text-xs" variant="secondary">
                                  Yes
                                </Badge>
                              ) : (
                                <Badge className="text-xs" variant="outline">
                                  No
                                </Badge>
                              )}
                            </TableCell>
                            <TableCell className="text-right">
                              Ksh {home.priceNight}
                            </TableCell>
                            <TableCell className="text-right">
                              {home.ratings} ★
                            </TableCell>
                          </TableRow>
                        ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="2bedroom">
              <Card x-chunk="dashboard-05-chunk-3">
                <CardHeader className="px-7">
                  <CardTitle>2 Bedroom Homes</CardTitle>
                  <CardDescription>
                    Latest 2 bedroom rental properties available on Sarah
                    Homestay.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>#</TableHead>
                        <TableHead>Image</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead className="hidden sm:table-cell">
                          Location
                        </TableHead>
                        <TableHead className="hidden sm:table-cell">
                          Unit Type
                        </TableHead>
                        <TableHead className="hidden sm:table-cell">
                          Featured
                        </TableHead>
                        <TableHead className="text-right">
                          Price/Night
                        </TableHead>
                        <TableHead className="text-right">Ratings</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {roomsData
                        .filter((home) => home.unitType === "2_bedroom") // Filter for 2bedroom unit type
                        .map((home, index) => (
                          <TableRow key={home.id}>
                            <TableCell>{index + 1}</TableCell>
                            <TableCell>
                              <img
                                src={home.roomPhoto}
                                alt={home.homeName}
                                className="w-12 h-12 rounded-md"
                              />
                            </TableCell>
                            <TableCell className="font-medium">
                              {home.homeName}
                            </TableCell>
                            <TableCell className="hidden sm:table-cell">
                              {home.location}
                            </TableCell>
                            <TableCell className="hidden sm:table-cell">
                              {home.unitType}
                            </TableCell>
                            <TableCell className="hidden sm:table-cell">
                              {home.featured ? (
                                <Badge className="text-xs" variant="secondary">
                                  Yes
                                </Badge>
                              ) : (
                                <Badge className="text-xs" variant="outline">
                                  No
                                </Badge>
                              )}
                            </TableCell>
                            <TableCell className="text-right">
                              Ksh {home.priceNight}
                            </TableCell>
                            <TableCell className="text-right">
                              {home.ratings} ★
                            </TableCell>
                          </TableRow>
                        ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="villa">
              <Card x-chunk="dashboard-05-chunk-3">
                <CardHeader className="px-7">
                  <CardTitle>Villas</CardTitle>
                  <CardDescription>
                    Latest villa rental properties available on Sarah Homestay.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>#</TableHead>
                        <TableHead>Image</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead className="hidden sm:table-cell">
                          Location
                        </TableHead>
                        <TableHead className="hidden sm:table-cell">
                          Unit Type
                        </TableHead>
                        <TableHead className="hidden sm:table-cell">
                          Featured
                        </TableHead>
                        <TableHead className="text-right">
                          Price/Night
                        </TableHead>
                        <TableHead className="text-right">Ratings</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {roomsData
                        .filter((home) => home.unitType === "villa") // Filter for villa unit type
                        .map((home, index) => (
                          <TableRow key={home.id}>
                            <TableCell>{index + 1}</TableCell>
                            <TableCell>
                              <img
                                src={home.roomPhoto}
                                alt={home.homeName}
                                className="w-12 h-12 rounded-md"
                              />
                            </TableCell>
                            <TableCell className="font-medium">
                              {home.homeName}
                            </TableCell>
                            <TableCell className="hidden sm:table-cell">
                              {home.location}
                            </TableCell>
                            <TableCell className="hidden sm:table-cell">
                              {home.unitType}
                            </TableCell>
                            <TableCell className="hidden sm:table-cell">
                              {home.featured ? (
                                <Badge className="text-xs" variant="secondary">
                                  Yes
                                </Badge>
                              ) : (
                                <Badge className="text-xs" variant="outline">
                                  No
                                </Badge>
                              )}
                            </TableCell>
                            <TableCell className="text-right">
                              Ksh {home.priceNight}
                            </TableCell>
                            <TableCell className="text-right">
                              {home.ratings} ★
                            </TableCell>
                          </TableRow>
                        ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
          </div>
        </main>
      </Tabs>
    </div>
  );
}

export default RoomManagement;
